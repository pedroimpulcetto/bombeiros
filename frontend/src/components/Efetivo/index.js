import React, { Component } from 'react';
import api from '../../services/api.js';
import add from '../_imagens/add.png';
import ModalDeletar from '../Modal/Deletar/modal.js';
import ModalEfetivo from '../Modal/Efetivo/modal.js';
import axios from 'axios';
import Navigation from '../Menu';
import { UncontrolledAlert, Table } from 'reactstrap';

export default class Efetivo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: {
				re_efetivo: '',
				post_grad_efetivo: '',
				nome_efetivo: '',
				nome_guerra_efetivo: '',
				data_admissao_efetivo: '',
				fone_efetivo: '',
				cel_efetivo: '',
				data_nasc_efetivo: '',
				email_efetivo: ''
			},
			efetivo: [],
			numerador: 0,
			alertOk: false,
			textAlert: ''
		};
	}

	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async () => {
		const response = await api.get('efetivo/');
		this.setState({ efetivo: response.data.results });
	};

	// funcao para dar refresh a cada nova interacao com a API
	refreshList = () => {
		axios.get('http://localhost:8000/api/efetivo').then((res) => this.setState({ efetivo: res.data.results }));
	};

	// renderizando as linhas da tabela
	// item a item
	renderItems = () => {
		const newItems = this.state.efetivo;
		return newItems.map((efetivo) => (
			<tr key={efetivo.id}>
				<td>{efetivo.id}</td>
				<td>{efetivo.re_efetivo}</td>
				<td>{efetivo.post_grad_efetivo}</td>
				<td>{efetivo.nome_efetivo}</td>
				<td>{efetivo.data_admissao_efetivo}</td>
				<td>{efetivo.fone_efetivo}</td>
				<td>{efetivo.cel_efetivo}</td>
				<td>{efetivo.data_nasc_efetivo}</td>
				<td>{efetivo.email_efetivo}</td>
				<td>
					<div className="btn-group btn-group-sm" role="group" aria-label="botoes">
						{/* botao editar dentro da linha */}
						<button onClick={() => this.editItem(efetivo)} className="btn btn-outline-warning mr-2">
							Edit
						</button>

						{/* botao deletar dentro da linha */}
						<button onClick={() => this.deleteItem(efetivo)} className="btn btn-outline-danger">
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
	handleDelete = (efetivo) => {
		this.toggleDeletar();
		axios
			.delete(`http://localhost:8000/api/efetivo/${efetivo.id}/`)
			.then((res) => this.refreshList())
			.then((alert) => this.onShowAlert('Apagado'));
	};

	// funcao ADICIONAR e EDITAR
	handleSubmit = (efetivo) => {
		this.toggle();
		// SE for editar, passa como parametro o id que queremos editar + as informacoes ja preenchidas
		if (efetivo.id) {
			axios
				.put(`http://localhost:8000/api/efetivo/${efetivo.id}/`, efetivo)
				.then((res) => this.refreshList())
				.then((alert) => this.onShowAlert('Alterado'));
			return;
		}
		// SE NAO, adicionamos um item novo
		axios
			.post('http://localhost:8000/api/efetivo/', efetivo)
			.then((res) => this.refreshList())
			.then((alert) => this.onShowAlert('Adicionado'));
		return;
	};

	// CHAMA O MODAL PARA ADICIONARMOS UM ITEM
	// esta no botao adicionar
	createItem = () => {
		const efetivo = {
			re_efetivo: '',
			post_grad_efetivo: '',
			nome_efetivo: '',
			nome_guerra_efetivo: '',
			data_admissao_efetivo: '',
			fone_efetivo: '',
			cel_efetivo: '',
			data_nasc_efetivo: '',
			email_efetivo: ''
		};
		this.setState({ activeItem: efetivo, modal: !this.state.modal });
	};

	// CHAMA O MODAL PARA EDITARMOS UM ITEM
	// esta no botao editar
	editItem = (efetivo) => {
		this.setState({ activeItem: efetivo, modal: !this.state.modal });
	};

	// CHAMA O MODAL DE CONFIRMACAO PARA EXCLUSAO
	// esta no botao deletar
	deleteItem = (efetivo) => {
		this.setState({ activeItem: efetivo, modalDeletar: !this.state.modalDeletar });
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
				<div id="corpo-efetivo" className="card">
					<div id="header-efetivo" className="card-header">
						<span className="card-title h1">Efetivo</span>
						<button type="button" className="btn btn-outline-primary float-right" onClick={this.createItem}>
							Adicionar<br />
							<img src={add} alt="" />
						</button>
					</div>
					<div id="body-efetivo" className="card-body">
						<UncontrolledAlert isOpen={this.state.alertOk}>
							Militar {this.state.textAlert} com sucesso!
						</UncontrolledAlert>
						<Table size="sm" className="table table-hover">
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
							<tbody>{this.renderItems()}</tbody>
						</Table>
					</div>
					<div id="footer-efetivo" className="card-footer" />
				</div>
				{/* DECLARANDO O MODAL ADICIONAR E EDITAR */}
				{this.state.modal ? (
					<ModalEfetivo activeItem={this.state.activeItem} toggle={this.toggle} onSave={this.handleSubmit} />
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
