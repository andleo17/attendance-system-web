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
			<Route exact path='/login'>
				<Login />
				<Footer />
			</Route>
			<Fragment>
				<NavLateral />
				<Footer />
				<Route exact path='/tipo-licencia'>
					<LicenseType />
				</Route>
				<Route exact path='/empleado'>
					<Employeed />
				</Route>
			</Fragment>
		</Switch>
	);
}

export default App;
