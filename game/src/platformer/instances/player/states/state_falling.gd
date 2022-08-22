extends PlatformPlayerState


onready var cyote_time_left = 0


# runs whenever this state is entered
func _enter(args := []) -> void:
	animation = "Midair"
	if machine.state_history[0] == "StateMoving":
		cyote_time_left = player.coyote_time
	else:
		cyote_time_left = 0


# virtaul method for running game logic. Delta is whatever value is passed to the state machine when process_states() is called.
func _game_logic(delta) -> void:
	# get input
	var input: Dictionary = player.input
	
	# handle horizontal movement
	player.accelerate(input["move"], player.air_friction)
	
	# handle jump buffer
	if len((player.jump_buffer as Area2D).get_overlapping_bodies()) > 0 and input["jump_pressed"]:
		player.jump_buffered = true
	
	# deal with cyote time
	cyote_time_left -= delta
	cyote_time_left = clamp(cyote_time_left, 0, 10)
	if cyote_time_left > 0 and input["jump_pressed"]:
		machine.change_state("StateJumping", [])
	
	 # accelerate downwards
	var grv_multiplier = 1
	if player.velocity.y >= 0:
		grv_multiplier = (1 - (int(player.is_on_wall()) * 0.5))
	player.velocity.y += player.grv * grv_multiplier
	player.velocity.y = clamp(player.velocity.y, -player.terminal_velocity, player.terminal_velocity)
	
	# do walljump
	player.request_walljump()


# virtual method for running transition logic
func _transition_logic(existing_states: Array):
	if player.on_floor:
		if player.jump_buffered:
			machine.change_state("StateJumping")
		else:
			machine.change_state("StateMoving", [])

