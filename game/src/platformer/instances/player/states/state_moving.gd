extends PlatformPlayerState


# runs whenever this state is entered
func _enter(args := []) -> void:
	player.velocity.y = 0
	player.can_dive = true


# virtaul method for running game logic. Delta is whatever value is passed to the state machine when process_states() is called.
func _game_logic(delta) -> void:
	# get the player's inputs
	var input: Dictionary = player.input
	
	if input["move"] != 0:
		animation = "Walking"
	else:
		animation = "Idle"
	
	# acceleate
	player.accelerate(input["move"])


# virtual method for running transition logic
func _transition_logic(existing_states: Array):
	# get the player's inputs
	var input: Dictionary = player.input
	
	# test to see if the player should jump
	if player.jump_buffered or input["jump_pressed"]:
		machine.change_state("StateJumping", [])
	
	# move to fall if not on floor
	if !player.on_floor:
		machine.change_state("StateFalling", [])
