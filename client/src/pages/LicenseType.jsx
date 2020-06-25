import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import foto from '../recursos/embarazada.jpg';

export default function LicenseType() {
	return (
		<div className='page-content'>
			<div className='hit-the-floor'>Tipo de licencias</div>
			<form
				action=''
				className='row form-inline d-flex mt-2 justify-content-sm-start m-2 md-form form-sm active-pink-2 mt-2'
			>
				<input
					type='text'
					className='form-control form-control-sm m-1 mr-3 col-lg-10 bg-transparent border 
                        border-left-0 border-right-0  border-top-0 border-danger'
					placeholder='Buscar'
				/>

				<button
					type='button'
					className='col-lg-1 degradado border-0 w-100'
					data-toggle='modal'
					data-target='#nuevoTipoLicencia'
				>
					{' '}
					NUEVO
				</button>

				{/* Inicio Modal para nuevo tipo de licencia  */}
				<div
					className='modal fade '
					tabIndex='-1'
					role='dialog'
					id='nuevoTipoLicencia'
				>
					<div
						className='modal-dialog modal-sm modal-dialog-centered '
						role='document'
					>
						<div className='modal-content'>
							<div className='modal-header bg-dark '>
								<h5 className='modal-title text-white'>
									{' '}
									Nuevo tipo de licencia{' '}
								</h5>
								<button
									type='button'
									className='close text-white'
									data-dismiss='modal'
									aria-label='Close'
								>
									<span aria-hidden='true'>&times;</span>
								</button>
							</div>
							<div className='modal-body'>
								<div>
									<div className=' text-lg-center '>
										<div>
											<div>
												<label htmlFor='foto'>
													IMAGEN
												</label>
												<div className='prevPhoto border border-0'>
													<span className='delPhoto notBlock font-weight-bold'>
														X
													</span>
													<label htmlFor='foto'></label>
												</div>
												<div className='upimg '>
													<input
														type='file'
														name='foto'
														id='foto'
													/>
												</div>
												<div id='form_alert'></div>
											</div>
										</div>
										<div className='row'>
											<label
												htmlFor=''
												className='col-sm-4 m-0'
											>
												Nombre:
											</label>
											<input
												type='text'
												className='form-control form-control-sm  col-sm-7 bg-transparent border 
                                                    border-left-0 border-right-0  border-top-0 border-danger'
											/>{' '}
										</div>
										<div className='row'>
											<label
												htmlFor=''
												className='col-sm-4 m-0'
											>
												Tiempo
											</label>
											<input
												type='number'
												className='form-control form-control-sm m-1 mr-3 col-sm-7 bg-transparent border 
                                                    border-left-0 border-right-0  border-top-0 border-danger'
											/>{' '}
										</div>
									</div>
								</div>
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
									className='btn  degradado'
								>
									Registrar
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* /* Fin Modal para nuevo tipo de licencia */}
			</form>
			<br />
			<div className=' row '>
				<div className='col-lg-3  '>
					<div className=' m-1  card-licensetype text-lg-center '>
						<div
							className='row pl-4 '
							style={{ background: '#D5691E' }}
						>
							<h3 className='text-center text-white'>LICENCIA</h3>
						</div>
						<img src={foto} alt='' className='w-50 h-50' />

						<div className='row p-3'>
							<div className=' align-content-start p-1'>
								<label className=' text-sm-left text-black mr-1'>
									{' '}
									<b>Nombre:</b>{' '}
								</label>
								<label htmlFor=''>Licencia por embarazo</label>
							</div>
							<div className='align-content-start p-1 '>
								<label className='text-black mr-1'>
									{' '}
									<b>Tiempo:</b>{' '}
								</label>
								<label htmlFor=''>90 días</label>

								<br />
							</div>
						</div>
						<div className=' row pb-1 pt-1 pl-4 pr-4  justify-content-lg-around  border border-darken-1 border-bottom-0 border-right-0'>
							<button
								className='col-lg-2 degradado border-0  m-1 p-0 '
								data-toggle='modal'
								data-target='#nuevoTipoLicencia'
							>
								<i className='fa fa-pencil-alt'></i>
								{/* Modificar */}
							</button>

							<button className='col-lg-2 degradado border-0 m-1 p-0'>
								<i className='fas fa-ban'></i>
								{/* Dar baja */}
							</button>
							<button className='col-lg-2 degradado border-0 m-1 p-0 '>
								<i
									className='fa fa-trash-alt'
									aria-hidden='true'
								></i>
								{/* Eliminar */}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
