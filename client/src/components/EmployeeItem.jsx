import React, { Component } from 'react';
import foto from '../recursos/perfil.jpg';
import { NavLink } from 'react-router-dom';

export default class EmployeeItem extends Component {
	render() {
		const {
			name,
			lastname,
			cardId,
			genre,
			email,
			state,
		} = this.props.employee;
		return (
			<div className='row card-employeed mb-3'>
				<div className='col-lg-3 card-header text-center fondito'>
					<img src={foto} alt='' className='rounded-circle' />
				</div>
				<div className='col-lg-7 p-2 font-italic'>
					<h3 className='ml-3'>{`${name}, ${lastname}`}</h3>
					<div className='row'>
						<div className='col-sm-2 pl-3 text-sistema font-italic'>
							<i className='fa fa-id-card mr-2'></i>
							<span> Dni:</span>
						</div>
						<div className='col-sm-8 pl-5'>
							<span>{cardId}</span>
						</div>
					</div>

					<div className='row'>
						<div className='col-sm-2 pl-3 text-sistema font-italic'>
							<i className='fa fa-venus-mars mr-2'></i>
							<span> Sexo:</span>
						</div>
						<div className='col-sm-8 pl-5 font-italic'>
							<span>{genre}</span>
						</div>
					</div>

					<div className='row'>
						<div className='col-sm-2 pl-3 text-sistema'>
							<i className='fa fa-envelope mr-2'></i>
							<span> Correo:</span>
						</div>
						<div className='col-sm-8 pl-5 font-italic'>
							<span>{email}</span>
						</div>
					</div>

					<div className='row'>
						<div className='col-sm-2 pl-3 text-sistema'>
							<i className='fa fa-ban mr-2'></i>
							<span> Estado:</span>
						</div>
						<div className='col-sm-8 pl-5 font-italic'>
							<span>{state ? 'Vigente' : 'No vigente'}</span>
						</div>
					</div>
				</div>
				<div className='col-lg-2 p-2 espaciado border border-bottom-0  border-right-0 text-center'>
					<NavLink
						to='/empleado-formulario'
						className='degradado border-0 mb-1 row align-items-center px-2'
					>
						<i className='col-2 fa fa-eye' />
						<span className='col border border-right-0 border-top-0 border-bottom-0'>
							Ver
						</span>
					</NavLink>
					<NavLink
						to='/empleado-formulario'
						className='degradado border-0 mb-1 row align-items-center px-2'
					>
						<i className='col-2 fa fa-pencil-alt' />
						<span className='col border border-right-0 border-top-0 border-bottom-0'>
							Modificar
						</span>
					</NavLink>
					<button className='degradado border-0 mb-1 row align-items-center px-2'>
						<i className='col-2 fas fa-ban' />
						<span className='col border border-right-0 border-top-0 border-bottom-0'>
							Dar baja
						</span>
					</button>
					<button className='degradado border-0 mb-1 row align-items-center px-2'>
						<i className='col-2 fa fa-trash-alt' />
						<span className='col border border-right-0 border-top-0 border-bottom-0'>
							Eliminar
						</span>
					</button>
				</div>
			</div>
		);
	}
}
