extends KinematicBody2D
class_name PlatformPlayer


var velocity = Vector2.ZERO
var on_floor = false
var input := {
	"move" : 0,
	"jump_pressed" : false,
	"jump" : false,
}
var jump_buffered = false

export var max_spd: float = 200
export var deacc_spd: float = 50
export var acc_spd: float = 50
export var terminal_velocity: float = 500

export var jump_time = 0.2
export var jump_spd = 175
export var air_friction = 0.75

export var coyote_time: float = 0.05

export var grv = 900
export var jump_grv = 180
export var dive_grv = 600

export var has_walljump = false
export var walljump_spd = 210
var walljump_buffered = false

export var spin_spd = 400
var can_spin = true

export var dive_spd = 300
var can_dive = true
var spawn_pos: Vector2

onready var floor_detector: Area2D = get_node("Floor")
onready var hazard_detector: Area2D = get_node("HazardDetector")
onready var state_machine: Node = get_node("StateMachine")
onready var walljump_buffer: Area2D = get_node("WallBuffer")
onready var sprite: AnimatedSprite = get_node("Sprite")
onready var jump_buffer: Area2D = get_node("FloorBuffer")


signal dead()


func _ready():
	spawn_pos = position


func _physics_process(delta):
	# PROCESS MOVEMENT
	# get inputs
	input = {
		"move" : int(Input.is_action_pressed("platformer_move_right")) - int(Input.is_action_pressed("platformer_move_left")),
		"jump" : Input.is_action_pressed("platformer_jump"),
		"jump_pressed" : Input.is_action_just_pressed("platformer_jump"),
		"spin" : Input.is_action_pressed("platformer_spin"),
		"dive" : Input.is_action_just_pressed("platformer_dive")
	}
	
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
	
	# set sprite
	sprite.animation = (state_machine.selected_state as PlatformPlayerState).animation
	if input["move"] != 0 and state_machine.selected_state.name != "StateDive":
		sprite.scale.x = input["move"]


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


func die():
	state_machine.change_state("StateDead")
	emit_signal("dead")


func _on_HazardDetector_body_entered(_body):
	die()


func request_walljump():
	process_walljump_buffer()
	
	if is_on_wall() and (input["jump_pressed"] or walljump_buffered) and input["move"] != 0 and has_walljump and velocity.y >= 0:
		walljump_buffered = false
		velocity.x = walljump_spd * -input["move"]
		
		state_machine.change_state("StateJumping")
		return true
	
	return false


func process_walljump_buffer():
	if (!walljump_buffered) and input["jump_pressed"]:
		if len(walljump_buffer.get_overlapping_bodies()) > 0:
			walljump_buffered = true


func request_dive():
	if input["dive"] and can_dive:
		can_dive = false
		state_machine.change_state("StateDive")


func request_spin():
	if input["spin"] and can_spin and input["move"] != 0:
		can_spin = false
		state_machine.change_state("StateSpinning")


func disable():
	visible = false
	collision_layer = 0
	collision_mask = 0
