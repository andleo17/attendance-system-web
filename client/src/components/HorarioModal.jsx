import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { SCHEDULE_QUERY } from '../pages/Horario';

const ADD_SCHEDULE_MUTATION = gql`
	mutation AddSchedule($input: ScheduleInput!) {
		addSchedule(input: $input) {
			id
			startDate
			finishDate
			state
			employeeCardId
			scheduleDetail{
				day
				id
				inHour
				outHour
			}
		}
	}
`;

const MODIFY_SCHEDULE_MUTATION = gql`
	mutation ModifySchedule($input: ScheduleInput!) {
		modifySchedule(input: $input) {
			id
			startDate
			finishDate
			state
			employeeCardId
			scheduleDetail{
				day
				id
				inHour
				outHour
			}
		}
	}
`;

export default function HorarioModal(props) {
	const { item, update } = props;
	let nombreC = item.employee.name + ' ' + item.employee.lastname;
	const mutation =item.id 
	? MODIFY_SCHEDULE_MUTATION 
	: ADD_SCHEDULE_MUTATION;
	const [execute] = useMutation(mutation);
	return (
		<div id='frmHorario' className='modal fade inputEmpleado' tabIndex='-1'>
			<div className='modal-dialog  modal-dialog-centered'>
				<div className='modal-content'>
					<div
						className='modal-header  text-white'
						style={{ background: '#D5691E' }}
					>
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
								<label htmlFor='txtDocument'>Documento:</label>
								<input
									id='txtDocument'
									type='text'
									className='form-control '
									value={item.employeeCardId}
									onChange={(e) =>
										update({
											...item,
											employeeCardId: e.target.value,
										})
									}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-tag pl-2'></i>
								<label htmlFor='txtNombre '>Nombre:</label>
								<input
									id='txtNombre'
									type='text'
									className='form-control bg-white'
									disabled
									value={nombreC}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-calendar-check pl-2'></i>
								<label htmlFor='txtFechaInicio'>Fecha inicio </label>
								<input
									id='txtFechaInicio'
									type='date'
									className='form-control'
									value={item.startDate}
									onChange={(e) =>
										update({
											...item,
											startDate: e.target.value,
										})
									}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-calendar-times pl-2'></i>
								<label htmlFor='txtFechaFin'>Fecha fin </label>
								<input
									id='txtFechaFin'
									type='date'
									className='form-control'
									value={item.finishDate}
									onChange={(e) =>
										update({
											...item,
											finishDate: e.target.value,
										})
									}
								/>
							</div>

							<div className='form-group'>
								<i className='fa fa-ban pl-2'></i>
								<label htmlFor='txtState'>Estado:</label>{' '}
								<br />
								<input
									id='txtState'
									type='checkbox'
									className=' ml-4'
									checked={item.state}
									onChange={(e) =>
										update({
											...item,
											state: e.target.checked,
										})
									}
								/>{' '}
								<label htmlFor=''>Vigente</label>
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
											id: parseInt(item.id),
											employeeCardId: document.getElementById(
												'txtDocument'
											).value,
											startDate: document.getElementById(
												'txtFechaInicio'
											),
											finishDate: document.getElementById(
												'txtFechaFin'
											),
											state: document.getElementById(
												'txtState'
											).checked,
											
										},
									},
									refetchQueries: [
										{ query: SCHEDULE_QUERY },
									],
								})
							}
						>
							{item.is ? 'Registrar' : 'Modificar'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
