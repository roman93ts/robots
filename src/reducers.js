import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js';

const initialStateSearch = {
	searchField: ''
}

export const searchRobots = (state=initialStateSearch,action={}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return {...state, searchField: action.payload};
			// return Object.assign({},state,{searchField:action.payload})
		default:
			return state
	}
}

const initialStateRequest = {
	robots: [],
	isPending: false,
	error: ''
}

export const requestRobots = (state=initialStateRequest,action={}) => {
	switch (action.type){
		case REQUEST_ROBOTS_PENDING:
			return {...state, isPending: true}
		case REQUEST_ROBOTS_SUCCESS:
			return {...state, robots: action.payload, isPending: false}
		case REQUEST_ROBOTS_FAILED:
			return {...state, error: action.payload, isPending: false}
		default:
			return state
	}
}