import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import CardList from './CardList';
import ErrorBoundary from './ErrorBoundary';

import './App.css'

class App extends Component{
	constructor() {
		super()
		this.state={  
			robots:[] , 
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>{this.setState({robots:users})});
	}

	onSearchChange = (event)=>{
		this.setState({searchfield: event.target.value})
	}
	render(){
		const filteredrobots=this.state.robots.filter(({name, email, id})=>{
			return name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
		}); 
		if(this.state.robots.length===0){
			return <h1 className='tc'>LOADING ...</h1>;
		} 
		else{
			return(
				<div className= 'tc'>
					<h1 className='tc'>RoboFriends</h1>
					<SearchBox searchfield={this.state.searchfield} searchchange={this.onSearchChange}/>
					<Scroll>
					<ErrorBoundary>
						<CardList robos={filteredrobots} />
					</ErrorBoundary>
					</Scroll>
				</div>
				);
		}
	}
}
export default App;