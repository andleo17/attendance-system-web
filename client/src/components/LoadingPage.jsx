import React from 'react';

const LoadingPage = (props)=>{
	const {employeeCardId, title} = props;
	return(
		<div className='page-content'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1 htmlFor='' className=''>
					{title}
				</h1>
			</div>
			<div className='  bg-dark p-3 ml-3 mr-3'>
				<form className='buscar justify-content-sm-start'>
					<div className='form-row'>
						<div className='col'>
							<input
								id='txtSearch'
								type='text'
								title='Buscar por empleado'
								className='form-control'
								placeholder='Ingrese DNI y presione ENTER para buscar'
								defaultValue={employeeCardId}
							/>
						</div>
						<div className=''>
							<button
								type='button'
								data-toggle='modal'
								data-target='#frmPermiso'
								className='degradado d-flex h-100 align-items-center border-0 justify-content-center text-decoration-none'
							>
								<i className='fa fa-arrow-circle-up mr-1'></i>
								NUEVO
							</button>
						</div>
					</div>
				</form>
				<div className='row' className='row badge-dark pl-4 mt-4'>
					<h2>Cargando...</h2>
				</div>
			</div>
		</div>
	);
}


export default LoadingPage;