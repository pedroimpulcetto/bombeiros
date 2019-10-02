import React from 'react';
import principal from '../_imagens/principal.png';
import search from '../_imagens/search.png';
import medical from '../_imagens/medical.png';
import efetivo from '../_imagens/efetivo.png';
import viatura from '../_imagens/viatura.png';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
	render() {
		return (
			<main>
				<div className="container">
					<div className="text-center">
						<br />
						<ul className="nav nav-tabs">
							<li className="nav-item">
								<Link to="/" className="nav-link active">
									<button type="button" className="btn btn-outline-dark">
										Principal
										<br />
										<img src={principal} />
									</button>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/relatorio" className="nav-link">
									<button type="button" className="btn btn-outline-secondary">
										Relatório
										<br />
										<img src={search} />
									</button>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/crm" className="nav-link">
									<button type="button" className="btn btn-outline-success">
										CRM
										<br />
										<img src={medical} alt="" />
									</button>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/efetivo" className="nav-link">
									<button type="button" className="btn btn-outline-danger">
										Efetivo
										<br />
										<img src={efetivo} alt="" />
									</button>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/viatura" className="nav-link">
									<button type="button" className="btn btn-outline-info">
										Viaturas
										<br />
										<img src={viatura} alt="" />
									</button>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</main>
		);
	}
}
