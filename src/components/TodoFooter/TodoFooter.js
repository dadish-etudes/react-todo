/**
 * TodoFooter
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TodoFooter.scss';
import classNames from 'classnames';
import TodoActions from '../../actions/TodoActions';

class TodoFooter extends Component {

	constructor (props) {
		super(props);
		this.completeTasks = this.completeTasks.bind(this);
		this.incompleteTaskCount = this.incompleteTaskCount.bind(this);
		this.deleteCompleteTasks = this.deleteCompleteTasks.bind(this);
	}

	render () {
		let incompleteTaskCount = this.incompleteTaskCount();
		return(
			<section className={this.props.allTodos.length ? s.root : s.hidden}>
				<div className={s.left}>
					{incompleteTaskCount} item{incompleteTaskCount === 1 ? '' : 's'} left
				</div>
				
				<div className={s.filter}>
					<div className={s.filterItem}>All</div>
					<div className={s.filterItem}>Active</div>
					<div className={s.filterItem}>Completed</div>
				</div>
				
				<div className={s.delete} onClick={this.deleteCompleteTasks}>
					Clear completed
				</div>
			</section>
		);
	}

	deleteCompleteTasks () {
		this.completeTasks().forEach(item => TodoActions.destroy(item.id));
	}

	completeTasks () {
		return this.props.allTodos.filter(item => item.complete);
	}

	incompleteTaskCount () {
		return this.props.allTodos.length - this.completeTasks().length;
	}	

}

export default withStyles(s)(TodoFooter);
