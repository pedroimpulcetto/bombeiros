import React from 'react';
import Header from './components/Header/index.js';
import './style.css';
import Navigation from './components/Menu/index.js';
import Routes from './routes';
function App() {
	return (
		<div className="App">
			<Header />
			
			<Routes />
		</div>
	);
}

export default App;
