import React, { Component } from 'react';
import Navigation from '../Menu';
import { Link } from 'react-router-dom';

export default class Relatorio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterReport: this.props.filterReport
		};
	}

	handleChange = (e) => {
		let { name, value } = e.target;
		const filterReport = { ...this.state.filterReport, [name]: value };
		this.setState({ filterReport });
	};

	render() {
		return (
			<main>
				<Navigation />
				<div id="corpo-relatorios" className="card">
					<div id="header-relatorio" className="card-header">
						<h1 className="card-title">Filtrar</h1>
					</div>
					<div id="body-relatorio" className="card-body">
						<form onSubmit={this.handleSubmit}>
							<div className="form-row">
								<div className="form-group col-md-2">
									<label for="inputRelDateDE">Data - de:</label>
									<input
										type="date"
										className="form-control"
										name="inputRelDateDE"
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group col-md-2">
									<label for="inputRelDateATE">até:</label>
									<input
										type="date"
										className="form-control"
										name="inputRelDateATE"
										onChange={this.handleChange}
									/>
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
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group col-md-2">
									<label for="inputRelBairro">Bairro</label>
									<input
										type="text"
										className="form-control"
										name="inputRelBairro"
										placeholder="JARDIM EROISE"
										onChange={this.handleChange}
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
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group col-md-4">
									<label for="inputRelTipoOcorrencia">Tipo de Ocorrência</label>
									<input
										type="text"
										className="form-control"
										name="inputRelTipoOcorrencia"
										placeholder="CARRO X MOTO"
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group col-md-2">
									<label for="inputRelVtr">Viatura</label>
									<input
										type="text"
										className="form-control"
										name="inputRelVtr"
										placeholder="UR16215"
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-2">
									<label for="inputRelMotorista">Motorista</label>
									<input
										type="text"
										className="form-control"
										name="inputRelMotorista"
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group col-md-2">
									<label for="inputRelComandante">Comandante</label>
									<input
										type="text"
										className="form-control"
										name="inputRelComandante"
										onChange={this.handleChange}
									/>
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
			</main>
		);
	}
}
