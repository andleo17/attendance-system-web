import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { LIST_LICENSETYPE } from '../pages/LicenseType';
import { useState } from 'react';

const ADD_LICENSE_TYPE_MUTATION = gql`
	mutation AddLicenseType($input: LicenseTypeInput!) {
		addLicenseType(input: $input) {
			id
			description
			maximumDays
		}
	}
`;

const MODIFY_LICENSE_TYPE_MUTATION = gql`
	mutation ModifyLicenseType($input: LicenseTypeInput!) {
		modifyLicenseType(input: $input) {
			id
			description
			maximumDays
		}
	}
`;

export default function PermissioneModal(props) {
	const { permission } = props;
	console.log(permission);
	// const mutation =
	// 	licenseType.mode === 0
	// 		? ADD_LICENSE_TYPE_MUTATION
	// 		: MODIFY_LICENSE_TYPE_MUTATION;
	// const [execute] = useMutation(mutation);
	return (
		<div id='frmPermiso' className='modal fade inputEmpleado' tabIndex='-1'>
			<div className='modal-dialog  modal-dialog-centered'>
				<div className='modal-content'>
					<div className='modal-header  text-white' style={{background:'#D5691E'}}>
						<h5 className='modal-title'>Nuevo permiso</h5>
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
								<label htmlFor='txtName'>Documento:</label>
								<input
									id='txtName'
									type='text'
									className='form-control '
									// onChange={(e) =>
									// 	(licenseType.description =
									// 		e.target.value)
									// }
									defaultValue={permission.employeeCardId}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='txtTiempo '>Motivo:</label>
								<input
									id='txtTiempo'
									type='text'
									className='form-control bg-white'
									// onChange={(e) =>
									// 	(licenseType.maximumDays =
									// 		e.target.value)
									// }
									value={permission.motive}
								/>
							</div>
                            <div className='form-group'>
								<label htmlFor='txtFechaPresentacion'>Fecha de presentación</label>
								<input
									id='txtFechaPresentacion'
									type='date'
									className='form-control'
									// onChange={(e) =>
									// 	(licenseType.maximumDays =
									// 		e.target.value)
									// }
									defaultValue={permission.presentationDate}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='txtFechaPermiso'>Fecha de permisio</label>
								<input
									id='txtFechaPermiso'
									type='date'
									className='form-control'
									// onChange={(e) =>
									// 	(licenseType.maximumDays =
									// 		e.target.value)
									// }
									defaultValue={permission.date}
								/>
							</div>
                            
                            <div className='form-group'>
								<label htmlFor='txtTiempo'>Estado:</label> <br/>
								<input
									id='txtTiempo'
									type='checkbox'
									className=''
									// onChange={(e) =>
									// 	(licenseType.maximumDays =
									// 		e.target.value)
									// }
									defaultValue={permission.state}
								/> <label htmlFor="">Vigente</label>
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
							// onClick={() =>
							// 	execute({
							// 		variables: {
							// 			input: {
							// 				id: parseInt(licenseType.id),
							// 				description:
							// 					licenseType.description,
							// 				maximumDays: parseInt(
							// 					licenseType.maximumDays
							// 				),
							// 			},
							// 		},
							// 		refetchQueries: [
							// 			{ query: LIST_LICENSETYPE },
							// 		],
							// 	})
							// }
						>
							Soy un botón {/* {licenseType.mode === 0 ? 'Registrar' : 'Modificar'} */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
