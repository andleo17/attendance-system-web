import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { LIST_PERMISSION } from '../pages/Permiso';

const ADD_PERMISSION_MUTATION = gql`
	mutation AddPermission($input: PermissionInput!) {
		addPermission(input: $input) {
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

const MODIFY_PERMISSION_MUTATION = gql`
	mutation ModifyPermission($input: PermissionInput!) {
		modifyPermission(input: $input) {
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

// var x = [];

export default function PermissioneModal(props) {
	const { permission } = props;
	// const [p, setP] = useState(permission);
	console.log(permission.motive);

	const mutation =
		permission.mode === 0
			? ADD_PERMISSION_MUTATION
			: MODIFY_PERMISSION_MUTATION;
	const [execute] = useMutation(mutation);

	return (
		<div id='frmPermiso' className='modal fade inputEmpleado' tabIndex='-1'>
			<div className='modal-dialog  modal-dialog-centered'>
				<div className='modal-content'>
					<div
						className='modal-header  text-white'
						style={{ background: '#D5691E' }}
					>
						<h5 className='modal-title'>Nuevo permiso</h5>
						<button
							type='button'
							className='close text-white'
							data-dismiss='modal'
						>
							<span>&times;</span>
						</button>
					</div>
					<div className='modal-body'>
						<form key={permission.id}>
							<div className='form-group'>
								<i className='fa fa-id-card pl-2'></i>
								<label htmlFor='txtName'>Documento:</label>
								<input
									id='txtName'
									type='text'
									className='form-control '
									onChange={(e) =>
										(permission.employeeCardId =
											e.target.value)
									}
									defaultValue={permission.employeeCardId}
								/>
							</div>
							<div className='form-group'>
							<i className='fa fa-file pl-2'></i>
								<label htmlFor='txtTiempo '>Motivo:</label>
								<input
									id='txtTiempo'
									type='text'
									className='form-control bg-white'
									onChange={(e) =>
										(permission.motive = e.target.value)
									}
									defaultValue={permission.motive}
								/>
							</div>
                            <div className='form-group'>
							<i className='fa fa-calendar-alt pl-2'></i>
								<label htmlFor='txtFechaPresentacion'>Fecha de presentación</label>
								<input
									id='txtFechaPresentacion'
									type='date'
									className='form-control'
									onChange={(e) =>
										(permission.presentationDate =
											e.target.value)
									}
									defaultValue={permission.presentationDate}
								/>
							</div>
							<div className='form-group'>
							<i className='fa fa-calendar-check pl-2'></i>
								<label htmlFor='txtFechaPermiso'>Fecha de permiso</label>
								<input
									id='txtFechaPermiso'
									type='date'
									className='form-control'
									onChange={(e) =>
										(permission.date = e.target.value)
									}
									defaultValue={permission.date}
								/>
							</div>

							<div className='form-group'>
								<i className='fa fa-ban pl-2'></i>
								<label htmlFor='txtTiempo'>Estado:</label>{' '}
								<br />
								<input
									id='txtTiempo'
									type='checkbox'
									className='ml-4'
									onChange={(e) => (permission.state =  e.target.checked)}
									// onChange={(e) =>
									// 	(licenseType.maximumDays =
									// 		e.target.value)
									// }
									checked={permission.state}
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
											date: permission.date,
											employeeCardId: permission.employeeCardId,
											id: parseInt(permission.id),
											motive: permission.motive,
											state: permission.state,
										},
									},
									refetchQueries: [
										{ query: LIST_PERMISSION },
									],
								})
							}
							data-dismiss='modal'
						>
							{permission.mode === 0 ? 'Registrar' : 'Modificar'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
