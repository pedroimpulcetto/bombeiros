import React, { Component } from 'react';
import api from '../../services/api.js';
import Navigation from '../Menu/index.js';
import add from '../_imagens/add.png';

export default class ConsultaRelatorio extends Component {
	state = {
		relatorio: [],
		numerador: 0
	};

	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async () => {
		const response = await api.get('talao/');
		this.setState({ relatorio: response.data.results });
	};

	render() {
		return (
			<div id="corpo-relatorio" className="card">
				<div id="header-relatorio" className="card-header">
					<div className="container">
						<h5>Filtrado por:</h5>
						Data - de: <strong /> até: <strong />
						<br />
						Rua: <strong />
						<br />
					</div>
					<div className="container">
						Bairro: <strong />
						<br />
						Atendente: <strong />
						<br />
					</div>
					<div className="container">
						Tipo de Ocorrência: <strong />
						<br />
						Viatura: <strong />
						<br />
					</div>
				</div>
			</div>
		);
	}
}
