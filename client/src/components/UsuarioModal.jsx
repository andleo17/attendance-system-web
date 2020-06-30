import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { USERS_QUERY } from '../pages/Usuario';

const ADD_USER_MUTATION = gql`
	mutation AddUser($input: UserInput!) {
		addUser(input: $input) {
			id
			name
			password
			state
			EmployeeCardId
		}
	}
`;

const MODIFY_USER_MUTATION = gql`
	mutation ModifyUser($input: UserInput!) {
		modifyUser(input: $input) {
			id
			name
			password
			state
			EmployeeCardId
		}
	}
`;

export default function UsiarioModal(props) {
	const { item, update } = props;
	const mutation = item.id === 0
		? ADD_USER_MUTATION
		: MODIFY_USER_MUTATION;
	const [execute] = useMutation(mutation);
	return (
		<div
			id='frmContrato'
			className='modal fade inputEmpleado'
			tabIndex='-1'
		>
			<div className='modal-dialog  modal-dialog-centered'>
				<div className='modal-content'>
					<div
						className='modal-header  text-white'
						style={{ background: '#D5691E' }}
					>
						<h5 className='modal-title'>Nuevo usuario</h5>
						<button
							type='button'
							className='close text-white'
							data-dismiss='modal'
						>
							<span>&times;</span>
						</button>
					</div>
					<div className='modal-body '>
						<form>
							<div className='form-group'>
								<i className='fa fa-id-card pl-2'></i>
								<label htmlFor='txtDocument'>Documento:</label>
								<input
									id='txtDocument'
									type='text'
									className='form-control '
									value={item.EmployeeCardId}
									onChange={(e) =>
										update({
											...item,
											EmployeeCardId: e.target.value,
										})
									}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-tag pl-2'></i>
								<label htmlFor='txtName '>Nombre:</label>
								<input
									id='txtName'
									type='text'
									disabled
									className='form-control bg-white'
									// onChange={(e) =>
									// 	(user.maximumDays = e.target.value)
									// }
									// defaultValue={user.maximumDays}
								/>
							</div>

							<div className='form-group'>
								<i className='fa fa-user-circle pl-2'></i>
								<label htmlFor='txtUser'>Usuario:</label>
								<input
									id='txtUser'
									type='text'
									className='form-control'
									value={item.name}
									onChange={(e) =>
										update({
											...item,
											name: e.target.value,
										})
									}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-key pl-2'></i>
								<label htmlFor='txtPassword'>Contraseña:</label>
								<input
									id='txtPassword'
									type='password'
									className='form-control'
									value={item.password}
									onChange={(e) =>
										update({
											...item,
											password: e.target.value,
										})
									}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-ban pl-2'></i>
								<label htmlFor='txtState'>Estado:</label>{' '}
								<br />
								<input
									id='txtState'
									type='checkbox'
									className=' ml-4'
									value={item.State}
									onChange={(e) =>
										update({
											...item,
											State: e.target.value,
										})
									}
									
								// defaultValue={user.state}
								/>
								{' '}
								<label htmlFor=''>Vigente</label>
							</div>
						</form>
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-dismiss='modal'
						>
							Cerrar
						</button>
						<button
							type='button'
							className='btn degradado text-white'
							data-dismiss='modal'
							onClick={() => {
								execute({
									variables: {
										input: {
											id: parseInt(item.id),
											name: document.getElementById('txtName').value,
											password: document.getElementById('txtPassword').value,
											// state: state,
											EmployeeCardId: document.getElementById('txtDocument').value,
										},
									},
									refetchQueries: [
										{ query: USERS_QUERY },
									],
								});
							}}
						>
							{item.id ? 'Modificar' : 'Registrar'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
