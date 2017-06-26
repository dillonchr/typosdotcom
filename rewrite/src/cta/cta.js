import React, { Component } from 'react';
import './cta.css';

export default class CTA extends Component {
	render() {
		return (
			<div className="cta">
		        <a className="link" href={ this.props.link }>{ this.props.text }</a>
		    </div>
		);
	}
}