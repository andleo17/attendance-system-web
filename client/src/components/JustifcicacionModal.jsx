import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { JUSTIFICATIONS_QUERY } from '../pages/Justificación';
import moment from 'moment';

const ADD_JUSTIFICATION_MUTATION = gql`
	mutation AddJustification($input: JustificationInput!) {
		addJustification(input: $input) {
			id
		}
	}
`;

const MODIFY_JUSTIFICATION_MUTATION = gql`
	mutation ModifyJustification($input: JustificationInput!) {
		modifyJustification(input: $input) {
			id
		}
	}
`;

const FIND_DELAY = gql`
	query Delay($cardId: String!, $date: Date!) {
		attendancesDate(employeeCardId: $cardId, dateAttendance: $date) {
			id
			date
			employee {
				name
				lastname
			}
		}
	}
`;

export default function JustificacionModal(props) {
	const { justification, update } = props;
	const mutation = justification.id
		? MODIFY_JUSTIFICATION_MUTATION
		: ADD_JUSTIFICATION_MUTATION;
	const [execute] = useMutation(mutation);

	// const [findEmployee, { data }] = useLazyQuery(FIND_EMPLOYEE);

	const [findDelay, { data }] = useLazyQuery(FIND_DELAY);

	return (
		<div
			id='frmJustificacion'
			className='modal fade inputEmpleado'
			tabIndex='-1'
		>
			<div className='modal-dialog  modal-dialog-centered'>
				<div className='modal-content'>
					<div
						className='modal-header   text-white'
						style={{ background: '#D5691E' }}
					>
						<h5 className='modal-title'>Nueva justificación</h5>
						<button
							type='button'
							className='close text-white'
							data-dismiss='modal'
						>
							<span>&times;</span>
						</button>
					</div>
					<div className='modal-body pt-0 '>
						<form>
							<div className='form-group'>
								<i className='fa fa-id-card pl-2'></i>
								<label htmlFor='txtCardId'>Documento:</label>
								<input
									id='txtCardId'
									type='text'
									className='form-control '
									onChange={(e) =>
										update({
											...justification,
											attendance: {
												employee: {
													cardId: e.target.value,
												},
											},
										})
									}
									onKeyUp={(e) => {
										if (e.key === 'Enter') {
											findDelay({
												variables: {
													cardId: e.target.value,
													date: document.getElementById(
														'txtAttendanceDate'
													).value,
												},
											});
										}
									}}
									value={
										justification.attendance.employee.cardId
									}
									readOnly={
										justification.mode === 0 ||
										justification.id
									}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-exclamation-triangle pl-2'></i>
								<label htmlFor='txtAttendanceDate'>
									Fecha inasistencia:
								</label>
								<input
									id='txtAttendanceDate'
									type='date'
									className='form-control'
									onChange={(e) => {
										update({
											...justification,
											attendance: {
												date: e.target.value,
												employee: {
													cardId:
														justification.attendance
															.employee.cardId,
													name:
														justification.attendance
															.employee.name,
													lastname:
														justification.attendance
															.employee.lastname,
												},
											},
										});
										findDelay({
											variables: {
												cardId:
													justification.attendance
														.employee.cardId,
												date: e.target.value,
											},
										});
									}}
									value={
										justification.attendance.date &&
										moment(
											justification.attendance.date
										).format('YYYY-MM-DD')
									}
									readOnly={justification.mode === 0}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-tag pl-2'></i>
								<label htmlFor='txtName '>Nombre:</label>
								<input
									id='txtName'
									type='text'
									className='form-control bg-white'
									defaultValue={
										justification.mode === 2
											? data &&
											  data.attendancesDate &&
											  `${data.attendancesDate.employee.name} ${data.attendancesDate.employee.lastname}`
											: `${justification.attendance.employee.name} ${justification.attendance.employee.lastname}`
									}
									readOnly
								/>
							</div>

							<div className='form-group'>
								<i className='fa fa-exclamation-triangle pl-2'></i>
								<label htmlFor='txtAttendanceId'>
									Código asistencia:
								</label>
								<input
									id='txtAttendanceId'
									type='text'
									className='form-control'
									onChange={(e) =>
										update({
											...justification,
											attendanceId: e.target.value,
										})
									}
									// value={justification.attendanceId}
									defaultValue={
										justification.mode === 2
											? data &&
											  data.attendancesDate &&
											  `${data.attendancesDate.id}`
											: `${justification.attendanceId}`
									}
									readOnly
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-exclamation-triangle pl-2'></i>
								<label htmlFor='txtMotive'>Motivo:</label>
								<input
									id='txtMotive'
									type='text'
									className='form-control'
									onChange={(e) =>
										update({
											...justification,
											motive: e.target.value,
										})
									}
									value={justification.motive}
									readOnly={justification.mode === 0}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-exclamation-triangle pl-2'></i>
								<label htmlFor='txtDate'>
									Fecha justificación:
								</label>
								<input
									id='txtDate'
									type='date'
									className='form-control bg-transparent'
									value={
										justification.id
											? moment(justification.date).format(
													'YYYY-MM-DD'
											  )
											: moment(Date()).format(
													'YYYY-MM-DD'
											  )
									}
									readOnly
								/>
							</div>

							<div className='form-group'>
								<i className='fa fa-ban pl-2'></i>
								<label htmlFor='chkState'>Estado:</label> <br />
								<input
									id='chkState'
									type='checkbox'
									className=' ml-4'
									onChange={(e) =>
										update({
											...justification,
											state: e.target.checked,
										})
									}
									checked={justification.state}
									disabled={justification.mode === 0}
								/>
								<label htmlFor='chkState'>Vigente</label>
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
						{(justification.mode === 1 ||
							justification.mode === 2) && (
							<button
								type='button'
								className='btn degradado text-white'
								data-dismiss='modal'
								onClick={() => {
									execute({
										variables: {
											input: {
												attendanceId: document.getElementById(
													'txtAttendanceId'
												).value,
												date: document.getElementById(
													'txtDate'
												).value,
												id: parseInt(justification.id),
												motive: document.getElementById(
													'txtMotive'
												).value,
												state: document.getElementById(
													'chkState'
												).checked,
											},
										},
										refetchQueries: [
											{
												query: JUSTIFICATIONS_QUERY,
												variables: {},
											},
										],
										awaitRefetchQueries: true,
									});
									// window.location.reload(true);
								}}
							>
								{justification.id ? 'Modificar' : 'Registrar'}
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
