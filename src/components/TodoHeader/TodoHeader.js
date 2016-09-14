/**
 * TodoHeader
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TodoHeader.css';
import TodoActions from '../../actions/TodoActions';
import TodoTextInput from './TodoTextInput';

class TodoHeader extends Component {

	render () {
		return(
			<section className={s.root}>
				<TodoTextInput
					id="new-todo"
					placeholder="What needs to be done?"
					onSave={this._onSave}
				/>
			</section>
		);
	}

	_onSave (text) {
		TodoActions.create(text);
	}

}

export default withStyles(s)(TodoHeader);
