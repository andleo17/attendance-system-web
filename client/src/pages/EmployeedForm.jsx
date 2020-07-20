import React from 'react';
import foto from '../recursos/perfil.jpg';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';

const EMPLOYEE_QUERY = gql`
	query EmployeeQuery($cardId: ID!) {
		employee(cardId: $cardId) {
			cardId
			name
			lastname
			birthdate
			email
			phone
			genre
			address
			photoName
			state
			contract(last: true) {
				id
				mount
				extraHours
				startDate
				finishDate
				state
			}
			schedule(last: true) {
				id
				startDate
				finishDate
				state
				scheduleDetail {
					id
					day
					inHour
					outHour
				}
			}
		}
	}
`;

const ADD_EMPLOYEE_MUTATION = gql`
	mutation AddEmployee($input: EmployeeInput!) {
		addEmployee(input: $input) {
			cardId
		}
	}
`;

const MODIFY_EMPLOYEE_MUTATION = gql`
	mutation ModifyEmployee($input: EmployeeInput!) {
		modifyEmployee(input: $input) {
			cardId
		}
	}
`;

const initialState = {
	address: '',
	birthdate: '',
	cardId: '',
	email: '',
	genre: '',
	lastname: '',
	name: '',
	phone: '',
	photoName: '',
	state: false,
	contract: [
		{
			id: '',
			startDate: '',
			finishDate: '',
			mount: '',
			extraHours: '',
			state: false,
		},
	],
	schedule: [
		{
			id: '',
			startDate: '',
			finishDate: '',
			state: false,
		},
	],
};

export default function EmployeedForm(props) {
	const [employee, setEmployee] = useState(initialState);
	const { data, loading, error } = useQuery(EMPLOYEE_QUERY, {
		variables: { cardId: `${props.match.params.cardId}` },
	});
	const mutation = props.match.params.mode
		? MODIFY_EMPLOYEE_MUTATION
		: ADD_EMPLOYEE_MUTATION;
	const [execute] = useMutation(mutation);

	useEffect(() => {
		if (data) setEmployee(data.employee);
	}, [data]);

	if (loading) return <Loader />;

	if (props.match.params.cardId) {
		if (error)
			return (
				<div className='page-content'>
					{error.graphQLErrors.map((e) => (
						<div key={e.message} className='alert-danger'>
							{e.message}
						</div>
					))}
				</div>
			);
	}

	return (
		<div className='page-content inputEmpleado'>
			<div
				className='row badge-dark pl-4'
				style={{ background: '#D5691E' }}
			>
				<h1>Empleado</h1>
			</div>
			<form className='bg-dark p-3 form-group mx-3'>
				<div className='bg-light rounded p-3 my-2'>
					<div className='form-row'>
						<div className='col'>
							<div className='prevPhotoPerfil border border-0'>
								<span className='delPhoto notBlock font-weight-bold'>
									X
								</span>
								<label htmlFor='foto'></label>
							</div>
							<div className='upimg '>
								<input src={foto} type='file' id='foto' />
							</div>
							<input
								type='checkbox'
								id='state'
								checked={employee.state}
								onChange={(e) =>
									setEmployee({
										...employee,
										state: e.target.checked,
									})
								}
							/>
							<label htmlFor='state'> Vigente</label>
						</div>
						<div className='col-6'>
							<div className='col'>
								<div className='form-group'>
									<label htmlFor='txtCardId'>
										<i className='fa fa-id-card' />
										<span>Dni:</span>
									</label>
									<input
										id='txtCardId'
										type='text'
										maxLength='8'
										className='form-control'
										required
										value={employee.cardId}
										onChange={(e) =>
											setEmployee({
												...employee,
												cardId: e.target.value,
											})
										}
									/>
								</div>
							</div>
							<div className='col'>
								<div className='form-group'>
									<label htmlFor='txtName'>
										<i className='fa fa-tag' />
										<span>Nombres:</span>
									</label>
									<input
										id='txtName'
										type='text'
										className='form-control'
										required
										value={employee.name}
										onChange={(e) =>
											setEmployee({
												...employee,
												name: e.target.value,
											})
										}
									/>
								</div>
							</div>
							<div className='col'>
								<div className='form-group'>
									<label htmlFor='txtLastname'>
										<i className='fa fa-tag' />
										<span>Apellidos:</span>
									</label>
									<input
										id='txtLastname'
										type='text'
										className='form-control'
										required
										value={employee.lastname}
										onChange={(e) =>
											setEmployee({
												...employee,
												lastname: e.target.value,
											})
										}
									/>
								</div>
							</div>
						</div>
						<div className='col-6'>
							<div className='form-group'>
								<label htmlFor='dtBirthdate'>
									<i className='fa fa-gift'></i>
									<span>Nacimiento:</span>
								</label>
								<input
									type='date'
									id='dtBirthdate'
									className='form-control'
									value={employee.birthdate}
									onChange={(e) =>
										setEmployee({
											...employee,
											birthdate: e.target.value,
										})
									}
								/>
							</div>
						</div>
						<div className='col-6'>
							<div className='form-group'>
								<label htmlFor='cboGenre'>
									<i className='fa fa-venus-mars' />
									<span>Sexo:</span>
								</label>
								<select
									id='cboGenre'
									className='form-control btn btn-outline-sistema'
									value={employee.genre}
									onChange={(e) =>
										setEmployee({
											...employee,
											genre: e.target.value,
										})
									}
								>
									<option value='' disabled hidden>
										Seleccionar
									</option>
									<option value='F'>Femenino</option>
									<option value='M'>Masculino</option>
									<option value='O'>Otro</option>
								</select>
							</div>
						</div>
						<div className='col-6'>
							<div className='form-group'>
								<label htmlFor='txtAddress'>
									<i className='fa fa-home' />
									<span>Dirección:</span>
								</label>
								<input
									id='txtAddress'
									type='text'
									className='form-control'
									value={employee.address}
									onChange={(e) =>
										setEmployee({
											...employee,
											address: e.target.value,
										})
									}
								/>
							</div>
						</div>
						<div className='col-6'>
							<div className='form-group'>
								<label htmlFor='txtEmail'>
									<i className='fa fa-envelope' />
									<span>Correo:</span>
								</label>
								<input
									type='email'
									id='txtEmail'
									className='form-control'
									value={employee.email}
									onChange={(e) =>
										setEmployee({
											...employee,
											email: e.target.value,
										})
									}
								/>
							</div>
						</div>
						<div className='col-6'>
							<div className='form-group'>
								<label htmlFor='txtPhone'>
									<i className='fa fa-mobile' />
									<span>Teléfono:</span>
								</label>
								<input
									id='txtPhone'
									type='text'
									className='form-control'
									value={employee.phone}
									onChange={(e) =>
										setEmployee({
											...employee,
											phone: e.target.value,
										})
									}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='bg-light rounded p-3 my-2'>
					<div className='form-row'>
						<div className='col-6'>
							<div className='form-group'>
								<label htmlFor='chkContractState'>
									<i className='fa fa-file-archive' />
									<span>Contrato:</span>
								</label>
								<div className='form-group'>
									<input
										type='checkbox'
										id='chkContractState'
										checked={employee.contract[0].state}
										onChange={(e) =>
											setEmployee({
												...employee,
												contract: [
													{
														state: e.target.checked,
													},
												],
											})
										}
									/>
									<label htmlFor='chkContractState'>
										Vigente
									</label>
								</div>
							</div>
						</div>
						<div className='col-6'>
							<div className='form-group'>
								<label htmlFor='dtContractStartDate'>
									<i className='fa fa-calendar-check' />
									<span>Fecha inicial:</span>
								</label>
								<input
									type='date'
									id='dtContractStartDate'
									className='form-control'
									value={employee.contract[0].startDate}
									onChange={(e) =>
										setEmployee({
											...employee,
											contract: [
												{
													startDate: e.target.value,
												},
											],
										})
									}
								/>
							</div>
						</div>
						<div className='col-6'>
							<div className='form-group'>
								<label htmlFor='dtContractFinishDate'>
									<i className='fa fa-calendar-times' />
									<span>Fecha final:</span>
								</label>
								<input
									type='date'
									id='dtContractFinishDate'
									className='form-control'
									value={employee.contract[0].finishDate}
									onChange={(e) =>
										setEmployee({
											...employee,
											contract: [
												{
													finishDate: e.target.value,
												},
											],
										})
									}
								/>
							</div>
						</div>
						<div className='col-6'>
							<div className='form-group'>
								<label htmlFor='txtMount'>
									<i className='fa fa-money-bill-alt' />
									<span>Monto:</span>
								</label>
								<input
									id='txtMount'
									type='text'
									className='form-control'
									value={employee.contract[0].mount}
									onChange={(e) =>
										setEmployee({
											...employee,
											contract: [
												{
													mount: e.target.value,
												},
											],
										})
									}
								/>
							</div>
						</div>
						<div className='col-6'>
							<div className='form-group'>
								<label htmlFor='chkExtraHours'>
									<i className='fa fa-clock' />
									<span>Horas extras:</span>
								</label>
								<div className='form-group'>
									<input
										type='checkbox'
										id='chkExtraHours'
										checked={
											employee.contract[0].extraHours
										}
										onChange={(e) =>
											setEmployee({
												...employee,
												contract: [
													{
														extraHours:
															e.target.checked,
													},
												],
											})
										}
									/>
									<label htmlFor='chkExtraHours'> Sí</label>
								</div>
							</div>
						</div>
						<div className='col-6'>
							<button className='btn degradado pb-0 pt-0'>
								<i className='fa fa-eye text-white m-0'></i>
							</button>
						</div>
					</div>
				</div>

				<div className='bg-light rounded p-3 my-2'>
					<div className='form-row'>
						<div className='col-6'>
							<div className='form-group'>
								<label htmlFor='chkScheduleState'>
									<i className='fa fa-clock' />
									<span>Horario:</span>
								</label>
								<div className='form-group'>
									<input
										type='checkbox'
										id='chkScheduleState'
										checked={employee.schedule[0].state}
										onChange={(e) =>
											setEmployee({
												...employee,
												schedule: [
													{
														state: e.target.checked,
													},
												],
											})
										}
									/>
									<label htmlFor='chkScheduleState'>
										Vigente
									</label>
								</div>
							</div>
						</div>
						<div className='col-6'>
							<div className='form-group'>
								<label htmlFor='dtScheduleStartDate'>
									<i className='fa fa-calendar-check' />
									<span>Fecha inicial:</span>
								</label>
								<input
									type='date'
									id='dtScheduleStartDate'
									className='form-control'
									value={employee.schedule[0].startDate}
									onChange={(e) =>
										setEmployee({
											...employee,
											schedule: [
												{
													startDate: e.target.value,
												},
											],
										})
									}
								/>
							</div>
						</div>
						<div className='col-6'>
							<div className='form-group'>
								<label htmlFor='dtScheduleFinishDate'>
									<i className='fa fa-calendar-times' />
									<span>Fecha final:</span>
								</label>
								<input
									type='date'
									id='dtScheduleFinishDate'
									className='form-control'
									value={employee.schedule[0].finishDate}
									onChange={(e) =>
										setEmployee({
											...employee,
											schedule: [
												{
													finishDate: e.target.value,
												},
											],
										})
									}
								/>
							</div>
						</div>
						<div className='col-6'>
							<button className='btn degradado pb-0 pt-0 '>
								<i className='fa fa-eye text-white m-0  '></i>
							</button>
						</div>
					</div>
				</div>

				<div className='card table-responsive-sm p-3 mt-3 text-center empleCard'>
					<table className='table table-hover'>
						<thead className='thead-dark '>
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
			{(props.match.params.mode != null ||
				props.match.params.cardId == null) && (
				<button
					type='button'
					id='float-button'
					onClick={() => {
						execute({
							variables: {
								input: {
									cardId: employee.cardId,
									name: employee.name,
									lastname: employee.lastname,
									birthDate: employee.birthdate,
									genre: employee.genre,
									address: employee.address,
									email: employee.email,
									phone: employee.phone,
									photoName: employee.photoName,
									state: employee.state,
								},
							},
						}).then((res) => {
							if (res) window.location.replace('/empleados');
						});
					}}
				>
					<i
						className={`fas ${
							props.match.params.mode
								? 'fa-pencil-alt'
								: 'fa-plus'
						}`}
					/>
				</button>
			)}
		</div>
	);
}
