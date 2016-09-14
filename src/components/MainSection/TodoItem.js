/**
 * TodoItem
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TodoItem.scss';
import TodoActions from '../../actions/TodoActions';

class TodoItem extends Component {

	constructor (props) {
		super(props);
		this._onDestroyClick = this._onDestroyClick.bind(this);
	}

	static propTypes = {
		todo: PropTypes.object.isRequired
	};

	render () {
		let todo = this.props.todo;

		return (
			<li
				className={s.root}
				key={todo.id}
			>
				<label>
					{todo.text}
				</label>
				<button className={s.button} onClick={this._onDestroyClick}>del</button>
			</li>	
		);
	}

	_onDestroyClick () {
		TodoActions.destroy(this.props.todo.id);
	}
}

export default withStyles(s)(TodoItem);
