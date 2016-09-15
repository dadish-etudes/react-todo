/**
 * TodoApp
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TodoApp.scss';
import TodoHeader from '../TodoHeader';
import MainSection from '../MainSection';
import TodoFooter from '../TodoFooter';
import TodoStore from '../../stores/TodoStore';

function getTodoState() {
  return {
    allTodos : TodoStore.getAll()
  };
}

class TodoApp extends Component {

  constructor(props) {
    super(props);
    this.state = getTodoState();
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount () {
    TodoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount () {
    TodoStore.removeChangeListener(this._onChange);
  }

  _onChange () {
    this.setState(getTodoState());
  }

	render () {
		return(
			<section className={s.root}>
        <TodoHeader allTodos={this.state.allTodos} />
        <MainSection allTodos={this.state.allTodos} />
        <TodoFooter allTodos={this.state.allTodos} />
			</section>
		);
	}

}

export default withStyles(s)(TodoApp);
