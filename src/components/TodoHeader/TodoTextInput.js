/**
 * TodoInputText
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TodoHeader.css';

const ENTER_KEY_CODE = 13;

class TodoInputText extends Component {

	constructor (props) {
		super(props);
		this.state = {};
		this.state.value = this.props.value || '';

		// bind the methods
		this._save = this._save.bind(this);
		this._onChange = this._onChange.bind(this);
		this._onKeyDown = this._onKeyDown.bind(this);
	}

	static propTypes = {
		id: PropTypes.string,
		placeholder: PropTypes.string,
		onSave: PropTypes.func.isRequired,
		value: PropTypes.string
	};

	render () {
		return(
			<input
				type="text"
				className={s.input}
				id={this.props.id}
				placeholder={this.props.placeholder}
				//onBlur={this._save}
				onChange={this._onChange}
				onKeyDown={this._onKeyDown}
				value={this.state.value}
				autoFocus={true}
			/>
		);
	}

	_save () {
		this.props.onSave(this.state.value);
		this.setState({
			value: ''
		});
	}

	_onChange (ev) {
		this.setState({
			value: ev.target.value
		});
	}

	_onKeyDown (ev) {
		if (ev.keyCode === ENTER_KEY_CODE) {
			this._save();
		}
	}

}

export default withStyles(s)(TodoInputText);
