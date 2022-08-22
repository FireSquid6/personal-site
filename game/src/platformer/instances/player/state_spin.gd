extends PlatformPlayerState


onready var spin_timer = get_node("SpinTimer")


func _ready():
	active_connect_to(spin_timer, "timeout", self, "_on_SpinTimer_timeout")


func _enter(args := []):
	animation = "Spinning"
	
	# set velocity
	var dir = player.input["move"]
	player.velocity.x = dir * player.spin_spd
	player.velocity.y = 0
	
	# start timer
	spin_timer.start()
	


func _on_SpinTimer_timeout():
	machine.change_state("StateFalling")
