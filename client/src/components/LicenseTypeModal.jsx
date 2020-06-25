import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';

export default function LicenseTypeModal(props) {
	const { licenseType, changeData } = props;
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
										changeData(
											Object.assign(licenseType, {
												description: e.target.value,
											})
										)
									}
									value={licenseType.description}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='txtTiempo'>Tiempo:</label>
								<input
									id='txtTiempo'
									type='number'
									className='form-control'
									onChange={(e) =>
										changeData(
											Object.assign(licenseType, {
												maximumDays: e.target.value,
											})
										)
									}
									value={licenseType.maximumDays}
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
						<button type='button' className='btn degradado'>
							Registrar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
