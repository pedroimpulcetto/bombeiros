import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CorpoIndex from './components/CorpoIndex';
import Relatorio from './components/Relatorio';
import Crm from './components/Crm';
import Efetivo from './components/Efetivo';
import Viatura from './components/Viatura';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={CorpoIndex} />
			<Route path="/relatorio" component={Relatorio} />
			<Route path="/crm" component={Crm} />
			<Route path="/efetivo" component={Efetivo} />
			<Route path="/viatura" component={Viatura} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
