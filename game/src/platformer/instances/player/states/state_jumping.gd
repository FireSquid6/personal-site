extends PlatformPlayerState

var timer: Timer


# runs whenever this state is entered
func _enter(args := []) -> void:
	animation = "Midair"
	player.jump_buffered = false
	player.can_spin = true
	
	# start the jump timer
	timer = player.get_node("JumpTimer")
	timer.wait_time = player.jump_time 
	timer.start()
	
	# set velocity to jump spd
	player.velocity.y = -player.jump_spd
	
	# connect to the jump timer
	if !timer.is_connected("timeout", self, "_on_JumpTimer_timer_timeout"):
		timer.connect("timeout", self, "_on_JumpTimer_timer_timeout")


# virtaul method for running game logic. Delta is whatever value is passed to the state machine when process_states() is called.
func _game_logic(delta) -> void:
	var input: Dictionary = player.input
	
	# do horizontal movement
	player.accelerate(input["move"], player.air_friction)
	
	# do vertical movement
	player.velocity.y += player.jump_grv
	
	# request walljump
	player.request_walljump()
	
	# request spin
	player.request_spin()


# virtual method for running transition logic
func _transition_logic(existing_states: Array):
	var input: Dictionary = player.input
	
	# if stopped jumping, hit a ceiling, or velocity is greater than 0 for some reason switch state
	if !input["jump"] or player.is_on_ceiling() or player.velocity.y >= 0:
		machine.change_state("StateFalling", [])


func _exit(args := []):
	timer.disconnect("timeout", self, "_on_JumpTimer_timer_timeout")


func _on_JumpTimer_timer_timeout():
	machine.change_state("StateFalling", [])
