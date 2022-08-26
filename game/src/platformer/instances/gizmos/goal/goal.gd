extends Node2D


export(PackedScene) var next_scene = null


func change_scene():
	if next_scene == null:
		get_tree().reload_current_scene()
	else:
		get_tree().change_scene_to(next_scene)


func _on_Area2D_body_entered(body):
	change_scene()
