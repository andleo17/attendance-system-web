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

export default function HorarioModal(props) {
	const { licenseType } = props;
	const mutation =
		licenseType.mode === 0
			? ADD_LICENSE_TYPE_MUTATION
			: MODIFY_LICENSE_TYPE_MUTATION;
	const [execute] = useMutation(mutation);
	return (
		<div id='frmHorario' className='modal fade inputEmpleado' tabIndex='-1'>
			<div className='modal-dialog  modal-dialog-centered'>
				<div className='modal-content'>
					<div className='modal-header  text-white' style={{background:'#D5691E'}}>
						<h5 className='modal-title'>Nuevo horario</h5>
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
										(licenseType.description =
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
									className='form-control bg-white' disabled
									onChange={(e) =>
										(licenseType.maximumDays =
											e.target.value)
									}
									// defaultValue={licenseType.maximumDays}
								/>
							</div>
                            <div className='form-group'>
                            <i className='fa fa-calendar-check pl-2'></i>
								<label htmlFor='txtTiempo'>Fecha inicio </label>
								<input
									id='txtTiempo'
									type='date'
									className='form-control'
									onChange={(e) =>
										(licenseType.maximumDays =
											e.target.value)
									}
									// defaultValue={licenseType.maximumDays}
								/>
							</div>
                            <div className='form-group'>
                            <i className='fa fa-calendar-times pl-2'></i>
								<label htmlFor='txtTiempo'>Fecha fin </label>
								<input
									id='txtTiempo'
									type='date'
									className='form-control'
									onChange={(e) =>
										(licenseType.maximumDays =
											e.target.value)
									}
									// defaultValue={licenseType.maximumDays}
								/>
							</div>
                            
                            <div className='form-group'>
                            <i className='fa fa-ban pl-2'></i>
								<label htmlFor='txtTiempo'>Estado:</label> <br/>
								<input
									id='txtTiempo'
									type='checkbox'
									className=' ml-4'
									onChange={(e) =>
										(licenseType.maximumDays =
											e.target.value)
									}
									// defaultValue={licenseType.maximumDays}
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
									refetchQueries: [
										{ query: LIST_LICENSETYPE },
									],
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
