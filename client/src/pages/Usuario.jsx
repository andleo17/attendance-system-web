import React, { useState } from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { NavLink } from 'react-router-dom';
import UsuarioCard from '../components/UsuarioCard';
import UsuarioModal from '../components/UsuarioModal';
import Loader from '../components/Loader';
import ErrorIcon from '../components/ErrorIcon';

export const USERS_QUERY = gql`
	query Users {
		users {
			id
			name
			password
			state
			employee {
				name
				lastname
			}
		}
	}
`;

export default function Usuario() {
	const initialState = {
		__typename: 'User',
		id: null,
		name: null,
		password: null,
		state: null,
		mode: 0,
	};
	const [selectedItem, setSelectedItem] = useState(initialState);

	const { loading, data, error } = useQuery(USERS_QUERY);
	if (loading) return <Loader />;
	if (error) return <ErrorIcon error={error} />;

	return (
		<div className='page-content'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1 htmlFor='' className=''>
					Usuario
				</h1>
			</div>
			<div className='  bg-dark p-3 ml-3 mr-3'>
				<form className='buscar justify-content-sm-start'>
					<div className='form-row'>
						<div className='col'>
							<input
								type='text'
								title='Buscar por empleado'
								className='form-control'
								placeholder='Buscar'
							/>
						</div>
						<div className=''>
							<button
								type='button'
								data-toggle='modal'
								data-target='#frmContrato'
								className='degradado d-flex h-100 align-items-center border-0 justify-content-center text-decoration-none'
							>
								<i className='fa fa-user-plus mr-1'></i>
								NUEVO
							</button>
						</div>
					</div>
				</form>
				<div className='row'>
					{data.users.map((lt) => {
						return (
							<UsuarioCard
								key={lt.id}
								data={lt}
								setData={setSelectedItem}
							/>
						);
					})}
				</div>
				<UsuarioModal user={selectedItem} />
			</div>
		</div>
	);
}
