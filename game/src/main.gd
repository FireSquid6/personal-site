extends ColorRect


func _process(delta):
	# if inputs are given, move on
	if Input.is_action_just_pressed("lmb"):
		get_tree().change_scene("res://platformer/levels/level1.tscn")
