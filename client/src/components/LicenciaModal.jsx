import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { LICENSES_QUERY } from '../pages/Licencia';

const ADD_LICENSE_TYPE_MUTATION = gql`
	mutation AddLicense($input: LicenseTypeInput!) {
		addLicense(input: $input) {
			id
			startDate
			finishDate
			state
			licenseType {
				description
			}
			employee {
				name
				lastname
			}
		}
	}
`;

const MODIFY_LICENSE_TYPE_MUTATION = gql`
	mutation ModifyLicense($input: LicenseTypeInput!) {
		modifyLicense(input: $input) {
			id
			startDate
			finishDate
			state
			licenseType {
				description
			}
			employee {
				name
				lastname
			}
		}
	}
`;

export default function LicenseModal(props) {
	const { item, update } = props;
	let nombreC = item.employee.name + ' ' + item.employee.lastname;
	const mutation =item.id
			? MODIFY_LICENSE_TYPE_MUTATION
			: ADD_LICENSE_TYPE_MUTATION;
	const [execute] = useMutation(mutation);

	return (
		<div
			id='frmLicencia'
			className='modal fade inputEmpleado'
			tabIndex='-1'
		>
			<div className='modal-dialog  modal-dialog-centered'>
				<div className='modal-content'>
					<div
						className='modal-header   text-white'
						style={{ background: '#D5691E' }}
					>
						<h5 className='modal-title'>Nueva licencia</h5>
						<button
							type='button'
							className='close text-white'
							data-dismiss='modal'
						>
							<span>&times;</span>
						</button>
					</div>
					<div className='modal-body pt-0 '>
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
								<i className='fa fa-tag pl-2'></i>
								<label htmlFor='txtName '>Nombre:</label>
								<input
									id='txtName'
									type='text'
									disabled
									className='form-control bg-white'
									value={nombreC}
									/>
							</div>

							<div className='form-group'>
								<i className='fa fa-exclamation-triangle pl-2'></i>
								<label htmlFor='txtTipo'>Tipo:</label>
								<select
									name='txtTipo'
									id='txtTipo'
									class='btn'
									className='form-control btn btn-outline-sistema '
									style={{ width: '100%' }}
								>
									<option value='1' disabled selected>
										SELECCIONAR
									</option>
									<option value='2'>Femenino</option>
									<option value='3'>Masculino</option>
									<option value='4'>Otro</option>
								</select>
							</div>
							<div className='form-group'>
								<i className='fa fa-exclamation-triangle pl-2'></i>
								<label htmlFor='txtFechaInicio'>Fecha inicio:</label>
								<input
									id='txtFechaInicio'
									type='text'
									className='form-control'
									value={	item.startDate}
									onChange={(e) =>
										update({
											...item,
											startDate: e.target.value,
										})
									}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-exclamation-triangle pl-2'></i>
								<label htmlFor='txtFechaFin'>Fecha fin:</label>
								<input
									id='txtFechaFin'
									type='text'
									disabled
									className='form-control bg-transparent'
									value={	item.finishDate}
									onChange={(e) =>
										update({
											...item,
											finishDate: e.target.value,
										})
									}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-exclamation-triangle pl-2'></i>
								<label htmlFor='txtFile'>Documento</label>
								<input
									type='file'
									name=''
									className='form-control'
									id='txtFile'
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
									checked={item.state}
									onChange={(e) =>
										update({
											...item,
											state: e.target.checked,
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
											id: parseInt(item.id),
											employeeCardId: document.getElementById(
												'txtDocument'
											).value,
											startDate: document.getElementById(
												'txtFechaInicio'
											).value,
											finishDate: document.getElementById(
												'txtFechaFin'
											).value,
											state: document.getElementById(
												'txtState'
											).checked,
										},
									},
									refetchQueries: [
										{ query: LICENSES_QUERY },
									],
								})
							}
						>
							{item.mode === 0 ? 'Registrar' : 'Modificar'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
