import React, { Component } from 'react';
import api from '../../services/api.js';
import add from '../_imagens/add.png';

export default class Efetivo extends Component {
	state = {
		efetivo: [],
		numerador: 0
	};

	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async () => {
		const response = await api.get('efetivo/');
		this.setState({ efetivo: response.data.results });
	};

	render() {
		return (
			<main>
				<div id="corpo-efetivo" className="card">
					<div id="header-efetivo" className="card-header">
						<span className="card-title h1">Efetivo</span>
						<button type="button" className="btn btn-outline-primary float-right">
							Adicionar<br />
							<img src={add} alt="" />
						</button>
					</div>
					<div id="body-efetivo" className="card-body">
						<table className="table table-hover">
							<thead className="thead-dark">
								<tr>
									<th scope="col">#</th>
									<th scope="col">Post/Grad</th>
									<th scope="col">RE</th>
									<th scope="col">Nome Completo</th>
									<th scope="col">Data Admissão</th>
									<th scope="col">Telefone</th>
									<th scope="col">Celular</th>
									<th scope="col">Data de Nascimento</th>
									<th scope="col">E-mail</th>
									<th scope="col" />
								</tr>
							</thead>
							<tbody>
								<td>1</td>
								<td>Cb PM</td>
								<td>138637</td>
								<td>Pedro IMpulcetto</td>
								<td>22/02/1991</td>
								<td>1231312</td>
								<td>123123</td>
								<td>22/02/1001</td>
								<td>pedro@gmail.com</td>
								<td>
									<div className="btn-group btn-group-sm" role="group" aria-label="botoes">
										<button type="button" className="btn btn-outline-warning">
											Edit
										</button>
										<button type="button" className="btn btn-outline-danger">
											Del
										</button>
									</div>
								</td>
							</tbody>
						</table>
					</div>
					<div id="footer-efetivo" className="card-footer" />
				</div>
			</main>
		);
	}
}
