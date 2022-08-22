extends PlatformPlayerState


func _ready():
	yield(player, "ready")
	active_connect_to(player.sprite, "animation_finished", self, "_on_Sprite_animation_finished")

func _enter(args := []):
	animation = "Walking"
	player.velocity = Vector2.ZERO
	player.disable()


func _on_Sprite_animation_finished():
	player.die()
