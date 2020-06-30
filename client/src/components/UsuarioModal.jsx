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
		}
	}
`;

export default function UsiarioModal(props) {
	const { user } = props;
	const mutation = user.mode === 0 ? ADD_USER_MUTATION : MODIFY_USER_MUTATION;
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
								<label htmlFor='txtName'>Documento:</label>
								<input
									id='txtName'
									type='text'
									className='form-control '
									onChange={(e) =>
										(user.description = e.target.value)
									}
									defaultValue={user.description}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-tag pl-2'></i>
								<label htmlFor='txtTiempo '>Nombre:</label>
								<input
									id='txtTiempo'
									type='text'
									disabled
									className='form-control bg-white'
									onChange={(e) =>
										(user.maximumDays = e.target.value)
									}
									defaultValue={user.maximumDays}
								/>
							</div>

							<div className='form-group'>
								<i className='fa fa-user-circle pl-2'></i>
								<label htmlFor='txtTiempo'>Usuario:</label>
								<input
									id='txtName'
									type='text'
									className='form-control'
									onChange={(e) =>
										(user.name = e.target.value)
									}
									defaultValue={user.name}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-key pl-2'></i>
								<label htmlFor='txtTiempo'>Contraseña:</label>
								<input
									id='txtPassword'
									type='password'
									className='form-control'
									onChange={(e) =>
										(user.password = e.target.value)
									}
									defaultValue={user.password}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-ban pl-2'></i>
								<label htmlFor='txtTiempo'>Estado:</label>{' '}
								<br />
								<input
									id='chkState'
									type='checkbox'
									className=' ml-4'
									onChange={(e) =>
										(user.state = e.target.value)
									}
									// defaultValue={user.state}
								/>{' '}
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
							onClick={() =>
								execute({
									variables: {
										input: {
											id: parseInt(user.id),
											description: user.description,
											maximumDays: parseInt(
												user.maximumDays
											),
										},
									},
									refetchQueries: [{ query: USERS_QUERY }],
								})
							}
						>
							{user.mode === 0 ? 'Registrar' : 'Modificar'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
