extends Node
class_name State


var active_signals := []
onready var machine = get_parent() # the parent state machine manager


# runs whenever this state is entered
func _enter(args := []) -> void:
	pass


# runs whenever this state is exited
func _exit(args := []) -> void:
	pass


# virtaul method for running game logic. Delta is whatever value is passed to the state machine when process_states() is called.
func _game_logic(delta) -> void:
	pass


# virtual method for running transition logic
func _transition_logic(existing_states: Array):
	pass


# a virtual method that can be overriden to add parameters to make sure a state can be moved into first. The method is run by the state_machine during the change_state method. If it returns false, the state change is aborted. By default it always returns true
func _can_change() -> bool:
	return true


# same as _input(), but only called when active
func _active_input(event: InputEvent) -> void:
	pass


# adds a signal that will automatically connect when entered, and automaticalled disconnect when exited. Best used in the _ready() method.
func active_connect_to(connector: Object, signal_name: String, method_owner: Object, method_name: String) -> void:
	active_signals.append({
		"connector": connector,
		"signal": signal_name,
		"reciever": method_owner,
		"method": method_name 
	})
	
	# make sure the connection is initiated properly
	if machine.selected_state == self and !connector.is_connected(signal_name, method_owner, method_name):
		connector.connect(signal_name, method_owner, method_name)
	elif connector.is_connected(signal_name, method_owner, method_name):
		connector.disconnect(signal_name, method_owner, method_name)
