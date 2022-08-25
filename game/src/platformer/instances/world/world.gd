extends Node2D


func _ready():
	$Sky/ColorRect.visible = true
	$Sky/ColorRect.rect_size = Vector2(4096, 4096)
