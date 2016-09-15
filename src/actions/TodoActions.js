/**
 * TodoActions
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

class TodoActions {
	
	create (text) {
		AppDispatcher.handleViewAction({
			actionType: TodoConstants.TODO_CREATE,
			text: text
		});
	}

	destroy (id) {
		AppDispatcher.handleViewAction({
			actionType: TodoConstants.TODO_DESTROY,
			id: id
		});
	}

	markComplete (id) {
		this.update(id, 'complete', true);
	}

	unmarkComplete (id) {
		this.update(id, 'complete', false);
	}

	update (id, property, value) {
		AppDispatcher.handleViewAction({
			actionType: TodoConstants.TODO_UPDATE,
			id: id,
			property: property,
			value: value
		});
	}

}

export default new TodoActions();
