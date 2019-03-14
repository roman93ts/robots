import React, { Component } from 'react';

class Header extends Component {
	shouldComponentUpdate(){
		return false;
	}

	render(){
		return <h1>Futurama</h1>
	}
}

export default Header;