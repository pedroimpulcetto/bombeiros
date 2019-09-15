import React, { Component } from 'react';
import api from '../../services/api.js';


export default class CorpoIndex extends Component {
	state = {
		talao: [],
		numerador: 0
	};

	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async () => {
		const response = await api.get('talao/');
		this.setState({ talao: response.data.results });
	};
	render() {
		const { talao } = this.state;
		return (
			<div id="principal-index" className="container">
				<div id="corpo-index" className="body container card">
					<br />
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
						<tbody>
							{talao.map((talao) => (
								<tr key={talao.id}>
									<th scope="row">{(this.state.numerador += 1)}</th>
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
										<div class="btn-group btn-group-sm" role="group">
											<button type="button" className="btn btn-outline-warning">
												Edit
											</button>
											<button
												type="button"
												className="btn btn-outline-danger"
												data-toggle="modal"
												data-target="#modal$id"
											>
												Del
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
