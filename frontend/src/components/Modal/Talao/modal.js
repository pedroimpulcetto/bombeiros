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
import api from '../../../services/api.js';

export default class ModalTalao extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: this.props.activeItem,
			viatura: [],
			efetivo: []
		};
	}

	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async () => {
		const response = await api.get('viatura/');
		this.setState({ viatura: response.data.results });

		const efetivo = await api.get('efetivo/');
		this.setState({ efetivo: efetivo.data.results });
	};

	renderViaturas = () => {
		const vtr = this.state.viatura;
		return vtr.map((viatura) => <option>{viatura.prefixo_viatura}</option>);
	};

	renderEfetivo = () => {
		const efetivo = this.state.efetivo;
		return efetivo.map((efetivo) => (
			<option>
				{efetivo.post_grad_efetivo} {efetivo.nome_guerra_efetivo}
			</option>
		));
	};

	handleChange = (e) => {
		let { name, value } = e.target;
		const activeItem = { ...this.state.activeItem, [name]: value };
		this.setState({ activeItem });
	};

	render() {
		console.log(this.state.viatura);
		const { toggle, onSave } = this.props;
		return (
			<Modal isOpen={true} toggle={toggle} size="xl">
				<ModalHeader toggle={toggle} className={'modal-title text-danger'}>
					Adicionar Talao
				</ModalHeader>
				<ModalBody>
					<Form>
						<Row form>
							<Col md={2}>
								<FormGroup>
									<Label for="num_talao">Numero Talao</Label>
									<Input
										type="number"
										name="num_talao"
										value={this.state.activeItem.num_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="data_talao">Data</Label>
									<Input
										type="date"
										name="data_talao"
										value={this.state.activeItem.data_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="hora_chamada_talao">Hora Chamada</Label>
									<Input
										type="time"
										name="hora_chamada_talao"
										value={this.state.activeItem.hora_chamada_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={4}>
								<FormGroup>
									<Label for="solicitante_talao">Solicitante</Label>
									<Input
										type="text"
										name="solicitante_talao"
										value={this.state.activeItem.solicitante_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="tel_talao">Telefone</Label>
									<Input
										type="number"
										name="tel_talao"
										value={this.state.activeItem.tel_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row form>
							<Col md={6}>
								<FormGroup>
									<Label for="endereco_talao">Endereco</Label>
									<Input
										type="text"
										name="endereco_talao"
										value={this.state.activeItem.endereco_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="num_end_talao">Num</Label>
									<Input
										type="number"
										name="num_end_talao"
										value={this.state.activeItem.num_end_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={4}>
								<FormGroup>
									<Label for="bairro_talao">Bairro</Label>
									<Input
										type="text"
										name="bairro_talao"
										value={this.state.activeItem.bairro_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row form>
							<Col md={4}>
								<FormGroup>
									<Label for="atendente_talao">Atendente</Label>
									<Input
										type="select"
										name="atendente_talao"
										value={this.state.activeItem.atendente_talao}
										onChange={this.handleChange}
										placeholder=""
									>
										<option value="" selected disabled hidden>
											Selecione..
										</option>
										{this.renderEfetivo()}
									</Input>
								</FormGroup>
							</Col>
							<Col md={4}>
								<FormGroup>
									<Label for="tipo_ocor_talao">Tipo Ocorrencia</Label>
									<Input
										type="select"
										name="tipo_ocor_talao"
										value={this.state.activeItem.tipo_ocor_talao}
										onChange={this.handleChange}
										placeholder=""
									>
										<option value="" selected disabled hidden>
											Selecione..
										</option>
										<option>RESGATE</option>
										<option>INCÊNDIO</option>
										<option>SALVAMENTO</option>
										<option>OUTROS</option>
									</Input>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="cod_talao">Cod Talao</Label>
									<Input
										type="text"
										name="cod_talao"
										value={this.state.activeItem.cod_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="viatura_talao">Viatura</Label>
									<Input
										type="select"
										name="viatura_talao"
										value={this.state.activeItem.viatura_talao}
										onChange={this.handleChange}
										placeholder=""
									>
										<option value="" selected disabled hidden>
											Selecione..
										</option>
										{this.renderViaturas()}
									</Input>
								</FormGroup>
							</Col>
						</Row>
						<Row form>
							<Col md={2}>
								<FormGroup>
									<Label for="hs_talao">Hora Saida</Label>
									<Input
										type="time"
										name="hs_talao"
										value={this.state.activeItem.hs_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="os_talao">Odo Saida</Label>
									<Input
										type="number"
										name="os_talao"
										value={this.state.activeItem.os_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="hl_talao">Hora Local</Label>
									<Input
										type="time"
										name="hl_talao"
										value={this.state.activeItem.hl_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="ol_talao">Odo Local</Label>
									<Input
										type="number"
										name="ol_talao"
										value={this.state.activeItem.ol_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="sl_talao">Hora Saida Local</Label>
									<Input
										type="time"
										name="sl_talao"
										value={this.state.activeItem.sl_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="ps_talao">Chegada PS</Label>
									<Input
										type="time"
										name="ps_talao"
										value={this.state.activeItem.ps_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="sps_talao">Saida PS</Label>
									<Input
										type="time"
										name="sps_talao"
										value={this.state.activeItem.sps_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row form>
							<Col md={2}>
								<FormGroup>
									<Label for="hpb_talao">Hora PB</Label>
									<Input
										type="time"
										name="hpb_talao"
										value={this.state.activeItem.hpb_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="opb_talao">Odo PB</Label>
									<Input
										type="number"
										name="opb_talao"
										value={this.state.activeItem.opb_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={2}>
								<FormGroup>
									<Label for="num_vit_talao">Num Vitima</Label>
									<Input
										type="number"
										name="num_vit_talao"
										value={this.state.activeItem.num_vit_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for="qru_talao">QRU Talao</Label>
									<Input
										type="text"
										name="qru_talao"
										value={this.state.activeItem.qru_talao}
										onChange={this.handleChange}
										placeholder=""
									/>
								</FormGroup>
							</Col>
							<Col md={4}>
								<FormGroup>
									<Label for="motorista_talao">Motorista</Label>
									<Input
										type="select"
										name="motorista_talao"
										value={this.state.activeItem.motorista_talao}
										onChange={this.handleChange}
										placeholder=""
									>
										<option value="" selected disabled hidden>
											Selecione..
										</option>
										{this.renderEfetivo()}
									</Input>
								</FormGroup>
							</Col>
							<Col md={4}>
								<FormGroup>
									<Label for="comandante_talao">Comandante</Label>
									<Input
										type="select"
										name="comandante_talao"
										value={this.state.activeItem.comandante_talao}
										onChange={this.handleChange}
										placeholder=""
									>
										<option value="" selected disabled hidden>
											Selecione..
										</option>
										{this.renderEfetivo()}
									</Input>
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
