import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';

export default class CustomModal extends Component {
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
			<Modal isOpen={true} toggle={toggle}>
				<ModalHeader toggle={toggle} className={'modal-title text-danger'}>
					Adicionar Viatura
				</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup>
							<Label for="prefixo_viatura">Prefixo</Label>
							<Input
								type="text"
								name="prefixo_viatura"
								value={this.state.activeItem.prefixo_viatura}
								onChange={this.handleChange}
								placeholder=""
							/>
						</FormGroup>
						<FormGroup>
							<Label for="marca_modelo_viatura">Marca/Modelo</Label>
							<Input
								type="text"
								name="marca_modelo_viatura"
								value={this.state.activeItem.marca_modelo_viatura}
								onChange={this.handleChange}
								placeholder=""
							/>
						</FormGroup>
						<FormGroup>
							<Label for="placa_viatura">Placa</Label>
							<Input
								type="text"
								name="placa_viatura"
								value={this.state.activeItem.placa_viatura}
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
