/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.css';
import Header from '../Header';
import TodoHeader from '../TodoHeader';
import MainSection from '../MainSection';
import Footer from '../Footer';
import TodoStore from '../../stores/TodoStore';

function getTodoState() {
  return {
    allTodos : TodoStore.getAll()
  };
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = getTodoState();
    this._onChange = this._onChange.bind(this);
  }

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
    };
  }

  componentWillMount() {
    const { insertCss } = this.props.context;
    this.removeCss = insertCss(s);
    TodoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    this.removeCss();
    TodoStore.removeChangeListener(this._onChange);
  }

  _onChange () {
    this.setState(getTodoState());
  }

  render() {
    
    if (this.props.error) return this.props.children;

    return (
      <div>
        <Header />
        <TodoHeader />
        <MainSection 
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        />
        <Footer />
      </div>
    );
  }

}

export default App;
