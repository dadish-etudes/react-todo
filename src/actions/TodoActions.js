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

}

export default new TodoActions();
