import React, { useState } from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Redirect, useHistory } from 'react-router';
import LicenseTypeCard from '../components/LicenseTypeCard'
import foto from '../recursos/embarazada.jpg';
import foto1 from '../recursos/fallecimiento.jpg';

const LIST_LICENSETYPE = gql`
	query ListLicenseType {
		licenseTypes{
			description
			maximumDays
		}
	}
`;


export default function LicenseType() {
	const { loading, data, error } = useQuery(LIST_LICENSETYPE);
	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>{error.message}</h1>;
	return (
		<div className=' row container-fluid'>
			<div className='col-lg-2'>
				<span></span>
			</div>
			<div className='col-lg-10 '>
				<div className=' m-5 mt-3 conteinerGeneral pt-2 pr-4 pl-4 pb-4'>
					<div className='hit-the-floor  '>Tipo de licencias</div>
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
							tabindex='-1'
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
											<span aria-hidden='true'>
												&times;
											</span>
										</button>
									</div>
									<div className='modal-body'>
										<div>
											<div className=' text-lg-center '>
												<div>
													<div>
														<label for='foto'>
															IMAGEN
														</label>
														<div className='prevPhoto border border-0'>
															<span className='delPhoto notBlock font-weight-bold'>
																X
															</span>
															<label for='foto'></label>
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
														for=''
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
														for=''
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
					{			
							data.licenseTypes.map((lt) =>
								{return <LicenseTypeCard 
									description ={lt.description}
									duration = {lt.maximumDays}
								/>}
							)	
					}
					</div>
				</div>
				<br />
			</div>
		</div>
	);
}
