import React, { Component, useState } from 'react';
import Navigation from '../Menu';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

export default function Relatorio() {
	let [ filterReport, setState ] = useState({
		data_de_talao: '',
		data_ate_talao: '',
		endereco_talao: '',
		bairro_talao: '',
		atendente_talao: '',
		tipo_ocor_talao: '',
		viatura_talao: '',
		motorista_talao: '',
		comandante_talao: ''
	});

	function handleChange(e) {
		let { name, value } = e.target;
		setState({ ...filterReport, [name]: value });
	}

	// instanciando a funcao useDispatch
	const dispatch = useDispatch();

	// funcao para adicionar 'valores' para o store
	function addFilterAction(filter) {
		return { type: 'ADD_FILTER', filter: filter };
	}

	// funcao para enviar 'valores' para o store
	function sendFilter() {
		dispatch(addFilterAction(filterReport));
	}

	return (
		<main>
			<Navigation />
			<div id="corpo-relatorios" className="card">
				<div id="header-relatorio" className="card-header">
					<h1 className="card-title">Filtrar</h1>
				</div>
				<div id="body-relatorio" className="card-body">
					<form>
						<div className="form-row">
							<div className="form-group col-md-2">
								<label for="data_de_talao">Data - de:</label>
								<input
									type="date"
									className="form-control"
									name="data_de_talao"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group col-md-2">
								<label for="data_ate_talao">até:</label>
								<input
									type="date"
									className="form-control"
									name="data_ate_talao"
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-5">
								<label for="endereco_talao">Rua</label>
								<input
									type="text"
									className="form-control editar"
									name="endereco_talao"
									placeholder="RUA JOSÉ LOPES SILVA"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group col-md-2">
								<label for="bairro_talao">Bairro</label>
								<input
									type="text"
									className="form-control"
									name="bairro_talao"
									placeholder="JARDIM EROISE"
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-2">
								<label for="atendente_talao">Atendente</label>
								<input
									type="text"
									className="form-control"
									name="atendente_talao"
									placeholder="CB FAVERI"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group col-md-4">
								<label for="tipo_ocor_talao">Tipo de Ocorrência</label>
								<input
									type="text"
									className="form-control"
									name="tipo_ocor_talao"
									placeholder="CARRO X MOTO"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group col-md-2">
								<label for="viatura_talao">Viatura</label>
								<input
									type="text"
									className="form-control"
									name="viatura_talao"
									placeholder="UR16215"
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-2">
								<label for="motorista_talao">Motorista</label>
								<input
									type="text"
									className="form-control"
									name="motorista_talao"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group col-md-2">
								<label for="comandante_talao">Comandante</label>
								<input
									type="text"
									className="form-control"
									name="comandante_talao"
									onChange={handleChange}
								/>
							</div>
						</div>
					</form>
					<div id="footer-relatorio" className="card-footer">
						<Link to="/resultado-relatorio">
							<button type="submit" className="btn btn-primary float-right" onClick={sendFilter()}>
								Gerar Relatório
							</button>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
