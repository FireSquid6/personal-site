extends AnimatedSprite


func _on_Area2D_body_entered(body):
	if frame == 0 and body as PlatformPlayer:
		frame += 1
		(body as PlatformPlayer).spawn_pos = position
