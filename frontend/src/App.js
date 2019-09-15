import React from 'react';
import Header from './components/Header/index.js';
import './style.css';
import Navigation from './components/Menu/index.js';
import ConsultaRelatorio from './components/Relatorio/consultarelatorio.js';
import Modal from './components/Modal/Viatura/modal.js';
import Routes from './routes'
function App() {
	return (
		<div className="App">
			<Header />
			<Navigation />
			<Routes/>
		</div>
	);
}

export default App;
