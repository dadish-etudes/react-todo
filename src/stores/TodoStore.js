import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import TodoConstants from '../constants/TodoConstants';

const CHANGE_EVENT = 'change';

const _todos = {};

// for test purposes add a todo
let testTodo = {
	id: Date.now,
	text: 'This is a test todo',
	complete: false	
}

_todos[testTodo.id] = testTodo;

function create(text) {
	let id = Date.now();
	_todos[id] = {
		id: id,
		text: text,
		complete: false
	};
}

function destroy(id) {
	delete _todos[id];
}

class TodoStore extends EventEmitter {

	constructor () {
		super();
		this.changeEventHandler = this.changeEventHandler.bind(this);
		this.dispatcherIndex = AppDispatcher.register(this.changeEventHandler);
	}
	
	getAll () {
		return _todos;
	}

	emitChange () {
		this.emit(CHANGE_EVENT);
	}

	addChangeListener (callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	changeEventHandler (payload) {
		let action = payload.action;
		let text;
		switch(action.actionType) {
			case TodoConstants.TODO_CREATE:
				text = action.text.trim();
				if(text !== '') {
					create(text);
					this.emitChange();
				}
				break;

			case TodoConstants.TODO_DESTROY:
				destroy(action.id);
				this.emitChange();
				break;
		}

		return true;
	}
}

export default new TodoStore();
