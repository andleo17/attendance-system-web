import React, { useState } from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import PermisoCard from '../components/PermissoCard';
import PermisoModal from '../components/PermisoModal';
import Loader from '../components/Loader';
import ErrorIcon from '../components/ErrorIcon';

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
	permissions: [
		{
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
		},
	],
};

export default function Permissions() {
	const [selectedItem, setSelectedItem] = useState(
		initialState.permissions[0]
	);
	const [employeeCardId, setEmployeeCardId] = useState(null);
	const [search, { loading, data, error }] = useLazyQuery(LIST_PERMISSION);
	// if (loading) return <Loader />;
	if (error) return <ErrorIcon error={error} />;
	let listPermission = initialState;

	if (data && data.permissions) {
		listPermission = data;
	}
	return (
		// <div onLoad={()=>console.log("xdxdxdxdxd")}>
		// 	jkfljsflkjdsfkjdsfjlskjdl
		// </div>
		<div
			className='page-content'
			onLoad={() => {
				if (employeeCardId == null) {
					search({
						variables: null,
					});
				}
			}}
		>
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
								type='text'
								title='Buscar por empleado'
								className='form-control'
								placeholder='Ingrese DNI y presione ENTER para buscar'
								onChange={(e) =>
									setEmployeeCardId(e.target.value)
								}
								onKeyDown={(e) => {
									if (e.keyCode === 13 && !e.shiftKey) {
										e.preventDefault();
										if (e.target.value === '') {
											search({
												variables: null,
											});
										} else {
											search({
												variables: { employeeCardId },
											});
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
								onClick={() => setSelectedItem(initialState.permissions[0])}
								className='degradado d-flex h-100 align-items-center border-0 justify-content-center text-decoration-none'
							>
								<i className='fa fa-arrow-circle-up mr-1'></i>
								NUEVO
							</button>
						</div>
					</div>
				</form>
				<div className='row'>
					{listPermission.permissions.map((p) => {
						return (
							<PermisoCard
								key={p.id}
								data={p}
								showData={() => setSelectedItem(p)}
							/>
						);
					})}
				</div>
				<PermisoModal 
					item={selectedItem}
					update={setSelectedItem}
				 />
			</div>
		</div>
	);
}
