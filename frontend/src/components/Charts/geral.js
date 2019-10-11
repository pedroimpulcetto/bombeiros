import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';
import api from '../../services/api.js';
import Navigation from '../Menu/index.js';

export default function GeralChart() {
	const [ talao, setTalao ] = useState({ talao: [] });
	const [ vtr, setVtr ] = useState({ vtr: [] });

	console.log();

	// carregando dados da API
	useEffect(() => {
		async function loadTalao() {
			// You can await here
			const response = await api.get(`talao/`);
			setTalao({ talao: response.data.results });

			const vtr = await api.get('viatura/');
			setVtr({ vtr: vtr.data.results });
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

	// dados por viatura
	const dataVtr = [
		[ 'Viaturas', 'Density', { role: 'style' } ],
		[ 'Copper', 8.94, '#b87333' ],
		[ 'Silver', 10.49, 'silver' ],
		[ 'Gold', 19.3, 'gold' ],
		[ 'Platinum', 21.45, 'color: #e5e4e2' ]
	];

	return (
		<main>
			<Navigation />
			<div style={{ display: 'flex', flexDirection: 'row' }}>
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
				<Chart
					width={'300px'}
					height={'200px'}
					chartType="BarChart"
					loader={<div>Loading Chart</div>}
					data={dataVtr}
					options={{
						title: 'Quantidade de Atendimentos por Viaturas',
						width: 500,
						height: 300,
						bar: { groupWidth: '95%' },
						legend: { position: 'none' }
					}}
					// For tests
					rootProps={{ 'data-testid': '6' }}
				/>
			</div>
			<div>
				<Chart
					width={'100%'}
					height={'500px'}
					chartType="Bar"
					loader={<div>Loading Chart</div>}
					data={[
						[ 'Meses', 'Total', 'Resgate', 'Incendio', 'Salvamento' ],
						[ 'Jan', 1000, 400, 200 ],
						[ 'Fev', 1170, 460, 250 ],
						[ 'Mar', 660, 1120, 300 ],
						[ 'Abr', 1030, 540, 350 ],
						[ 'Mai', 660, 1120, 300 ],
						[ 'Jun', 660, 1120, 300 ],
						[ 'Jul', 660, 1120, 300 ],
						[ 'Ago', 660, 1120, 300 ],
						[ 'Set', 660, 1120, 300 ],
						[ 'Out', 660, 1120, 300 ],
						[ 'Nov', 660, 1120, 300 ],
						[ 'Dez', 660, 1120, 300 ]
					]}
					options={{
						// Material design options
						chart: {
							title: 'Company Performance',
							subtitle: 'Sales, Expenses, and Profit: 2014-2017'
						}
					}}
					// For tests
					rootProps={{ 'data-testid': '2' }}
				/>
			</div>
		</main>
	);
}
