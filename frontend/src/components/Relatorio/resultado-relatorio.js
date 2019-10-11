import React, { useState, useEffect } from 'react';
import api from '../../services/api.js';
import { Link } from 'react-router-dom';
import principal from '../_imagens/principal.png';
import search from '../_imagens/return.png';

import { useSelector } from 'react-redux';

export default function ResultadoRelatorio() {
	const [ resultReport, setState ] = useState({ talao: [] });
	const filterReport = useSelector((state) => state.filter);

	// criando variaveis para receberem os valores do filterReport
	let data_de_talao = '';
	let data_ate_talao = '';
	let endereco_talao = '';
	let bairro_talao = '';
	let atendente_talao = '';
	let tipo_ocor_talao = '';
	let viatura_talao = '';
	let motorista_talao = '';
	let comandante_talao = '';

	// setando as variaveis com os valores de filterReport
	filterReport.map((filter) => [
		(data_de_talao = filter.data_de_talao),
		(data_ate_talao = filter.data_ate_talao),
		(endereco_talao = filter.endereco_talao),
		(bairro_talao = filter.bairro_talao),
		(atendente_talao = filter.atendente_talao),
		(tipo_ocor_talao = filter.tipo_ocor_talao),
		(viatura_talao = filter.viatura_talao),
		(motorista_talao = filter.motorista_talao),
		(comandante_talao = filter.comandante_talao)
	]);

	//  verificando qual filtro foi usado pelo usuario
	let url = '';
	if (data_de_talao !== '' || data_ate_talao !== '') {
		url = '&data_talao__range=' + data_de_talao + ',' + data_ate_talao;
	}
	if (endereco_talao !== '') {
		url += '&endereco_talao__icontains=' + endereco_talao;
	}
	if (bairro_talao !== '') {
		url += '&bairro_talao__icontains=' + bairro_talao;
	}
	if (atendente_talao !== '') {
		url += '&atendente_talao__icontains=' + atendente_talao;
	}
	if (tipo_ocor_talao !== '') {
		url += '&tipo_ocor_talao__icontains=' + tipo_ocor_talao;
	}
	if (viatura_talao !== '') {
		url += '&viatura_talao__icontains=' + viatura_talao;
	}
	if (motorista_talao !== '') {
		url += '&motorista_talao__icontains=' + motorista_talao;
	}
	if (comandante_talao !== '') {
		url += '&comandante_talao__icontains=' + comandante_talao;
	}

	// gerenciando os FILTROS e carregando API
	useEffect(() => {
		async function fetchData() {
			// You can await here
			const response = await api.get(`talao/?${url}`);
			setState({ talao: response.data.results });
		}
		fetchData();
	}, []); // Or [] if effect doesn't need props or state

	// filtros quantitativos
	let totTalao = resultReport.talao.length;
	let totSalv = 0;
	let totRes = 0;
	let totInc = 0;
	let totOut = 0;

	resultReport.talao.map((talao) => {
		if (talao.tipo_ocor_talao == 'SALVAMENTO') {
			totSalv += 1;
		}
		if (talao.tipo_ocor_talao == 'RESGATE') {
			totRes += 1;
		}
		if (talao.tipo_ocor_talao == 'INCÊNDIO') {
			totInc += 1;
		}
		if (talao.tipo_ocor_talao == 'OUTROS') {
			totOut += 1;
		}
	});

	// renderizando os resultados linha a linha
	function renderResult() {
		const newItems = resultReport.talao;
		return newItems.map((talao) => (
			<tr key={talao.id}>
				<th scope="row">{talao.id}</th>
				<td>{talao.data_talao}</td>
				<td>{talao.num_talao}</td>
				<td>
					{talao.endereco_talao}, {talao.num_end_talao} - {talao.bairro_talao}
				</td>
				<td>{talao.tipo_ocor_talao}</td>
				<td>{talao.viatura_talao}</td>
				<td>{talao.os_talao}</td>
				<td>{talao.ol_talao}</td>
				<td>{talao.opb_talao}</td>
				<td>
					<div className="btn-group btn-group-sm" role="group" aria-label="botoes">
						{/* botao editar dentro da linha */}
						<button onClick={() => this.editItem(talao)} className="btn btn-outline-warning mr-2">
							Edit
						</button>

						{/* botao deletar dentro da linha */}
						<button onClick={() => this.deleteItem(talao)} className="btn btn-outline-danger">
							Del
						</button>
					</div>
				</td>
			</tr>
		));
	}

	function renderHeader() {
		return filterReport.map((filter) => (
			<div className="container" key={filter.data_de_talao}>
				<h5>Filtrado por:</h5>
				Data - de: <strong>{filter.data_de_talao} </strong>
				até: <strong>{filter.data_ate_talao}</strong>
				<br />
				Rua: <strong>{filter.endereco_talao}</strong>
				<br />
				Bairro: <strong>{filter.bairro_talao}</strong>
				<br />
				Atendente: <strong>{filter.atendente_talao}</strong>
				<br />
				Tipo de Ocorrência: <strong>{filter.tipo_ocor_talao}</strong>
				<br />
				Viatura: <strong>{filter.viatura_talao}</strong>
				<br />
			</div>
		));
	}

	return (
		<main>
			<div id="corpo-relatorio" className="card">
				<div id="header-relatorio" className="card-header">
					{renderHeader()}
				</div>
				<div style={{ display: 'inline' }}>
					<ul className="nav nav-tabs">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								<button type="button" className="btn btn-outline-danger">
									Principal
									<br />
									<img src={principal} />
								</button>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/relatorio" className="nav-link">
								<button type="button" className="btn btn-outline-info">
									Voltar
									<br />
									<img src={search} />
								</button>
							</Link>
						</li>
						<li>
							<ul>
								<li>
									<h5>Total de ocorrencias filtradas: {totTalao}</h5>
								</li>
								<li>
									<h6>INCENDIOS: {totInc}</h6>
								</li>
								<li>
									<h6>RESGATES: {totRes}</h6>
								</li>
							</ul>
						</li>
						<li>
							<ul>
								<li>
									<h6>SALVAMENTOS: {totSalv}</h6>
								</li>
								<li>
									<h6>OUTROS: {totOut}</h6>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<table className="table table-hover">
					<thead className="thead-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Data</th>
							<th scope="col">Talão</th>
							<th scope="col">Endereço</th>
							<th scope="col">Tipo de Ocor.</th>
							<th scope="col">Viatura</th>
							<th scope="col">Odo. Saída</th>
							<th scope="col">Odo. Local</th>
							<th scope="col">Odo. Final</th>
							<th />
							<th />
						</tr>
					</thead>
					<tbody>{renderResult()}</tbody>
				</table>
			</div>
		</main>
	);
}
