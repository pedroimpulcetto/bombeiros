import React from 'react';
import Header from './components/Header/index.js';
import './style.css';
import CorpoIndex from './components/CorpoIndex/index.js';
import Crm from './components/Crm/index.js';
import Navigation from './components/Menu/index.js';
import Efetivo from './components/Efetivo/index.js';
import Viatura from './components/Viatura/index.js';
import ConsultaRelatorio from './components/Relatorio/consultarelatorio.js';
import Relatorio from './components/Relatorio/index.js';
import Modal from './components/Modal/Viatura/modal.js';

function App() {
	return (
		<div className="App">
			<Header />
			<Navigation />
			<Viatura />
		</div>
	);
}

export default App;
