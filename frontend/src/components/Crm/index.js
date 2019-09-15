import React, { Component } from 'react';
import api from '../../services/api.js';
import add from '../_imagens/add.png';

export default class Crm extends Component {
	state = {
		crm: [],
		numerador: 0
	};

	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async () => {
		const response = await api.get('crm/');
		this.setState({ crm: response.data.results });
	};

	render() {
		return (
			<div id="corpo-crm" className="card">
				<div id="header-crm" className="card-header">
					<span className="card-title h1">CRM's</span>
					<button type="button" className="btn btn-outline-primary float-right">
						Adicionar<br />
						<img src={add} alt="" />
					</button>
					<div id="body-crm" className="card-body">
						<table className="table table-hover">
							<thead className="thead-dark">
								<tr>
									<th scope="col">#</th>
									<th scope="col">CRM</th>
									<th scope="col">Nome</th>
									<th />
								</tr>
								<tr>
									<td>1</td>
									<td>PEDRO PAULO</td>
									<td>123456</td>
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
							</thead>
							<tbody />
						</table>
					</div>
					<div id="footer-crm" className="card-footer" />
				</div>
			</div>
		);
	}
}
