import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'
import {setSearchField, fetchRobots} from '../actions.js'

const mapStateToProps = state => {
	return{
		searchField: state.searchRobots.searchField,
		robots: state.fetchRobots.robots,
		isPending: state.fetchRobots.isPending,
		error: state.fetchRobots.error
	}
}
const mapDispatchToProps = dispatch => {
	return{
		onSearchChange: event => dispatch(setSearchField(event.target.value)),
		onFetchRobots: () => dispatch(fetchRobots())
	}
}

class App extends Component{
	
	componentDidMount(){
		this.props.onFetchRobots();
	}


	render(){
		const {searchField, onSearchChange, robots, isPending, error}= this.props; 
		const filteredrobots=robots.filter(({name, email, id})=>{
			return name.toLowerCase().includes(searchField.toLowerCase());
		}); 
		return (isPending)
			?
			 <h1 className='tc'>LOADING ...</h1>
			:
			(<div className= 'tc'>
				<h1 className='tc'>Hash Kittens</h1>
				<SearchBox  searchchange={onSearchChange}/>
				{(error)
					?
					`${error}`
					:
					<Scroll>
						<ErrorBoundary>
							<CardList robos={filteredrobots} />
						</ErrorBoundary>
					</Scroll>
				}
			</div>
			);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);