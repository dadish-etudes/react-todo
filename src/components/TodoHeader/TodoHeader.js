/**
 * TodoHeader
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TodoHeader.scss';
import TodoActions from '../../actions/TodoActions';
import TodoTextInput from './TodoTextInput';
import IconCheck from 'react-icons/lib/md/check';

class TodoHeader extends Component {

	render () {
		return(
			<section className={s.root}>
			<IconCheck className={s.icon} />
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
