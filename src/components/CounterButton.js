import React, { Component } from 'react';

class CounterButton extends Component {
	constructor(){
		super();
		this.state = {
			counter: 0
		}
	}

	shouldComponentUpdate(nextProps,nextState){
		if (this.state.counter !== nextState.counter){
			return true;
		}
		return false;
	}

	onChangeCount = () => {
		this.setState({
			counter: this.state.counter+1
		})
	}

	render(){
		return (
			<button onClick = {this.onChangeCount}
					style={{width: '100px',
							'justifySelf':'center',
							'height':'30px',
							'border':'none',
							'border-radius':'10px',
							'background-color':'rgba(135,206,250,0.5)'}}
			>
				Count: {this.state.counter}
			</button>
		)
	}
}

export default CounterButton;