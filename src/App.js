import React, { Component } from 'react';
import CardList from './components/cardList/CardList.jsx';
import SearchBox from './components/searchBox/SearchBox.jsx';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	render() {
		const { monsters, searchField } = this.state;
		return (
			<div className="App">
				<SearchBox
					placeholder="search monsters"
					handleChange={(e) => this.setState({ searchField: e.target.value })}
				/>
				<CardList monsters={this.state.monsters} />
			</div>
		);
	}
}

export default App;
