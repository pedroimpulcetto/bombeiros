import React, { Component } from 'react';
import api from '../../services/api.js';
import add from '../_imagens/add.png';
import CustomModal from '../Modal/Viatura/modal.js';
import ModalDeletar from '../Modal/Deletar/modal.js';
import axios from 'axios';
import Navigation from '../Menu';
import { UncontrolledAlert } from 'reactstrap';

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
			numerador: 0,
			alertOk: false,
			textAlert: ''
		};
	}

	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async () => {
		const response = await api.get('viatura/');
		this.setState({ viatura: response.data.results });
	};

	// funcao para dar refresh a cada nova interacao com a API
	refreshList = () => {
		api.get('viatura/').then((res) => this.setState({ viatura: res.data.results }));
	};

	// renderizando as linhas da tabela
	// item a item
	renderItems = () => {
		const newItems = this.state.viatura;
		return newItems.map((viatura) => (
			<tr key={viatura.id}>
				<th>{viatura.id}</th>
				<td>{viatura.prefixo_viatura}</td>
				<td>{viatura.marca_modelo_viatura}</td>
				<td>{viatura.placa_viatura}</td>
				<td>
					<div className="btn-group btn-group-sm" role="group" aria-label="botoes">
						{/* botao editar dentro da linha */}
						<button onClick={() => this.editItem(viatura)} className="btn btn-outline-warning mr-2">
							Edit
						</button>

						{/* botao deletar dentro da linha */}
						<button onClick={() => this.deleteItem(viatura)} className="btn btn-outline-danger">
							Del
						</button>
					</div>
				</td>
			</tr>
		));
	};

	// acao para acionar o Modal
	toggle = () => {
		this.setState({ modal: !this.state.modal });
	};

	// acao para acionar o Modal de confirmacao para deletar
	toggleDeletar = () => {
		this.setState({ modalDeletar: !this.state.modalDeletar });
	};

	// funcao DELETAR
	// passa como parametro o id que queremos deletar
	handleDelete = (viatura) => {
		this.toggleDeletar();
		api
			.delete(`viatura/${viatura.id}/`)
			.then((res) => this.refreshList())
			.then((alert) => this.onShowAlert('Apagada'));
	};

	// funcao ADICIONAR e EDITAR
	handleSubmit = (viatura) => {
		this.toggle();
		// SE for editar, passa como parametro o id que queremos editar + as informacoes ja preenchidas
		if (viatura.id) {
			api
				.put(`viatura/${viatura.id}/`, viatura)
				.then((res) => this.refreshList())
				.then((alert) => this.onShowAlert('Alterada'));
			return;
		}
		// SE NAO, adicionamos um item novo
		api.post('viatura/', viatura).then((res) => this.refreshList()).then((alert) => this.onShowAlert('Adicionada'));
		return;
	};

	// CHAMA O MODAL PARA ADICIONARMOS UM ITEM
	// esta no botao adicionar
	createItem = () => {
		const viatura = { prefixo_viatura: '', marca_modelo_viatura: '', placa_viatura: '' };
		this.setState({ activeItem: viatura, modal: !this.state.modal });
	};

	// CHAMA O MODAL PARA EDITARMOS UM ITEM
	// esta no botao editar
	editItem = (viatura) => {
		this.setState({ activeItem: viatura, modal: !this.state.modal });
	};

	// CHAMA O MODAL DE CONFIRMACAO PARA EXCLUSAO
	// esta no botao deletar
	deleteItem = (viatura) => {
		this.setState({ activeItem: viatura, modalDeletar: !this.state.modalDeletar });
	};

	onShowAlert = (text) => {
		this.setState({ alertOk: true, textAlert: text }, () => {
			window.setTimeout(() => {
				this.setState({ alertOk: false });
			}, 3000);
		});
	};

	render() {
		return (
			<main>
				<Navigation />
				<div id="corpo-viaturas" className="card">
					<div id="header-viaturas" className="card-header">
						<span className="card-title h1">Viaturas</span>
						<button type="button" className="btn btn-outline-primary float-right" onClick={this.createItem}>
							Adicionar<br />
							<img src={add} alt="" />
						</button>
					</div>
					<div id="body-viaturas" className="card-body">
						<UncontrolledAlert isOpen={this.state.alertOk}>
							Viatura {this.state.textAlert} com sucesso!
						</UncontrolledAlert>
						<table className="table table-hover">
							<thead className="thead-dark">
								<tr>
									<th scope="col">#</th>
									<th scope="col">Prefixo</th>
									<th scope="col">Marca/Modelo</th>
									<th scope="col">Placa</th>
									<th />
								</tr>
							</thead>
							{/* renderizando as linhas na tela */}
							<tbody>{this.renderItems()}</tbody>
						</table>
					</div>
					<div id="footer-viaturas" className="card-footer" />
				</div>

				{/* DECLARANDO O MODAL ADICIONAR E EDITAR */}
				{this.state.modal ? (
					<CustomModal activeItem={this.state.activeItem} toggle={this.toggle} onSave={this.handleSubmit} />
				) : null}

				{/* DECLARANDO O MODAL DELETAR */}
				{this.state.modalDeletar ? (
					<ModalDeletar
						activeItem={this.state.activeItem}
						toggleDeletar={this.toggleDeletar}
						onSave={this.handleDelete}
					/>
				) : null}
			</main>
		);
	}
}
