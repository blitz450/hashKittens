import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
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
		const {robots , searchfield}=this.state;
		const filteredrobots=robots.filter(({name, email, id})=>{
			return name.toLowerCase().includes(searchfield.toLowerCase()); 
		}); 
		return (!robots.length)?
			 <h1 className='tc'>LOADING ...</h1> :
			(<div className= 'tc'>
				<h1 className='tc'>RoboFriends</h1>
				<SearchBox searchfield={searchfield} searchchange={this.onSearchChange}/>
				<Scroll>
				<ErrorBoundary>
					<CardList robos={filteredrobots} />
				</ErrorBoundary>
				</Scroll>
			</div>
			);
	}
}
export default App;