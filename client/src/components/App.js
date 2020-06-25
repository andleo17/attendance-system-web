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
import EmployeedForm from '../pages/EmployeedForm';

function App() {
	return (
		<Fragment>
			<Footer />
			<Switch>
				<Route exact path='/login' component={Login} />
				<Fragment>
					{/* <NavLateral /> */}
					<Route exact path='/tipo-licencia' component={LicenseType} />
					<Route exact path='/empleado' component={Employeed} />
					<Route exact path='/empleado-formulario' component={EmployeedForm} />
				</Fragment>
			</Switch>
		</Fragment>



	);
}

export default App;
