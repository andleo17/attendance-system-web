import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { LIST_LICENSETYPE } from '../pages/LicenseType';

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

export default function LicenseTypeModal(props) {
	const { licenseType } = props;
	const mutation =
		licenseType.mode === 0
			? ADD_LICENSE_TYPE_MUTATION
			: MODIFY_LICENSE_TYPE_MUTATION;
	const [execute] = useMutation(mutation);
	return (
		<div id='frmLicenseType' className='modal fade' tabIndex='-1'>
			<div className='modal-dialog modal-sm modal-dialog-centered'>
				<div className='modal-content'>
					<div className='modal-header bg-dark text-white'>
						<h5 className='modal-title'>Nuevo tipo de licencia</h5>
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
								<label htmlFor='txtName'>Nombre:</label>
								<input
									id='txtName'
									type='text'
									className='form-control'
									onChange={(e) =>
										(licenseType.description =
											e.target.value)
									}
									defaultValue={licenseType.description}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='txtTiempo'>Tiempo:</label>
								<input
									id='txtTiempo'
									type='number'
									className='form-control'
									onChange={(e) =>
										(licenseType.maximumDays =
											e.target.value)
									}
									defaultValue={licenseType.maximumDays}
								/>
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
							className='btn degradado'
							onClick={() =>
								execute({
									variables: {
										input: {
											id: parseInt(licenseType.id),
											description:
												licenseType.description,
											maximumDays: parseInt(
												licenseType.maximumDays
											),
										},
									},
									update: (store, { data }) => {
										if (licenseType.mode === 0) {
											const {
												licenseTypes,
											} = store.readQuery({
												query: LIST_LICENSETYPE,
											});
											licenseTypes.push(
												data.addLicenseType
											);
											store.writeQuery({
												query: LIST_LICENSETYPE,
												data: { licenseTypes },
											});
										}
									},
								})
							}
						>
							{licenseType.mode === 0 ? 'Registrar' : 'Modificar'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
