import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

import api from '../../services/api.js';

export default function Chart01() {
	const [ talao, setTalao ] = useState({ talao: [] });

	// carregando dados da API
	useEffect(() => {
		async function loadTalao() {
			// You can await here
			const response = await api.get(`talao/`);
			setTalao({ talao: response.data.results });
		}
		loadTalao();
	}, []); // Or [] if effect doesn't need props or state

	// filtros quantitativos
	let totTalao = talao.talao.length;
	let totSalv = 0;
	let totRes = 0;
	let totInc = 0;
	let totOut = 0;

	// filtro por tipo de ocorrencia
	talao.talao.map((talao) => {
		if (talao.tipo_ocor_talao == 'SALVAMENTO') {
			totSalv += 1;
		}
		if (talao.tipo_ocor_talao == 'RESGATE') {
			totRes += 1;
		}
		if (talao.tipo_ocor_talao == 'INCÊNDIO') {
			totInc += 1;
		}
		if (talao.tipo_ocor_talao == 'OUTROS') {
			totOut += 1;
		}
	});

	// dados por tipo de ocorrencia
	const dataTipo = [
		[ 'Ocorrências', 'Quantidade', { role: 'style' } ],
		[ 'Incêndio', totInc, 'red' ],
		[ 'Resgate', totRes, 'lightblue' ],
		[ 'Salvamento', totSalv, 'orange' ],
		[ 'Outros', totOut, 'gray' ]
	];

	return (
		<Chart
			width={'500px'}
			height={'300px'}
			chartType="PieChart"
			loader={<div>Loading Chart</div>}
			data={dataTipo}
			options={{
				// Material design options
				title: 'Tipos de Ocorrências',
				subtitle: 'De todo o tempo',
				// Just add this option
				is3D: true
			}}
			// For tests
			rootProps={{ 'data-testid': '2' }}
		/>
	);
}
