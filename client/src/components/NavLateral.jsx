import React, { Fragment } from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import foto from '../recursos/perfil.jpg';
import { NavLink } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';
import MenuItem from './MenuItem';

export default function NavLateral(props) {
	return (
		<Fragment>
			<span
				id='show-sidebar'
				className='btn btn-sm btn-dark'
				onClick={() => props.setShow(!props.show)}
			>
				<i className='fas fa-bars'></i>
			</span>
			<nav id='sidebar' className='sidebar-wrapper '>
				<div className='sidebar-content'>
					<div className='sidebar-brand'>
						<NavLink to='/'>SISTEMA DE ASISTENCIA</NavLink>
						<div
							id='close-sidebar'
							onClick={() => props.setShow(!props.show)}
						>
							<i className='fas fa-times'></i>
						</div>
					</div>
					<div className='sidebar-header'>
						<div className='user-pic'>
							<img
								src={foto}
								className='img-responsive img-rounded'
								alt='User'
							/>
						</div>
						<div className='user-info'>
							<span className='user-name'> Paola Cieza </span>
							<span className='user-role'>Administrator</span>
						</div>
					</div>
					<div className='sidebar-search'>
						<div>
							<div className='input-group'>
								<input
									type='text'
									className='form-control search-menu'
									placeholder='Buscar'
								/>
								<div className='input-group-append'>
									<span className='input-group-text'>
										<i
											className='fa fa-search'
											aria-hidden='true'
										></i>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className='sidebar-menu'>
						<ul>
							<li className='header-menu'>
								<span>General</span>
							</li>
							<DropDownMenu
								title='Mantenimiento'
								icon='fa fa-cogs'
							>
								<MenuItem
									path='/tipo-licencia'
									title='Tipo de licencia'
								/>
							</DropDownMenu>
							<DropDownMenu title='Empleado' icon='fa fa-child'>
								<MenuItem path='/empleados' title='Gestionar' />
								<MenuItem path='/contratos' title='Contratos' />
								<MenuItem path='/horarios' title='Horarios' />
								<MenuItem path='/usuarios' title='Usuario' />
							</DropDownMenu>
							<DropDownMenu
								title='Operaciones'
								icon='fa fa-laptop'
							>
								<MenuItem
									path='/asistencias'
									title='Asistencia'
								/>
								<MenuItem
									path='/justificaciones'
									title='Justificaciones'
								/>
								<MenuItem path='/permisos' title='Permisos' />
								<MenuItem path='/licencias' title='Licencias' />
							</DropDownMenu>
							<DropDownMenu title='Reportes' icon='fa fa-folder'>
								<MenuItem
									path='/reportes/tardanzas'
									title='Tardanzas'
								/>
								<MenuItem
									path='/reportes/asistencias'
									title='Asistencias'
								/>
								<MenuItem
									path='/reportes/inasistencias'
									title='Inasistencias'
								/>
								<MenuItem
									path='/reportes/inasistencias-empleado'
									title='Inasistencias por empleado'
								/>
								<MenuItem
									path='/reportes/licencias'
									title='Licencias'
								/>
								<MenuItem
									path='/reportes/licencias-tipo'
									title='Licencias por tipo'
								/>
								<MenuItem
									path='/reportes/estadisticas-inasistencias'
									title='Estadísticas de inasistencias'
								/>
								<MenuItem
									path='/reportes/estadisticas-asistencias'
									title='Estadísticas de asistencias'
								/>
							</DropDownMenu>
						</ul>
					</div>
					<div className='sidebar-footer'>
						<button type='button'>
							<i className='fa fa-power-off'> Cerrar sesión</i>
						</button>
					</div>
				</div>
			</nav>
		</Fragment>
	);
}
