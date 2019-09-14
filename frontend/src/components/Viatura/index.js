import React, { Component } from 'react';
import api from '../../services/api.js';
import add from '../_imagens/add.png';
import CustomModal from '../Modal/Viatura/modal.js';
import ModalDeletar from '../Modal/Deletar/modal.js'; //-> NAO ESTAMOS USANDO POR ENQUANDO
import axios from 'axios';

export default class Viatura extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: {
				prefixo_viatura: '',
				marca_modelo_viatura: '',
				placa_viatura: ''
			},
			viatura: [],
			numerador: 0
		};
	}

	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async () => {
		const response = await api.get('viatura/');
		this.setState({ viatura: response.data.results });
	};

	refreshList = () => {
		axios.get('http://localhost:8000/api/viatura').then((res) => this.setState({ viatura: res.data.results }));
	};

	// renderizando as linhas da tabela
	// item a item
	renderItems = () => {
		const newItems = this.state.viatura;
		return newItems.map((viatura) => (
			<tr key={viatura.id}>
				<th>{(this.state.numerador += 1)}</th>
				<td>{viatura.prefixo_viatura}</td>
				<td>{viatura.marca_modelo_viatura}</td>
				<td>{viatura.placa_viatura}</td>
				<td>
					<div class="btn-group btn-group-sm" role="group" aria-label="botoes">
						<button onClick={() => this.editItem(viatura)} className="btn btn-secondary mr-2">
							Edit
						</button>
						<button onClick={() => this.handleDelete(viatura)} className="btn btn-danger">
							Del
						</button>
					</div>
				</td>
			</tr>
		));
	};

	toggle = () => {
		this.setState({ modal: !this.state.modal });
	};

	// CHAMA O MODAL PARA CONFIRMACAO DO DELETAR
	// NAO ESTAMOS USANDO AINDA
	// toggleDeletar = () => {
	// 	this.setState({ modalDeletar: !this.state.modalDeletar });
	// };

	// ADICIONAR E EDITAR
	handleSubmit = (viatura) => {
		this.toggle();
		if (viatura.id) {
			axios.put(`http://localhost:8000/api/viatura/${viatura.id}/`, viatura).then((res) => this.refreshList());
			return;
		}
		axios.post('http://localhost:8000/api/viatura/', viatura).then((res) => this.refreshList());
		return;
	};

	// DELETAR
	handleDelete = (viatura) => {
		axios.delete(`http://localhost:8000/api/viatura/${viatura.id}/`).then((res) => this.refreshList());
	};

	// CHAMA O MODAL PARA ADICIONARMOS UM ITEM
	createItem = () => {
		const viatura = { prefixo_viatura: '', marca_modelo_viatura: '', placa_viatura: '' };
		this.setState({ activeItem: viatura, modal: !this.state.modal });
	};

	// CHAMA O MODAL PARA EDITARMOS UM ITEM
	editItem = (viatura) => {
		this.setState({ activeItem: viatura, modal: !this.state.modal });
	};

	// deleteItem = (viatura) => {
	// 	this.setState({ activeItem: viatura, modalDeletar: !this.state.modalDeletar });
	// };

	render() {
		return (
			<main>
				<div id="corpo-viaturas" class="card">
					<div id="header-viaturas" class="card-header">
						<span class="card-title h1">Viaturas</span>
						<button type="button" class="btn btn-outline-primary float-right" onClick={this.createItem}>
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
							<tbody>{this.renderItems()}</tbody>
						</table>
					</div>
					<div id="footer-viaturas" class="card-footer" />
				</div>

				{/* DECLARANDO O MODAL ADICIONAR E EDITAR */}
				{this.state.modal ? (
					<CustomModal activeItem={this.state.activeItem} toggle={this.toggle} onSave={this.handleSubmit} />
				) : null}

				{/* DECLARANDO O MODAL DELETAR */}
				{/* NAO ESTAMOS USANDO POR ENQUANTO */}
				{/* {this.state.modalDeletar ? (
					<ModalDeletar toggleDeletar={this.toggleDeletar} onSave={this.deleteItem} />
				) : null} */}
			</main>
		);
	}
}
