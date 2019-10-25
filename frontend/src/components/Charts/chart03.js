import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

import api from '../../services/api.js';

export default function Chart02() {
	return (
		<Chart
			width={'500px'}
			height={'300px'}
			chartType="Bar"
			loader={<div>Loading Chart</div>}
			data={[
				[ 'Viaturas', 'Ocorrencias' ],
				[ 'UR16213', 1000 ],
				[ 'AB16200', 1170 ],
				[ 'AT16211', 660 ],
				[ 'UR16215', 1030 ]
			]}
			options={{
				// Material design options
				chart: {
					title: 'Quantidade de Ocorrencias'
				}
			}}
			// For tests
			rootProps={{ 'data-testid': '2' }}
		/>
	);
}
