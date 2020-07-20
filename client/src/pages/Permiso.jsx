import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import PermisoCard from '../components/PermissoCard';
import PermisoModal from '../components/PermisoModal';
import ErrorIcon from '../components/ErrorIcon';
import LoadingPage from '../components/LoadingPage';

export const LIST_PERMISSION = gql`
	query ListPermission($employeeCardId: String) {
		permissions(employeeCardId: $employeeCardId) {
			id
			date
			motive
			state
			presentationDate
			employeeCardId
			employee {
				name
				lastname
			}
		}
	}
`;

export const initialState = {
	__typename: 'Permission',
	date: '',
	id: '',
	motive: '',
	presentationDate: '',
	state: '',
	employeeCardId: '',
	employee: {
		__typename: 'Employee',
		name: '',
		lastname: '',
	},
};

export default function Permissions() {
	const [selectedItem, setSelectedItem] = useState(initialState);
	const [employeeCardId, setEmployeeCardId] = useState(null);
	const { loading, error, data, refetch } = useQuery(LIST_PERMISSION, {
		variables: { employeeCardId },
		pollInterval: 500,
	});

	if (loading) {
		return <LoadingPage employeeCardId={employeeCardId} title='Permisos' />;
	}
	if (error) return <ErrorIcon error={error} />;

	return (
		<div className='page-content'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1 htmlFor='' className=''>
					Permisos
				</h1>
			</div>
			<div className='  bg-dark p-3 ml-3 mr-3'>
				<form className='buscar justify-content-sm-start'>
					<div className='form-row'>
						<div className='col'>
							<input
								id='txtSearch'
								type='text'
								className='form-control'
								title='Buscar por empleado'
								maxLength='8'
								placeholder='Ingrese DNI y presione ENTER para buscar'
								defaultValue={employeeCardId}
								onChange={(e) => {
									if (e.target.value === '') {
										setEmployeeCardId(null);
										refetch();
									}
								}}
								onKeyDown={(e) => {
									if (e.keyCode === 13 && !e.shiftKey) {
										e.preventDefault();
										if (e.target.value === '') {
											setEmployeeCardId(null);
											refetch();
										} else {
											setEmployeeCardId(
												document.getElementById(
													'txtSearch'
												).value
											);
											refetch();
										}
									}
								}}
							/>
						</div>
						<div className=''>
							<button
								type='button'
								data-toggle='modal'
								data-target='#frmPermiso'
								onClick={() => setSelectedItem(initialState)}
								className='degradado d-flex h-100 align-items-center border-0 justify-content-center text-decoration-none'
							>
								<i className='fa fa-arrow-circle-up mr-1'></i>
								NUEVO
							</button>
						</div>
					</div>
				</form>
				<div className='row'>
					{data.permissions.map((p) => {
						return (
							<PermisoCard
								key={p.id}
								data={p}
								showData={() => setSelectedItem(p)}
							/>
						);
					})}
				</div>
				<PermisoModal item={selectedItem} update={setSelectedItem} />
			</div>
		</div>
	);
}
