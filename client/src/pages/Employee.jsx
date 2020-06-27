import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { NavLink } from 'react-router-dom';
import EmployeeItem from '../components/EmployeeItem';

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
			{/* bg-dark p-3  */}
			<div className='  bg-dark p-3 ml-3 mr-3'>
				<form className='buscar justify-content-sm-start'>
					<div className='form-row'>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='Buscar'
							/>
						</div>
						<div className=''>
							<NavLink
								to='/empleado-formulario'
								className='degradado d-flex h-100 align-items-center pl-1 pr-1 justify-content-center text-decoration-none'
							>
								<i className='fa fa-user-plus mr-1'></i>
								NUEVO
							</NavLink>
						</div>
					</div>
				</form>
				<div className='row'>
					{Array(5)
						.fill(<EmployeeItem />)
						.map((e) => e)}
				</div>
			</div>
		</div>
	);
}
