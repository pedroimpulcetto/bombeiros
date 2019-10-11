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

export default class ModalCrm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: this.props.activeItem,
			valid: 'valid'
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
			<Modal isOpen={true} toggle={toggle}>
				<ModalHeader toggle={toggle} className={'modal-title text-danger'}>
					Adicionar Medico
				</ModalHeader>
				<ModalBody>
					<Form>
						<Row>
							<Col md={4}>
								<FormGroup>
									<Label for="prefixo_viatura">Crm</Label>
									<Input
										type="number"
										name="crm_crm"
										value={this.state.activeItem.crm_crm}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
						</Row>
						<FormGroup>
							<Label for="marca_modelo_viatura">Nome do Medico</Label>
							<Input
								type="text"
								name="nome_medico_crm"
								value={this.state.activeItem.nome_medico_crm}
								onChange={this.handleChange}
								placeholder=""
							/>
						</FormGroup>
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
