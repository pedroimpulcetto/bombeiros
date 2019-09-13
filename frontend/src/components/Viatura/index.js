import React, { Component } from 'react';
import api from '../../services/api.js';
import Navigation from '../Menu/index.js';
import add from '../_imagens/add.png';

export default class Viatura extends Component {
	state = {
		viatura: [],
		numerador: 0
	};

	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async () => {
		const response = await api.get('viatura/');
		this.setState({ viatura: response.data.results });
	};

	render() {
		return (
			<div id="corpo-viaturas" class="card">
				<div id="header-viaturas" class="card-header">
					<span class="card-title h1">Viaturas</span>
					<button type="button" class="btn btn-outline-primary float-right">
						Adicionar<br />
						<img src={add} alt="" />
					</button>
				</div>
				<div id="body-viaturas" class="card-body">
					<table class="table table-hover">
						<thead class="thead-dark">
							<tr>
								<th scope="col">#</th>
								<th scope="col">Prefixo</th>
								<th scope="col">Marca/Modelo</th>
								<th scope="col">Placa</th>
								<th />
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>UR16213</td>
								<td>RENAULT/SPRINTER</td>
								<td>ETD-7686</td>
								<td>
									<div class="btn-group btn-group-sm" role="group" aria-label="botoes">
										<button type="button" class="btn btn-outline-warning">
											Edit
										</button>
										<button type="button" class="btn btn-outline-danger">
											Del
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div id="footer-viaturas" class="card-footer" />
			</div>
		);
	}
}
