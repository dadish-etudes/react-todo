/**
 * TodoFooter
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TodoFooter.scss';
import classNames from 'classnames';

class TodoFooter extends Component {

	constructor (props) {
		super(props);
		this.completedItems = this.completedItems.bind(this);
		this.leftItemsCount = this.leftItemsCount.bind(this);
	}

	render () {
		let leftItemsCount = this.leftItemsCount();
		return(
			<section className={leftItemsCount ? s.root : s.hidden}>
				<div className={s.left}>
					{leftItemsCount} item{leftItemsCount === 1 ? '' : 's'} left
				</div>
				
				<div className={s.filter}>
					<div className={s.filterItem}>All</div>
					<div className={s.filterItem}>Active</div>
					<div className={s.filterItem}>Completed</div>
				</div>
				
				<div className={s.delete}>
					Clear completed
				</div>
			</section>
		);
	}

	completedItems () {
		return this.props.allTodos.filter(item => item.complete);
	}

	leftItemsCount () {
		return this.props.allTodos.length - this.completedItems().length;
	}	

}

export default withStyles(s)(TodoFooter);
