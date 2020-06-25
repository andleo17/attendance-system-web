import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import foto from '../recursos/perfil.jpg';

export default function EmployeedForm() {
	return (
		<div className='page-content inputEmpleado'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1 htmlFor='' className=''>
					Empleado
				</h1>
			</div>
			<form className='bg-dark p-3 form-group ml-3 mr-3'>
				{/* <form action="" className='bg-light p-3 form-group ml-3 mr-3'  > */}

				<div className='empleCard bg-light border'>
					{/* <div className="row border border-bottom-0 "> */}
					<div className='row border-0 '>
						<div className='col-sm-1'></div>
						<div className='col-sm-4 text-center pt-3 '>
							<div>
								<div className='prevPhotoPerfil border border-0'>
									<span className='delPhoto notBlock font-weight-bold'>
										{' '}
										X
									</span>
									<label for='foto'></label>
								</div>
								<div className='upimg '>
									<input
										src={foto}
										type='file'
										name='foto'
										id='foto'
									/>
								</div>
								<div id='form_alert'></div>
							</div>
							<input type='checkbox' name='' id='' />{' '}
							<label htmlFor=''> Vigente</label>
						</div>
						<div className='col-sm-2'></div>
						<div className='col-sm-4 pl-3 pr-3'>
							<div className=''>
								<i className='fa fa-id-card'></i>
								<label htmlFor=''>Dni:</label>
								<br />
								<input
									type='text'
									maxLength='8'
									className='form-control '
									style={{ width: '100%' }}
								/>
							</div>
							<div>
								<i className='fa fa-tag'></i>
								<label htmlFor=''>Nombres:</label> <br />
								<input
									type='text'
									className='form-control'
									style={{ width: '100%' }}
								/>
							</div>
							<div>
								<i className='fa fa-tag'></i>
								<label htmlFor=''>Apellidos:</label> <br />
								<input
									type='text'
									className='form-control'
									style={{ width: '100%' }}
								/>
							</div>
							<div>
								<i className='fa fa-gift'></i>
								<label htmlFor=''>Nacimiento:</label> <br />
								<input
									type='date'
									name=''
									id=''
									className='form-control'
									style={{ width: '100%' }}
								/>
							</div>
						</div>
						<div className='col-sm-1'></div>
					</div>
					{/* <div className="row border border border-top-0 pb-2"> */}
					<div className='row border border-0 pb-2'>
						<div className='col-sm-1'></div>
						<div className='col-sm-4 pl-3 pr-3'>
							<div>
								<i className='fa fa-venus-mars'></i>
								<label htmlFor=''>Sexo:</label> <br />
								<select
									name='selectorC'
									id='selectorC'
									class='btn'
									className='form-control btn btn-outline-sistema'
									style={{ width: '100%' }}
								>
									<option value='1' disabled selected>
										SELECCIONAR
									</option>
									<option value='2'>Femenino</option>
									<option value='3'>Masculino</option>
									<option value='4'>Otro</option>
								</select>
							</div>
							<div>
								<i className='fa fa-home'></i>
								<label htmlFor=''>Dirección:</label> <br />
								<input
									type='text'
									className='form-control'
									style={{ width: '100%' }}
								/>
							</div>
						</div>
						<div className='col-sm-2'></div>
						<div className='col-sm-4 pl-3 pr-3'>
							<div className=''>
								<i className='fa fa-envelope'></i>
								<label htmlFor=''>Correo:</label> <br />
								<input
									type='email'
									name=''
									id=''
									className='form-control'
									style={{ width: '100%' }}
								/>
							</div>
							<div>
								<i className='fa fa-mobile'></i>
								<label htmlFor=''>Teléfono:</label> <br />
								<input
									type='text'
									className='form-control'
									style={{ width: '100%' }}
								/>
							</div>
						</div>
						<div className='col-sm-1'></div>
					</div>
				</div>

				<div className='row border pb-2 mt-3 empleCard bg-light'>
					<div className='col-sm-1'></div>
					<div className='col-sm-4 pl-3 pr-3'>
						<div>
							<i className='fa fa-file-archive'></i>
							<label htmlFor=''>Contrato:</label> <br />
							<input type='checkbox' name='' id='' />{' '}
							<label htmlFor=''> Vigente</label>
						</div>
						<div>
							<i className='fa fa-calendar-check'></i>
							<label htmlFor=''>Fecha inicial:</label> <br />
							<input
								type='date'
								name=''
								id=''
								className='form-control'
								style={{ width: '100%' }}
							/>
						</div>
						<div>
							<i className='fa fa-calendar-times'></i>
							<label htmlFor=''>Fecha final:</label> <br />
							<input
								type='date'
								name=''
								id=''
								className='form-control'
								style={{ width: '100%' }}
							/>
						</div>
					</div>
					<div className='col-sm-2'></div>
					<div className='col-sm-4 pl-3 pr-3'>
						<div className=''>
							<i className='fa fa-money-bill-alt'></i>
							<label htmlFor=''>Monto:</label>
							<input
								type='text'
								className='form-control'
								style={{ width: '100%' }}
							/>
						</div>
						<div>
							<i className='fa fa-clock'></i>
							<label htmlFor=''>Horas extras:</label> <br />
							<input type='checkbox' name='' id='' />{' '}
							<label htmlFor=''> Sí</label>
						</div>
						<div>
							<label htmlFor=''></label> <br />
							<button className='btn degradado pb-0 pt-0'>
								<i className='fa fa-eye text-white m-0'></i>
							</button>
						</div>
					</div>
				</div>

				<div className='row border mt-3 pb-2 empleCard  bg-light '>
					<div className='col-sm-1'></div>
					<div className='col-sm-4 pl-3 pr-3'>
						<div>
							<i className='fa fa-clock'></i>
							<label htmlFor=''>Horario:</label> <br />
							<input type='checkbox' name='' id='' />{' '}
							<label htmlFor=''> Vigente</label>
						</div>
						<div>
							<i className='fa fa-calendar-check'></i>
							<label htmlFor=''>Fecha inicial:</label> <br />
							<input
								type='date'
								name=''
								id=''
								className='form-control'
								style={{ width: '100%' }}
							/>
						</div>
					</div>
					<div className='col-sm-2'></div>
					<div className='col-sm-4 pl-3 pr-3'>
						<div>
							<i className='fa fa-calendar-times'></i>
							<label htmlFor=''>Fecha final:</label> <br />
							<input
								type='date'
								name=''
								id=''
								className='form-control'
								style={{ width: '100%' }}
							/>
						</div>
						<div>
							<label htmlFor=''></label> <br />
							<button className='btn degradado pb-0 pt-0 '>
								<i className='fa fa-eye text-white m-0  '></i>
							</button>
						</div>
					</div>
					<div className='col-sm-1'></div>
				</div>

				<div className='card table-responsive-sm p-3 mt-3 text-center empleCard'>
					<table class='table tablaDetalleHorario'>
						<thead class='thead-dark '>
							<tr>
								<th scope='col'>Hora</th>
								<th scope='col'>Lunes</th>
								<th scope='col'>Martes</th>
								<th scope='col'>Miércoles</th>
								<th scope='col'>Jueves</th>
								<th scope='col'>Viernes</th>
								<th scope='col'>Sábado</th>
							</tr>
						</thead>
						<tbody className=''>
							<tr>
								<th scope='row'>07:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope='row'>08:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope='row'>09:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope='row'>10:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope='row'>11:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope='row'>12:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope='row'>13:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope='row'>14:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope='row'>15:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope='row'>16:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope='row'>17:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope='row'>18:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope='row'>19:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope='row'>20:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope='row'>21:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope='row'>22:00</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</form>
		</div>
	);
}
