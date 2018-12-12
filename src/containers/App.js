import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import CardPlate from '../components/CardPlate';
import SearchField from '../components/SearchField';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField} from '../actions';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onField: (event) => dispatch(setSearchField(event.target.value))
	}
};

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	onField = (event) => {
		// const newValue = ;
		this.setState({
			searchField: event.target.value.toLowerCase()
		})
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(data => data.json())
		.then(user => {
			this.setState({
				robots:user
			})
		})
	}

	render(){
		const newRobots = this.state.robots.filter(user => {
			return user.name.toLowerCase().includes(this.state.searchField)	
		})
		if (!this.state.robots.length){
			return <h1>Loading...</h1>
		} else {
			return (
				<div className="appLay">
					<h1>Bender Friends</h1>
					<SearchField changeSearchField={this.onField}/>
					<ErrorBoundry>
						<CardPlate array={newRobots}/>
					</ErrorBoundry>	
				</div>
			);
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);