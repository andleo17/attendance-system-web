import React from 'react';

export default function RLicencias() {
	return (
		<div className='page-content'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1>Licencias</h1>
			</div>
			<div className='  bg-dark p-3 ml-3 mr-3'>
				<form className='buscar justify-content-sm-start'>
					<div className='form-row'>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='Buscar'
								title='Buscar'
							/>
						</div>
						<div className=''>
							<button
								type='button'
								data-toggle='modal'
								data-target='#frmLicenseType'
								className='degradado d-flex align-items-center border-0 justify-content-center p-0'
								style={{ width: '40px', height: '40px' }}
							>
								<i className='fa fa-file-pdf '></i>
							</button>
						</div>
					</div>
				</form>
				<div className='card table-responsive-lg  p-3 mt-3 text-center'>
					<table class='table tablaDetalleHorario'>
						<thead class='thead-dark '>
							<tr>
								<th scope='col'>Fecha presentación</th>
								<th scope='col'>Fecha inicio</th>
								<th scope='col'>Fecha fin</th>
								<th scope='col'>Tipo</th>
								<th scope='col'>Documento</th>
								<th scope='col'>Nombres</th>
								<th scope='col'>Apellidos</th>
								<th scope='col'>Estado</th>
							</tr>
						</thead>
						<tbody className=''>
							<tr>
								<td>-----</td>
								<td>-----</td>
								<td>-----</td>
								<td>-----</td>
								<td>-----</td>
								<td>-----</td>
								<td>-----</td>
								<td>-----</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
