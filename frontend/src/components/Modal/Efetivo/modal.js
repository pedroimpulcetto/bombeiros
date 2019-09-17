import React, { Component } from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Input,
	Label,
	Row,
	Col
} from 'reactstrap';

export default class ModalEfetivo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: this.props.activeItem
		};
	}

	handleChange = (e) => {
		let { name, value } = e.target;
		const activeItem = { ...this.state.activeItem, [name]: value };
		this.setState({ activeItem });
	};

	render() {
		const { toggle, onSave } = this.props;
		return (
			<Modal isOpen={true} toggle={toggle} size="xl">
				<ModalHeader toggle={toggle} className={'modal-title text-danger'}>
					Adicionar Medico
				</ModalHeader>
				<ModalBody>
					<Form>
						<Row>
							<Col md={2}>
								<FormGroup>
									<Label for="post_grad_efetivo">Posto / Graduacao</Label>
									<Input
										type="text"
										name="post_grad_efetivo"
										value={this.state.activeItem.post_grad_efetivo}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="re_efetivo">RE</Label>
									<Input
										type="number"
										name="re_efetivo"
										value={this.state.activeItem.re_efetivo}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={8}>
								<FormGroup>
									<Label for="nome_efetivo">Nome Completo</Label>
									<Input
										type="text"
										name="nome_efetivo"
										value={this.state.activeItem.nome_efetivo}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col md={2}>
								<FormGroup>
									<Label for="nome_guerra_efetivo">Nome de Guerra</Label>
									<Input
										type="text"
										name="nome_guerra_efetivo"
										value={this.state.activeItem.nome_guerra_efetivo}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="data_admissao_efetivo">Data de Admissao</Label>
									<Input
										type="date"
										name="data_admissao_efetivo"
										value={this.state.activeItem.data_admissao_efetivo}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="fone_efetivo">Telefone</Label>
									<Input
										type="number"
										name="fone_efetivo"
										value={this.state.activeItem.fone_efetivo}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="cel_efetivo">Celular</Label>
									<Input
										type="number"
										name="cel_efetivo"
										value={this.state.activeItem.cel_efetivo}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="data_nasc_efetivo">Data de Nascimento</Label>
									<Input
										type="date"
										name="data_nasc_efetivo"
										value={this.state.activeItem.data_nasc_efetivo}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col md={8}>
								<FormGroup>
									<Label for="email_efetivo">Email</Label>
									<Input
										type="email"
										name="email_efetivo"
										value={this.state.activeItem.email_efetivo}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
						</Row>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button type="reset" className="btn btn-secondary">
						Fechar
					</Button>
					<Button color="primary" onClick={() => onSave(this.state.activeItem)}>
						Save
					</Button>
				</ModalFooter>
			</Modal>
		);
	}
}
