import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { JUSTIFICATIONS_QUERY } from '../pages/Justificación';

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

export default function UsiarioModal(props) {
	const { justification } = props;
	const mutation =
		justification.mode === 0
			? ADD_LICENSE_TYPE_MUTATION
			: MODIFY_LICENSE_TYPE_MUTATION;
	const [execute] = useMutation(mutation);
	return (
		<div
			id='frmJustificacion'
			className='modal fade inputEmpleado'
			tabIndex='-1'
		>
			<div className='modal-dialog  modal-dialog-centered'>
				<div className='modal-content'>
					<div
						className='modal-header   text-white'
						style={{ background: '#D5691E' }}
					>
						<h5 className='modal-title'>Nueva justificación</h5>
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
								<label htmlFor='txtName'>Documento:</label>
								<input
									id='txtName'
									type='text'
									className='form-control '
									onChange={(e) =>
										(justification.description =
											e.target.value)
									}
									// defaultValue={licenseType.description}
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
										(justification.maximumDays =
											e.target.value)
									}
									// defaultValue={licenseType.maximumDays}
								/>
							</div>

							<div className='form-group'>
								<i className='fa fa-exclamation-triangle pl-2'></i>
								<label htmlFor='txtTiempo'>
									Código asistencia:
								</label>
								<input
									id='txtTiempo'
									type='text'
									className='form-control'
									onChange={(e) =>
										(justification.maximumDays =
											e.target.value)
									}
									// defaultValue={licenseType.maximumDays}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-exclamation-triangle pl-2'></i>
								<label htmlFor='txtTiempo'>Motivo:</label>
								<input
									id='txtTiempo'
									type='text'
									className='form-control'
									onChange={(e) =>
										(justification.maximumDays =
											e.target.value)
									}
									// defaultValue={licenseType.maximumDays}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-exclamation-triangle pl-2'></i>
								<label htmlFor='txtTiempo'>
									Fecha inasistencia:
								</label>
								<input
									id='txtTiempo'
									type='text'
									className='form-control'
									onChange={(e) =>
										(justification.maximumDays =
											e.target.value)
									}
									// defaultValue={licenseType.maximumDays}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-exclamation-triangle pl-2'></i>
								<label htmlFor='txtTiempo'>
									Fecha justificación:
								</label>
								<input
									id='txtTiempo'
									type='text'
									disabled
									className='form-control bg-transparent'
									onChange={(e) =>
										(justification.maximumDays =
											e.target.value)
									}
									// defaultValue={licenseType.maximumDays}
								/>
							</div>

							<div className='form-group'>
								<i className='fa fa-ban pl-2'></i>
								<label htmlFor='txtTiempo'>Estado:</label>{' '}
								<br />
								<input
									id='txtTiempo'
									type='checkbox'
									className=' ml-4'
									onChange={(e) =>
										(justification.maximumDays =
											e.target.value)
									}
									// defaultValue={licenseType.maximumDays}
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
											id: parseInt(justification.id),
											description:
												justification.description,
											maximumDays: parseInt(
												justification.maximumDays
											),
										},
									},
									refetchQueries: [
										{ query: JUSTIFICATIONS_QUERY },
									],
								})
							}
						>
							{justification.mode === 0
								? 'Registrar'
								: 'Modificar'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
