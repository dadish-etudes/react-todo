/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {Component} from 'react';
import classNames from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MainSection.css';
import TodoItem from './TodoItem';

class MainSection extends Component {

	render () {
		let allTodos = this.props.allTodos;
		let todos = [];

		for (var key in allTodos) {
			todos.push(<TodoItem key={key} todo={allTodos[key]} />);
		}

	  return (
	    <section className={s.root}>
	    	<ul className={s.ul}>
	    		{todos}	
	    	</ul>
	    </section>
	  );
	}

}

export default withStyles(s)(MainSection);
