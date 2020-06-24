import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../style/App.css';
import '../style/bootstrap.css';
import Header from './Header';
import NavLateral from './NavLateral';
import Footer from './Footer';
import Employeed from './Employeed';
import LicenseType from './LicenseType';
import Login from '../pages/Login';

function App() {
	return (
		<Switch>
			<Fragment>
			<Footer />
			<Route exact path='/login' component={Login} />
			</Fragment>

			<Fragment>
				<NavLateral />
				<Footer />
				<Route exact path='/tipo-licencia' component={LicenseType} />
				<Route exact path='/empleado' component={Employeed} />
			</Fragment>
		</Switch>
	);
}

export default App;
