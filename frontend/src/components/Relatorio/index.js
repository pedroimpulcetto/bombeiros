import React, { Component } from 'react';
import api from '../../services/api.js';
import add from '../_imagens/add.png';

export default class Relatorio extends Component {
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
			<div id="corpo-relatorios" className="card">
				<div id="header-relatorio" className="card-header">
					<h1 className="card-title">Filtrar</h1>
				</div>
				<div id="body-relatorio" className="card-body">
					<form method="post" action="">
						<div className="form-row">
							<div className="form-group col-md-2">
								<label for="inputRelDateDE">Data - de:</label>
								<input type="date" className="form-control" name="inputRelDateDE" />
							</div>
							<div className="form-group col-md-2">
								<label for="inputRelDateATE">até:</label>
								<input type="date" className="form-control" name="inputRelDateATE" />
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-5">
								<label for="inputRelRua">Rua</label>
								<input
									type="text"
									className="form-control editar"
									name="inputRelRua"
									placeholder="RUA JOSÉ LOPES SILVA"
								/>
							</div>
							<div className="form-group col-md-2">
								<label for="inputRelBairro">Bairro</label>
								<input
									type="text"
									className="form-control"
									name="inputRelBairro"
									placeholder="JARDIM EROISE"
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-2">
								<label for="inputRelAtendente">Atendente</label>
								<input
									type="text"
									className="form-control"
									name="inputRelAtendente"
									placeholder="CB FAVERI"
								/>
							</div>
							<div className="form-group col-md-4">
								<label for="inputRelTipoOcorrencia">Tipo de Ocorrência</label>
								<input
									type="text"
									className="form-control"
									name="inputRelTipoOcorrencia"
									placeholder="CARRO X MOTO"
								/>
							</div>
							<div className="form-group col-md-2">
								<label for="inputRelVtr">Viatura</label>
								<input type="text" className="form-control" name="inputRelVtr" placeholder="UR16215" />
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-2">
								<label for="inputRelMotorista">Motorista</label>
								<input type="text" className="form-control" name="inputRelMotorista" />
							</div>
							<div className="form-group col-md-2">
								<label for="inputRelComandante">Comandante</label>
								<input type="text" className="form-control" name="inputRelComandante" />
							</div>
						</div>
					</form>
					<div id="footer-relatorio" className="card-footer">
						<button type="submit" className="btn btn-primary float-right">
							Gerar Relatório
						</button>
					</div>
				</div>
			</div>
		);
	}
}
