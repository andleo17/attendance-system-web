import React, { Fragment, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../style/App.css';
import '../style/bootstrap.css';
import NavLateral from './NavLateral';
import Employee from '../pages/Employee';
import LicenseType from '../pages/LicenseType';
import Login from '../pages/Login';
import EmployeedForm from '../pages/EmployeedForm';
import Contratos from '../pages/Contrato'
import Horarios from '../pages/Horario'
import Permisos from '../pages/Permiso'
import Usuarios from '../pages/Usuario'
import Justificaciones from '../pages/Justificación'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Asistencia from '../pages/Asistencia'
import Licencias from '../pages/Licencia'
import ControlAsistencia from '../pages/ControlAsistencia' 
 
function App() {
	const [show, setShow] = useState(true);
	return (
		<Fragment>
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
						<Route
							exact
							path='/horarios'
							component={Horarios}
						/>
						<Route
							exact
							path='/permisos'
							component={Permisos}
						/>
						<Route
							exact
							path='/usuarios'
							component={Usuarios}
						/>
						<Route
							exact
							path='/justificaciones'
							component={Justificaciones}
						/>
						<Route
							exact
							path='/asistencias'
							component={Asistencia}
						/>
						<Route
							exact
							path='/licencias'
							component={Licencias}
						/>
						<Route
							exact
							path='/control-asistencia'
							component={ControlAsistencia}
						/>
						{/* <Footer /> */}
					</div>
					

				</Fragment>
			</Switch>
		</Fragment>
	);
}

export default App;
