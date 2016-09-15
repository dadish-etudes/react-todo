/**
 * TodoFooter
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TodoFooter.scss';
import classNames from 'classnames';
import TodoActions from '../../actions/TodoActions';
import TodoConstants from '../../constants/TodoConstants';

class TodoFooter extends Component {

	constructor (props) {
		super(props);
		this.getCompleteTasks = this.getCompleteTasks.bind(this);
		this.incompleteTaskCount = this.incompleteTaskCount.bind(this);
		this.deleteCompleteTasks = this.deleteCompleteTasks.bind(this);
		this.filterAll = this.filterAll.bind(this);
		this.filterActive = this.filterActive.bind(this);
		this.filterCompleted = this.filterCompleted.bind(this);
	}

	deleteCompleteTasks () {
		this.getCompleteTasks().forEach(item => TodoActions.destroy(item.id));
	}

	getCompleteTasks () {
		return this.props.allTodos.filter(item => item.complete);
	}

	incompleteTaskCount () {
		return this.props.allTodos.length - this.getCompleteTasks().length;
	}

	filterAll () {
		this.props.setFilter(TodoConstants.TODO_FILTER_ALL);
	}

	filterActive () {
		this.props.setFilter(TodoConstants.TODO_FILTER_ACTIVE);
	}

	filterCompleted () {
		this.props.setFilter(TodoConstants.TODO_FILTER_COMPLETED);
	}

	render () {
		let incompleteTaskCount = this.incompleteTaskCount();

		let AllCls = [s.filterItem];
		if (this.props.filterType === TodoConstants.TODO_FILTER_ALL) {
			AllCls.push(s.active);
		}

		let ActiveCls = [s.filterItem];
		if (this.props.filterType === TodoConstants.TODO_FILTER_ACTIVE) {
			ActiveCls.push(s.active);
		}

		let CompletedCls = [s.filterItem];
		if (this.props.filterType === TodoConstants.TODO_FILTER_COMPLETED) {
			CompletedCls.push(s.active);
		}

		return(
			<section className={this.props.allTodos.length ? s.root : s.hidden}>
				<div className={s.left}>
					{incompleteTaskCount} item{incompleteTaskCount === 1 ? '' : 's'} left
				</div>
				
				<div className={s.filter}>
					<div className={classNames(AllCls)} onClick={this.filterAll}>All</div>
					<div className={classNames(ActiveCls)} onClick={this.filterActive}>Active</div>
					<div className={classNames(CompletedCls)} onClick={this.filterCompleted}>Completed</div>
				</div>
				
				<div className={s.delete} onClick={this.deleteCompleteTasks}>
					Clear completed
				</div>
			</section>
		);
	}

}

export default withStyles(s)(TodoFooter);
