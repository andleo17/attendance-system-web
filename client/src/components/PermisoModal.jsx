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

export default function PermissioneModal(props) {
	const { item, update } = props;
	// const [p, setP] = useState(permission);
	// console.log(permission.motive);

	const mutation = item.id
			? MODIFY_PERMISSION_MUTATION
			: ADD_PERMISSION_MUTATION;
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
						<form>
							<div className='form-group'>
								<i className='fa fa-id-card pl-2'></i>
								<label htmlFor='txtDocument'>Documento:</label>
								<input
									id='txtDocument'
									type='text'
									className='form-control '
									value={item.employeeCardId}
									onChange={(e) =>
										update({
											...item,
											employeeCardId: e.target.value,
										})
									}
									
								/>
							</div>
							<div className='form-group'>
							<i className='fa fa-file pl-2'></i>
								<label htmlFor='txtMotive '>Motivo:</label>
								<input
									id='txtMotive'
									type='text'
									className='form-control bg-white'
									value={item.motive}
									onChange={(e) =>
										update({
											...item,
											motive: e.target.value,
										})
									}
								/>
							</div>
                            <div className='form-group'>
							<i className='fa fa-calendar-alt pl-2'></i>
								<label htmlFor='txtPresentationDate'>Fecha de presentación</label>
								<input
									id='txtPresentationDate'
									type='date'
									className='form-control'
									value={item.presentationDate}
									onChange={(e) =>
										update({
											...item,
											presentationDate: e.target.value,
										})
									}
								/>
							</div>
							<div className='form-group'>
							<i className='fa fa-calendar-check pl-2'></i>
								<label htmlFor='txtDate'>Fecha de permiso</label>
								<input
									id='txtDate'
									type='date'
									className='form-control'
									value={item.date}
									onChange={(e) =>
										update({
											...item,
											date: e.target.value,
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
									className='ml-4'
									checked={item.state}
									onChange={(e) =>
										update({
											...item,
											state: e.target.value,
										})
									}

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
											date: document.getElementById(
												'txtDate'
											).value,
											employeeCardId:document.getElementById(
												'txtDocument'
											).value,
											id: parseInt(item.id),
											motive: document.getElementById(
												'txtMotive'
											).value,
											state: document.getElementById(
												'txtState'
											).checked,
										},
									},
									refetchQueries: [
										{ query: LIST_PERMISSION },
									],
								})
							}
							data-dismiss='modal'
						>
							{item.id ? 'Modificar' : 'Registrar'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
