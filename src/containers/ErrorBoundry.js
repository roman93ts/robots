import React, {Component} from 'react';

class ErrorBoundry extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(){
		this.setState({hasError: true});
	}

	render() {
		return (this.state.hasError)  
			? <h2>Ouch, fethcing failed</h2>
			: this.props.children
	}
}

export default ErrorBoundry;