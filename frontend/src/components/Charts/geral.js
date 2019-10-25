import React from 'react';
import Navigation from '../Menu/index.js';

import Chart01 from './chart01.js';
import Chart02 from './chart02.js';
import Chart03 from './chart03.js';
import Chart04 from './chart04.js';

export default function GeralChart() {
	return (
		<main>
			<Navigation />
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<div style={{ width: '30%' }}>
					<Chart01 />
				</div>
				<div style={{ width: '30%' }}>
					<Chart02 />
				</div>
				<div style={{ width: '30%' }}>
					<Chart03 />
				</div>
			</div>
			<div style={{ width: '90%' }}>
				<Chart04 />
			</div>
		</main>
	);
}
