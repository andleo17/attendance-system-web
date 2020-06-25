import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import foto from '../recursos/perfil.jpg';
import { NavLink } from 'react-router-dom';

export default function Employee() {
	return (
		<div className='page-content'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1 htmlFor='' className=''>
					Empleado
				</h1>
			</div>
			<div className='bg-dark p-3'>
				<form className='buscar justify-content-sm-start'>
					<div className='form-row'>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='Buscar'
							/>
						</div>
						<div className='col-1'>
							<NavLink
								to='/empleado-formulario'
								className='degradado d-flex h-100 align-items-center justify-content-center text-decoration-none'
							>
								<i className='fa fa-user-plus mr-1'></i>
								NUEVO
							</NavLink>
						</div>
					</div>
				</form>
				<br />
				<div className=' row card-employeed'>
					<div className='col-lg-3   text-lg-center fondito'>
						<img
							src={foto}
							alt=''
							className='w-50 rounded-circle mt-4 '
						/>
					</div>
					<div className='col-lg-7'>
						<h3 className='ml-3'>Paola Cieza Bances</h3>

						<div className='row'>
							<div className='col-sm-2 pl-3 text-sistema'>
								<i className='fa fa-id-card  mr-2'></i>
								<label htmlFor=''> Dni:</label>
							</div>
							<div className='col-sm-8 pl-5'>
								<label htmlFor=''> 75756219</label>
							</div>
						</div>

						<div className='row'>
							<div className='col-sm-2 pl-3 text-sistema'>
								<i className='fa fa-venus-mars mr-2'></i>
								<label htmlFor='' className=''>
									{' '}
									Sexo:
								</label>
							</div>
							<div className='col-sm-8 pl-5'>
								<label htmlFor=''> Femenino</label>
							</div>
						</div>

						<div className='row'>
							<div className='col-sm-2 pl-3 text-sistema'>
								<i className='fa fa-envelope mr-2'></i>
								<label htmlFor='' className=''>
									{' '}
									Correo:
								</label>
							</div>
							<div className='col-sm-8 pl-5'>
								<label htmlFor=''> paolacieza8@gmail.com</label>
							</div>
						</div>

						<div className='row'>
							<div className='col-sm-2 pl-3 text-sistema'>
								<i className='fa fa-ban mr-2'></i>
								<label htmlFor='' className=''>
									{' '}
									Estado:
								</label>
							</div>
							<div className='col-sm-8 pl-5'>
								<label htmlFor=''> Vigente</label>
							</div>
						</div>
					</div>
					<div className='col-lg-2 text-center border border-darken-1 border-bottom-0 border-top-0 border-right-0'>
						<br />
						<button className='degradado  border-0 w-75 m-1'>
							<i className='col-sm-2 fa fa-eye '></i>
							<label
								htmlFor=''
								className='col-sm-9 m-0 ml-2 border border-right-0 border-top-0 border-bottom-0'
							>
								{' '}
								Ver
							</label>
						</button>{' '}
						<br />
						<button className='degradado  border-0 w-75 m-1'>
							<i className='col-sm-2 fa fa-pencil-alt '></i>
							<label
								htmlFor=''
								className='col-sm-9 m-0 ml-2 border border-right-0 border-top-0 border-bottom-0'
							>
								{' '}
								Modificar
							</label>
						</button>{' '}
						<br />
						<button className='degradado  border-0 w-75 m-1'>
							<i className='col-sm-2 fas fa-ban '></i>
							<label
								htmlFor=''
								className='col-sm-9 m-0 ml-2 border border-right-0 border-top-0 border-bottom-0'
							>
								{' '}
								Dar baja
							</label>
						</button>{' '}
						<br />
						<button className='degradado  border-0 w-75 m-1'>
							<i className='col-sm-2 fa fa-trash-alt '></i>
							<label
								htmlFor=''
								className='col-sm-9 m-0 ml-2  border border-right-0 border-top-0 border-bottom-0'
							>
								{' '}
								Eliminar
							</label>
						</button>{' '}
						<br />
					</div>
				</div>
				<br />
			</div>
		</div>
	);
}