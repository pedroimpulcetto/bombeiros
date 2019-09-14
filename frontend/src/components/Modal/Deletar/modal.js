import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';

export default class ModalDeletar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viatura: []
		};
	}

	render() {
		const { toggleDeletar, onSave } = this.props;
		return (
			<Modal isOpen={true} toggle={toggleDeletar}>
				<ModalHeader toggle={toggleDeletar} className={'modal-title text-white bg-danger'}>
					Alert!
				</ModalHeader>
				<ModalBody>
					<Form>
						<Label for="">Você realmente deseja excluir esse registro?</Label>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={() => onSave(this.handleDelete())}>
						Excluir
					</Button>
					<Button type="reset" className="btn btn-secondary">
						Fechar
					</Button>
				</ModalFooter>
			</Modal>
		);
	}
}
