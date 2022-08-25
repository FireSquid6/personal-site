extends PlatformPlayerState


func _enter(args := []):
	animation = "Dive"
	
	# get velocity
	var angle = player.global_position.angle_to_point(player.get_global_mouse_position()) + PI
	player.velocity = Vector2(player.dive_spd, 0).rotated(angle)
	player.sprite.scale.x = 1
	
	
	if rad2deg(angle) > 90 and rad2deg(angle) <= 270:
		player.sprite.scale.x = -1


func _game_logic(delta):
	var input: Dictionary = player.input
	
	# handle jump buffer
	if len((player.jump_buffer as Area2D).get_overlapping_bodies()) > 0 and input["jump_pressed"]:
		player.jump_buffered = true
	
	# accelerate downwards
	player.velocity.y += player.dive_grv * delta
	player.velocity.y = clamp(player.velocity.y, -player.terminal_velocity, player.terminal_velocity)


func _transition_logic(possible_states := []):
	# go to falling
	if player.is_on_wall():
		machine.change_state("StateFalling")
	
	# go to moving
	if player.on_floor:
		if player.jump_buffered:
			machine.change_state("StateJumping")
		else:
			machine.change_state("StateMoving")
	
	# request spin
	player.request_spin()


func _exit(args := []):
	player.sprite.rotation = 0
