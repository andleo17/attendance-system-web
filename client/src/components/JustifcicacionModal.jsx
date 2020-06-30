import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { JUSTIFICATIONS_QUERY } from '../pages/Justificación';
import moment from 'moment';

const ADD_LICENSE_TYPE_MUTATION = gql`
	mutation AddLicenseType($input: LicenseTypeInput!) {
		addLicenseType(input: $input) {
			id
		}
	}
`;

const MODIFY_LICENSE_TYPE_MUTATION = gql`
	mutation ModifyLicenseType($input: LicenseTypeInput!) {
		modifyLicenseType(input: $input) {
			id
		}
	}
`;

const FIND_EMPLOYEE = gql`
	query Employee($cardId: ID!) {
		employee(cardId: $cardId) {
			name
			lastname
		}
	}
`;

export default function JustificacionModal(props) {
	const { justification, update } = props;
	const mutation = justification.id
		? ADD_LICENSE_TYPE_MUTATION
		: MODIFY_LICENSE_TYPE_MUTATION;
	const [execute] = useMutation(mutation);

	const [findEmployee, { data }] = useLazyQuery(FIND_EMPLOYEE);

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
											findEmployee({
												variables: {
													cardId: e.target.value,
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
								<i className='fa fa-tag pl-2'></i>
								<label htmlFor='txtName '>Nombre:</label>
								<input
									id='txtName'
									type='text'
									className='form-control bg-white'
									defaultValue={
										justification.mode === 2
											? data &&
											  data.employee &&
											  `${data.employee.name} ${data.employee.lastname}`
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
									value={justification.attendanceId}
									readOnly={justification.mode === 0}
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
								<label htmlFor='txtAttendanceDate'>
									Fecha inasistencia:
								</label>
								<input
									id='txtAttendanceDate'
									type='date'
									className='form-control'
									onChange={(e) =>
										update({
											...justification,
											attendance: {
												date: e.target.value,
											},
										})
									}
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
								onClick={() =>
									execute({
										variables: {
											input: {
												attendanceId:
													justification.attendanceId,
												date: justification.date,
												id: justification.id,
												motive: justification.motive,
												state: justification.state,
											},
										},
										refetchQueries: [
											{ query: JUSTIFICATIONS_QUERY },
										],
									})
								}
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
