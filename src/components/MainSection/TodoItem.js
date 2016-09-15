/**
 * TodoItem
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TodoItem.scss';
import TodoActions from '../../actions/TodoActions';
import classNames from 'classnames';
import IconCheck from 'react-icons/lib/md/check';
import IconCheckBox from 'react-icons/lib/md/check-box-outline-blank';
import IconDelete from 'react-icons/lib/md/delete';


class TodoItem extends Component {

	constructor (props) {
		super(props);
		this._onDestroyClick = this._onDestroyClick.bind(this);
		this._toggleComplete = this._toggleComplete.bind(this);
	}

	static propTypes = {
		todo: PropTypes.object.isRequired
	};

	render () {
		let todo = this.props.todo;
		let icon;
		if (todo.complete) {
			icon = <IconCheck className={classNames(s.icon, s.check)} onClick={this._toggleComplete}/>;
		} else {
			icon = <IconCheckBox className={classNames(s.icon, s.checkBox)} onClick={this._toggleComplete}/>
		}

		return (
			<li className={s.root} key={todo.id} >
					{icon}
				<label className={s.txt}>
					{todo.text}
				</label>
				<IconDelete className={s.delete} onClick={this._onDestroyClick} />
			</li>	
		);
	}

	_toggleComplete () {
		if (this.props.todo.complete) {
			TodoActions.unmarkComplete(this.props.todo.id);
		} else {
			TodoActions.markComplete(this.props.todo.id);
		}
	}

	_onDestroyClick () {
		TodoActions.destroy(this.props.todo.id);
	}
}

export default withStyles(s)(TodoItem);
