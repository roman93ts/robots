import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import ErrorBoundry from './ErrorBoundry';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchField: event=> dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	

	componentDidMount() {
		this.props.onRequestRobots();
	}

	render(){
		const {searchField, onSearchField, robots, isPending} = this.props;
		let newRobots = robots.filter(el => {
			return el.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return (
				<div className = 'app'>
					<Header />
					<SearchBox searchField = {onSearchField}/>
					<Scroll>
					{isPending ? <h1>Loading...</h1> :
						<ErrorBoundry>
							<CardList robots = {newRobots}/>
						</ErrorBoundry>
					}
					</Scroll>
				</div>
			)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);