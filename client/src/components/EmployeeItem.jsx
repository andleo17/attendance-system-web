import React, { Component } from 'react';

export default class EmployeeItem extends Component {
	render() {
		return (
			<div className='col-12 my-2'>
				<div className='card'>
					<div className='row'>
						<div className='col-3 fondito'>
							<img
								src=''
								alt=''
								className='card-img rounded-circle'
							/>
						</div>
						<div className='col p-3'>
							<h3 className='mb-3 font-weight-bold'>
								Paola Cieza Bances
							</h3>
							<div className='row mb-2'>
								<div className='col-2 font-weight-bold'>
									<i className='fa fa-id-card'></i>
									<span className='ml-2'>Dni:</span>
								</div>
								<div className='col'>
									<span>75756219</span>
								</div>
							</div>
							<div className='row mb-2'>
								<div className='col-2 font-weight-bold'>
									<i className='fa fa-venus-mars'></i>
									<span className='ml-2'>Sexo:</span>
								</div>
								<div className='col'>
									<span>Femenino</span>
								</div>
							</div>
							<div className='row mb-2'>
								<div className='col-2 font-weight-bold'>
									<i className='fa fa-envelope'></i>
									<span className='ml-2'>Correo:</span>
								</div>
								<div className='col'>
									<span>paolacieza8@gmail.com</span>
								</div>
							</div>
							<div className='row mb-2'>
								<div className='col-2 font-weight-bold'>
									<i className='fa fa-ban'></i>
									<span className='ml-2'>Estado:</span>
								</div>
								<div className='col'>
									<span>Vigente</span>
								</div>
							</div>
						</div>
						<div className='col-2 border border-bottom-0 border-top-0 border-right-0 d-flex flex-column justify-content-around px-5'>
							<button className='degradado btn text-white text-left'>
								<i className='fa fa-eye mr-3' />
								<span>Ver</span>
							</button>
							<button className='degradado btn text-white text-left'>
								<i className='fa fa-pencil-alt mr-3' />
								<span>Modificar</span>
							</button>
							<button className='degradado btn text-white text-left'>
								<i className='fas fa-ban mr-3' />
								<span>Dar de baja</span>
							</button>
							<button className='degradado btn text-white text-left'>
								<i className='fa fa-trash-alt mr-3' />
								<span>Eliminar</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
