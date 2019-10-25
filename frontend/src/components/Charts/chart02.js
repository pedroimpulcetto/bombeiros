import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

import api from '../../services/api.js';

export default function Chart02() {
	// dados por viatura
	const dataVtr = [
		[ 'Bairros', 'Qntd Ocorrências', { role: 'style' } ],
		[ 'Nova Era', 8.94, '#b87333' ],
		[ 'Jardim Lemense', 10.49, 'silver' ],
		[ 'Centro', 19.3, 'gold' ],
		[ 'Jardim São João', 13, 'color: #01DFD7' ],
		[ 'Santa Rita', 11, 'color: #173B0B' ],
		[ 'Serelepe', 33, 'color: #868A08' ]
	];

	return (
		<Chart
			width={'300px'}
			height={'200px'}
			chartType="BarChart"
			loader={<div>Loading Chart</div>}
			data={dataVtr}
			options={{
				title: 'Quantidade de Atendimentos por Bairro',
				width: 500,
				height: 300,
				bar: { groupWidth: '95%' },
				legend: { position: 'none' }
			}}
			// For tests
			rootProps={{ 'data-testid': '6' }}
		/>
	);
}
