import React from 'react';
import foto from '../recursos/perfil.jpg';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const ADD_ATTENDANCE = gql`
	mutation AddAttendance($cardId: ID!) {
		addAttendance(employeeCardId: $cardId) {
			id
		}
	}
`;

export default function ControlAsistenciaCard(props) {
	const { data } = props;

	const [addAttendance] = useMutation(ADD_ATTENDANCE);

	return (
		<div className='col-lg-4 pt-3 pl-1 pr-1'>
			<div className=''>
				<div
					className='card card-licensetype'
					style={{ height: '100%' }}
				>
					<div className='row p-0 ' style={{ height: '100%' }}>
						<div className='card-header bg-light-gray col-4 d-flex flex-column justify-content-between p-0 '>
							<div htmlFor='' className='badge-sonar'></div>
							<img
								src={foto}
								alt=''
								className=' mt-5 circle  bg-transparent h-50 w-50'
							/>
						</div>
						<div className='card-body col-6 p-0 pl-2 pt-1 '>
							<div className='font-italic  mb-1'>
								{`${data.schedule.employee.name} ${data.schedule.employee.lastname}`}
							</div>

							<div className='mb-2'>
								<i className='fa fa-clock pr-2'></i>
								<b>Hora entrada</b>
								<div className='ml-4 font-italic'>
									<label htmlFor='' className='mr-2'>
										{' '}
										{data.inHour}
									</label>{' '}
									-
									<label htmlFor='' className='ml-2'>
										....
									</label>
								</div>
							</div>
							<div className='mb-2'>
								<i className='fa fa-clock pr-2'></i>
								<b>Hora salida</b>
								<div className='ml-4 font-italic'>
									<label htmlFor='' className='mr-2'>
										{' '}
										{data.outHour}
									</label>{' '}
									-
									<label htmlFor='' className='ml-2'>
										....
									</label>
								</div>
							</div>
						</div>

						<div className='card-footer p-1 pl-1 pr-1   col-2 d-flex flex-column justify-content-around m-0'>
							<button
								type='button'
								className='degradado btn p-1'
								title='Marca entrada'
								onClick={
									()=>{
										addAttendance({
											variables: {
												cardId: data.schedule.employee.cardId,
											}
										})
									}
								}
							>
								<i className='fa fa-outdent text-white'></i>
							</button>

							<button
								type='button'
								className='degradado btn  p-1'
								title='Marca salida'
							>
								<i className='fa fa-indent text-white'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
