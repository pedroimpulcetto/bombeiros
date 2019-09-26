import React from 'react';
import '../../style.css';
import policia from '../_imagens/policia.png';

const Header = () => (
	<div id="cabecalho" className="text-center">
		<div className="container">
			<img id="logo" className="header-inline" src={policia} alt="" />
			<h1 className="text-danger header-inline">Cadastro de Ocorrências</h1>
		</div>
	</div>
);

export default Header;
