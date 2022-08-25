extends Node2D


export(PackedScene) var next_scene = null


func change_scene():
	if next_scene == null:
		get_tree().reload_current_scene()
	else:
		get_tree().change_scene_to(next_scene)
