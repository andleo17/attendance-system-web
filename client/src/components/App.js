import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../style/App.css';
import '../style/bootstrap.css';
import NavLateral from './NavLateral';
import Employee from '../pages/Employee';
import LicenseType from '../pages/LicenseType';
import Login from '../pages/Login';
import EmployeedForm from '../pages/EmployeedForm';
import Contratos from '../pages/Contrato';
import Horarios from '../pages/Horario';
import Permisos from '../pages/Permiso';
import Usuarios from '../pages/Usuario';
import Justificaciones from '../pages/Justificación';
import Asistencia from '../pages/Asistencia';
import Licencias from '../pages/Licencia';
import ControlAsistencia from '../pages/ControlAsistencia';
import Main from '../pages/Main';
import Pdf from '../pages/Pdf'

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true,
			user: JSON.parse(localStorage.getItem('user')),
		};
	}

	render() {
		console.log(this.state.user);
		return (
			<Switch>
				<Route
					exact
					path='/login'
					component={() => (
						<Login setUser={(user) => this.setState({ user })} />
					)}
				/>
				{this.state.user == null && <Redirect to='/login' />}
				<Switch>
					<Fragment>
						<div
							className={`page-wrapper chiller-theme ${
								this.state.show ? 'toggled' : ''
							}`}
						>
							<NavLateral
								setShow={(show) => this.setState({ show })}
								show={this.state.show}
								user={this.state.user}
								logOut={() => {
									localStorage.removeItem('user');
									this.setState({
										user: null,
									});
								}}
							/>
							<Route exact path='/' component={Main} />
							<Route
								exact
								path='/tipo-licencia'
								component={LicenseType}
							/>
							<Route
								exact
								path='/empleados'
								component={Employee}
							/>
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
							<Route
								exact
								path='/pdf'
								component={Pdf}
							/>
						</div>
					</Fragment>
				</Switch>
			</Switch>
		);
	}
}
