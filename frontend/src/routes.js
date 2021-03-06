import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CorpoIndex from './components/CorpoIndex';
import Relatorio from './components/Relatorio';
import Crm from './components/Crm';
import Efetivo from './components/Efetivo';
import Viatura from './components/Viatura';
import ResultadoRelatorio from './components/Relatorio/resultado-relatorio.js';

import store from './store';
import { Provider } from 'react-redux';
import GeralChart from './components/Charts/geral';

const Routes = () => (
	<BrowserRouter>
		<Provider store={store}>
			<Switch>
				<Route exact path="/" component={CorpoIndex} />
				<Route path="/relatorio" component={Relatorio} />
				<Route path="/crm" component={Crm} />
				<Route path="/efetivo" component={Efetivo} />
				<Route path="/viatura" component={Viatura} />
				<Route path="/resultado-relatorio" component={ResultadoRelatorio} />
				<Route path="/graficos" component={GeralChart} />
			</Switch>
		</Provider>
	</BrowserRouter>
);

export default Routes;
