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
	const { item, update } = props;
	const mutation = item.id
		? MODIFY_LICENSE_TYPE_MUTATION
		: ADD_LICENSE_TYPE_MUTATION;
	const [execute] = useMutation(mutation);
	return (
		<div
			id='frmLicenseType'
			className='modal fade inputEmpleado'
			tabIndex='-1'
		>
			<div className='modal-dialog modal-sm modal-dialog-centered'>
				<div className='modal-content'>
					<div
						className='modal-header  text-white'
						style={{ background: '#D5691E' }}
					>
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
								<i className='fa fa-tag pl-2'></i>
								<label htmlFor='txtName'>Nombre:</label>
								<input
									id='txtDescription'
									type='text'
									className='form-control'
									value={item.description}
									onChange={(e) =>
										update({
											...item,
											description: e.target.value,
										})
									}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-calendar pl-2'></i>
								<label htmlFor='txtTiempo'>Tiempo:</label>
								<input
									id='txtTiempo'
									type='number'
									className='form-control'
									onChange={(e) =>
										update({
											...item,
											maximumDays: e.target.value,
										})
									}
									value={item.maximumDays}
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
							className='btn degradado text-white'
							data-dismiss='modal'
							onClick={() => {
								execute({
									variables: {
										input: {
											id: parseInt(item.id),
											description: document.getElementById(
												'txtDescription'
											).value,
											maximumDays: parseInt(
												document.getElementById(
													'txtTiempo'
												).value
											),
										},
									},
									refetchQueries: [
										{ query: LIST_LICENSETYPE },
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
