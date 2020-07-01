import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { LICENSES_QUERY } from '../pages/Licencia';

const ADD_LICENSE_MUTATION = gql`
	mutation AddLicense($input: LicenseInput!) {
		addLicense(input: $input) {
			id
			startDate
			finishDate
			state
			document
			documentName
			employeeCardId
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

const MODIFY_LICENSE_MUTATION = gql`
	mutation ModifyLicense($input: LicenseInput!) {
		modifyLicense(input: $input) {
			id
			startDate
			finishDate
			state
			document
			documentName
			employeeCardId
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
	// const {}
	let nombreC = item.employee.name + ' ' + item.employee.lastname;
	let nombreLi = item.licenseType.description;
	const mutation = item.id
		? MODIFY_LICENSE_MUTATION
		: ADD_LICENSE_MUTATION;
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
								// value={nombreLi}
								>
									{/* <option disabled selected>
										SELECCIONAR
									</option> */}
									<option value={nombreLi}
									>{nombreLi} </option>

								</select>
							</div>
							<div className='form-group'>
								<i className='fa fa-exclamation-triangle pl-2'></i>
								<label htmlFor='txtFechaInicio'>Fecha inicio:</label>
								<input
									id='txtFechaInicio'
									type='date'
									className='form-control'
									value={item.startDate}
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
									type='date'
									className='form-control bg-transparent'
									value={item.finishDate}
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
								<label htmlFor='txtFile'>Documento</label> <br />
								<input
									type='file'
									name=''
									className='border-0' style={{ width: '50%' }}
								/> <input value={item.documentName} id='txtFile' type="text" className='' /> 
								<button className='p-1 degradado border-0 ml-2'>
									 <i className='fa fa-eye m-0 '></i>
									 </button>
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
											// id: parseInt(item.id),
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
											documentName: document.getElementById(
												'txtFile'
											).value

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
