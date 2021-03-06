import React, { Component } from 'react';
import api from '../../services/api.js';
import add from '../_imagens/add.png';
import ModalDeletar from '../Modal/Deletar/modal.js';
import ModalCrm from '../Modal/Crm/modal.js';
import axios from 'axios';
import Navigation from '../Menu';
import { UncontrolledAlert } from 'reactstrap';

export default class Crm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: {
				crm_crm: '',
				nome_medico_crm: ''
			},
			crm: [],
			numerador: 0,
			alertOk: false,
			textAlert: ''
		};
	}

	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async () => {
		const response = await api.get('crm/');
		this.setState({ crm: response.data.results });
	};

	// funcao para dar refresh a cada nova interacao com a API
	refreshList = () => {
		api.get('crm/').then((res) => this.setState({ crm: res.data.results }));
	};

	// renderizando as linhas da tabela
	// item a item
	renderItems = () => {
		const newItems = this.state.crm;
		return newItems.map((crm) => (
			<tr key={crm.id}>
				<td>{crm.id}</td>
				<td>{crm.crm_crm}</td>
				<td>{crm.nome_medico_crm}</td>
				<td>
					<div class="btn-group btn-group-sm" role="group" aria-label="botoes">
						{/* botao editar dentro da linha */}
						<button onClick={() => this.editItem(crm)} className="btn btn-outline-warning mr-2">
							Edit
						</button>

						{/* botao deletar dentro da linha */}
						<button onClick={() => this.deleteItem(crm)} className="btn btn-outline-danger">
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
	handleDelete = (crm) => {
		this.toggleDeletar();
		api.delete(`crm/${crm.id}/`).then((res) => this.refreshList()).then((alert) => this.onShowAlert('Apagado'));
	};

	// funcao ADICIONAR e EDITAR
	handleSubmit = (crm) => {
		this.toggle();
		// SE for editar, passa como parametro o id que queremos editar + as informacoes ja preenchidas
		if (crm.id) {
			api
				.put(`crm/${crm.id}/`, crm)
				.then((res) => this.refreshList())
				.then((alert) => this.onShowAlert('Alterado'));
			return;
		}
		// SE NAO, adicionamos um item novo
		api.post('crm/', crm).then((res) => this.refreshList()).then((alert) => this.onShowAlert('Adicionado'));
		return;
	};

	// CHAMA O MODAL PARA ADICIONARMOS UM ITEM
	// esta no botao adicionar
	createItem = () => {
		const crm = { crm_crm: '', nome_medico_crm: '' };
		this.setState({ activeItem: crm, modal: !this.state.modal });
	};

	// CHAMA O MODAL PARA EDITARMOS UM ITEM
	// esta no botao editar
	editItem = (crm) => {
		this.setState({ activeItem: crm, modal: !this.state.modal });
	};

	// CHAMA O MODAL DE CONFIRMACAO PARA EXCLUSAO
	// esta no botao deletar
	deleteItem = (crm) => {
		this.setState({ activeItem: crm, modalDeletar: !this.state.modalDeletar });
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
				<div id="corpo-crm" className="card">
					<div id="header-crm" className="card-header">
						<span className="card-title h1">CRM's</span>
						<button type="button" className="btn btn-outline-primary float-right" onClick={this.createItem}>
							Adicionar<br />
							<img src={add} alt="" />
						</button>
					</div>
					<div id="body-crm" className="card-body">
						<UncontrolledAlert isOpen={this.state.alertOk}>
							CRM {this.state.textAlert} com sucesso!
						</UncontrolledAlert>
						<table className="table table-hover" style={{ width: '60%', alignItems: 'center' }}>
							<thead className="thead-dark">
								<tr>
									<th scope="col">#</th>
									<th scope="col">CRM</th>
									<th scope="col">Nome</th>
									<th />
								</tr>
							</thead>
							{/* renderizando as linhas na tela */}
							<tbody>{this.renderItems()}</tbody>
						</table>
					</div>
					<div id="footer-crm" className="card-footer" />
				</div>
				{/* DECLARANDO O MODAL ADICIONAR E EDITAR */}
				{this.state.modal ? (
					<ModalCrm activeItem={this.state.activeItem} toggle={this.toggle} onSave={this.handleSubmit} />
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
