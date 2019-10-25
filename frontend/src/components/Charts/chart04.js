import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

import api from '../../services/api.js';

export default function Chart04() {
	return (
		<div style={{ marginLeft: '90px' }}>
			<Chart
				width={'100%'}
				height={'500px'}
				chartType="Bar"
				loader={<div>Loading Chart</div>}
				data={[
					[ 'Meses', 'Total', 'Resgate', 'Incendio', 'Salvamento' ],
					[ 'Jan', 1000, 400, 200, 123 ],
					[ 'Fev', 1170, 460, 250, 43 ],
					[ 'Mar', 660, 1120, 300, 212 ],
					[ 'Abr', 1030, 540, 350, 43 ],
					[ 'Mai', 660, 1120, 300, 123 ],
					[ 'Jun', 660, 1120, 300, 54 ],
					[ 'Jul', 660, 1120, 300, 87 ],
					[ 'Ago', 660, 1120, 300, 56 ],
					[ 'Set', 660, 1120, 300, 123 ],
					[ 'Out', 660, 1120, 300, 65 ],
					[ 'Nov', 660, 1120, 300, 99 ],
					[ 'Dez', 660, 1120, 300, 456 ]
				]}
				options={{
					// Material design options
					chart: {
						title: 'Ocorrências Mês a Mês',
						subtitle: 'separadas por tipos'
					}
				}}
				// For tests
				rootProps={{ 'data-testid': '2' }}
			/>
		</div>
	);
}
