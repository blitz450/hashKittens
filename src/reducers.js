import { CHANGE_SEARCH_FIELD,
			FETCH_ROBOTS_PENDING,
			FETCH_ROBOTS_SUCCESS,
			FETCH_ROBOTS_FAIL } from './constants.js'

const initialStateSearch = {
	searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) =>{
	switch (action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({},state,{searchField: action.payload});
		default:
			return state;
	}
}

const initialStateRobots = {
	robots: [],
	isPending: true,
	error: ''
}

export const fetchRobots = (state=initialStateRobots, action={}) =>{
	switch (action.type){
		case FETCH_ROBOTS_PENDING:
			return Object.assign({},state,{isPending:true});
		case FETCH_ROBOTS_SUCCESS:
			return Object.assign({},state,{isPending:false, robots: action.payload});
		case FETCH_ROBOTS_FAIL:
			return Object.assign({},state,{isPending:false, error: action.payload});
		default:
			return state;
	}
}