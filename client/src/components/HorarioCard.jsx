import React from 'react';
import foto from '../recursos/perfil.jpg';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { SCHEDULE_QUERY } from '../pages/Horario';
import moment from 'moment';

const DOWN_SCHEDULE_MUTATION = gql`
	mutation DownSchedule($scheduleId: ID!) {
		downSchedule(scheduleId: $scheduleId) {
			id
		}
	}
`;

export default function HorarioCard(props) {
	const { data, showData } = props;

	const [downSchedule] = useMutation(DOWN_SCHEDULE_MUTATION);

	return (
		<div className='col-lg-3 p-3'>
			<div className='card card-licensetype'>
				<div className='card-title  text-lg-center m-0  '>
					<h3
						className='text-white pl-2 m-0'
						style={{ background: '#D5691E' }}
					>
						{data.state ? 'Vigente' : 'No vigente'}
					</h3>
				</div>
				<div className='text-center card-header m-0 '>
					<img src={foto}   alt='' className='h-50 w-50 circle m-0' />
					<div
						className='text-capitalize font-italic'
						style={{ height: '35px' }}
					>
						{`${data.employee.name} ${data.employee.lastname}`}
					</div>
				</div>
				<div className='card-body '>
					<div className='mb-2'>
						<i className='fa fa-calendar-check pr-4 pl-2'></i>
						<b>Fecha inicio</b>
						<div className='ml-5 font-italic'>
							{moment(data.startDate).format('DD/MM/YYYY')}
						</div>
					</div>
					<div className='mb-2'>
						<i className='fa fa-calendar-times pr-4 pl-2'></i>
						<b>Fecha fin</b>
						<div className='ml-5 font-italic'>
							{moment(data.finishDate).format('DD/MM/YYYY')}
						</div>
					</div>
				</div>
				<div className='card-footer d-flex justify-content-between'>
					<button
						type='button'
						title='Visualizar'
						className='degradado btn'
						data-toggle='modal'
						data-target='#frmHorarioDetalle'
						
					>
						<i className='fa fa-eye text-white'></i>
					</button>
					<button
						type='button'
						title='Modificar'
						className='degradado btn'
						data-toggle='modal'
						data-target='#frmHorario'
						onClick={showData}
					>
						<i className='fa fa-pencil-alt text-white'></i>
					</button>
					<button
						type='button'
						title='Dar de baja'
						className='degradado btn'
						onClick={() =>
							downSchedule({
								variables: { scheduleId: parseInt(data.id) },
								refetchQueries: [
									{
										query: SCHEDULE_QUERY,
									},
								],
							})
						}
					>
						<i className='fa fa-ban text-white'></i>
					</button>
					
				</div>
			</div>
		</div>
	);
}
