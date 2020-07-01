import React from 'react';
import { NavLink } from 'react-router-dom';
import EmployeeItem from '../components/EmployeeItem';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Loader from '../components/Loader';
import ErrorIcon from '../components/ErrorIcon';

const EMPLOYEE_QUERY = gql`
	query EmployeeQuery {
		employees {
			cardId
			name
			lastname
			email
			state
			genre
		}
	}
`;

export default function Employee() {
	const { loading, error, data } = useQuery(EMPLOYEE_QUERY);
	if (loading) return <Loader />;
	if (error) return <ErrorIcon error={error} />;
	return (
		<div className='page-content'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1>Empleado</h1>
			</div>

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
								to='/empleado'
								className='degradado d-flex h-100 align-items-center pl-1 pr-1 justify-content-center text-decoration-none'
							>
								<i className='fa fa-user-plus mr-1'></i>
								NUEVO
							</NavLink>
						</div>
					</div>
				</form>

				<br />

				<div className=''>
					{data.employees.map((e) => (
						<EmployeeItem employee={e} key={e.cardId} />
					))}
				</div>
			</div>
		</div>
	);
}
