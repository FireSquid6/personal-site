extends KinematicBody2D
class_name PlatformPlayer


var velocity = Vector2.ZERO
var on_floor = false
var jump_buffered = false

export var max_spd: float = 210
export var deacc_spd: float = 25
export var acc_spd: float = 40
export var terminal_velocity: float = 500

export var jump_time = 0.175
export var jump_spd = 175

onready var floor_detector: Area2D = get_node("Floor")
onready var hazard_detector: Area2D = get_node("HazardDetector")
onready var state_machine: Node = get_node("StateMachine")


signal dead()


func _physics_process(delta):
	# PROCESS MOVEMENT
	# get on_floor
	on_floor = false
	for body in floor_detector.get_overlapping_bodies():
		if !(body == self):
			on_floor = true
			break
	
	# process states
	state_machine.process_states(delta)
	
	# move based on current velocity
	velocity = move_and_slide(velocity)


# accelerates the player in the given direction (move). 1 for right, -1 for left, and 0 for not at all.
# friction makes it harder to accelerate and decelerate if lower
func accelerate(move: int, friction: float = 1):
	if move != 0:
		if abs(velocity.x) > max_spd:
			velocity.x -= deacc_spd * sign(velocity.x) *  friction
		else:
			velocity.x += acc_spd * friction * move
			velocity.x = clamp(velocity.x, -max_spd, max_spd)
	else:
		if abs(velocity.x) <= deacc_spd * friction:
			velocity.x = 0
		else:
			velocity.x -= deacc_spd * friction * sign(velocity.x)
	
