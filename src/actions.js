import { CHANGE_SEARCH_FIELD,
			FETCH_ROBOTS_PENDING,
			FETCH_ROBOTS_SUCCESS,
			FETCH_ROBOTS_FAIL } from './constants.js'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})
export const fetchRobots=() => (dispatch) => {
	dispatch({type: FETCH_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(data=> dispatch({type: FETCH_ROBOTS_SUCCESS, payload: data}))
		.catch(error=> dispatch({type: FETCH_ROBOTS_FAIL, payload: error}))
}