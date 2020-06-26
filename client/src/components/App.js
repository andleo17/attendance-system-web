import React, { Fragment, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../style/App.css';
import '../style/bootstrap.css';
import NavLateral from './NavLateral';
import Footer from './Footer';
import Employee from '../pages/Employee';
import LicenseType from '../pages/LicenseType';
import Login from '../pages/Login';
import EmployeedForm from '../pages/EmployeedForm';
import Contratos from '../pages/Contrato'

function App() {
	const [show, setShow] = useState(true);
	return (
		<Fragment>
			{/* <Footer /> */}
			<Switch>
				<Route exact path='/login' component={Login} />
				<Fragment>
					<div
						className={`page-wrapper chiller-theme ${
							show ? 'toggled' : ''
						}`}
					>
						<NavLateral setShow={setShow} show={show} />
						<Route
							exact
							path='/tipo-licencia'
							component={LicenseType}
						/>
						<Route exact path='/empleados' component={Employee} />
						<Route
							exact
							path='/empleado-formulario'
							component={EmployeedForm}
						/>
						<Route
							exact
							path='/contratos'
							component={Contratos}
						/>
					</div>
				</Fragment>
			</Switch>
		</Fragment>
	);
}

export default App;
