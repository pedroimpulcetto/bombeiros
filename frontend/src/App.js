import React from 'react';
import Header from './components/Header/index.js';
import './style.css';
import CorpoIndex from './components/CorpoIndex/index.js';
import Crm from './components/Crm/index.js';
import Navigation from './components/Menu/index.js';

function App() {
	return (
		<div className="App">
			<Header />
			<Navigation />
			<Crm />
		</div>
	);
}

export default App;
