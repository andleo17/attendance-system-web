import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import foto from '../recursos/perfil.jpg';

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
			<div className='bg-dark p-3 form-group ml-3 mr-3'>
				<form
					action=''
					className='row buscar form-group d-flex mt-2 justify-content-sm-start m-2 md-form form-sm active-pink-2 mt-2'
				>
					<input
						type='text'
						className=' form-control-sm m-1 mr-3 col-sm-10 '
						placeholder='Buscar'
					/>
					<button className=' degradado border-0 col-sm-1'>
						<i className='fa fa-user-plus'></i>
						{/* NUEVO */}
					</button>
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
