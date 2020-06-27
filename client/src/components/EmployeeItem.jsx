import React, { Component } from 'react';
import foto from '../recursos/perfil.jpg'
import { NavLink } from 'react-router-dom';

export default class EmployeeItem extends Component {
	render() {
		return (
			

			
			<div className=' row card-employeed  mb-3 '>

			<div className='col-lg-3  card-header  text-center  fondito'>
				<img
					src={foto}
					alt=''
					className=' rounded-circle  '
				/>
			</div>
			<div className='col-lg-7 p-2 font-italic'>
				<h3 className='ml-3'>Paola Cieza Bances</h3>

				<div className='row'>
					<div className='col-sm-2 pl-3 text-sistema font-italic'>
						<i className='fa fa-id-card  mr-2'></i>
						<label htmlFor=''> Dni:</label>
					</div>
					<div className='col-sm-8 pl-5'>
						<label htmlFor=''> 75756219</label>
					</div>
				</div>

				<div className='row'>
					<div className='col-sm-2 pl-3 text-sistema font-italic'>
						<i className='fa fa-venus-mars mr-2'></i>
						<label htmlFor='' className=''>
							{' '}
							Sexo:
						</label>
					</div>
					<div className='col-sm-8 pl-5 font-italic'>
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
					<div className='col-sm-8 pl-5 font-italic'>
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
					<div className='col-sm-8 pl-5 font-italic'>
						<label htmlFor=''> Vigente</label>
					</div>
				</div>
			</div>
			{/* <div className='col-lg-2 d-flex flex-column text-center align-items-center border border-bottom-0 border-top-0 border-right-0'> */}
			<div className='col-lg-2 p-2 espaciado border border-bottom-0  border-right-0 text-center'>

				<NavLink to='/empleado-formulario' className='degradado border-0  mb-1' style={{ width: '100%' }} >
					<i className='col-2 fa fa-eye'></i>
					<label
						htmlFor=''
						className='col-9 m-0 ml-2 border border-right-0 border-top-0 border-bottom-0'
					>
						{' '}
						Ver
					</label>
				</NavLink>{' '}
				<NavLink to='/empleado-formulario' className='degradado  border-0 mb-1' style={{ width: '100%' }}>
					<i className='col-2 fa fa-pencil-alt '></i>
					<label
						htmlFor=''
						className='col-9 m-0 ml-2 border border-right-0 border-top-0 border-bottom-0'
						style={{ width: '' }}
					>
						{' '}
						Modificar
					</label>
				</NavLink>{' '}
				<button className='degradado  border-0 mb-1' style={{ width: '100%' }}>
					<i className='col-2 fas fa-ban '></i>
					<label
						htmlFor=''
						className='col-9 m-0 ml-2 border border-right-0 border-top-0 border-bottom-0'
					>
						{' '}
						Dar baja
					</label>
				</button>{' '}
				
				<button className='degradado  border-0 mb-1' style={{ width: '100%' }}>
					
					<i className='col-2 fa fa-trash-alt '></i>
					<label
						htmlFor=''
						className='col-9 m-0 ml-2  border border-right-0 border-top-0 border-bottom-0'
					>
						{' '}
						Eliminar
					</label>
				</button>{' '}

			</div>
			</div>
		);
	}
}
