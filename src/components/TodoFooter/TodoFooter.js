/**
 * TodoFooter
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TodoFooter.scss';

class TodoFooter extends Component {

	render () {
		return(
			<section className={s.root}>
				Hello TodoFooter!
			</section>
		);
	}

}

export default withStyles(s)(TodoFooter);
