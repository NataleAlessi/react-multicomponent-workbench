import React, { Component } from 'react';

class ClassTest extends React.Component {

	// run before anything else; use to build state variables
	constructor(props) {
		// call parent constructor. should be here always.
		super(props);
		// instead of useState Hook
		this.state = {
			name : 'Natale',
			age : 30,
			handsome : true,
		}
	}


	render() {
		return(
			<div>
				<p>ClassTest here!</p>
				<p>name: {this.state.name}</p>
				<p>age: {this.state.age}</p>
				<p>handsome: {this.state.handsome ? 'F*ckYeah!' : 'there must be an error in handsomeness...'}</p>
			</div>
		)
	}
}

export default ClassTest;