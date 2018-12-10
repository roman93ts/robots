import {CHANGE_SEARCH_FIELD} from './constants.js';

const initialState = {
	searchField: ''
}

export const changeRobots = (state=initialState, action={}) => {
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({},searchField,{searchField:action.payload});
		default:
			return state;
	}
}