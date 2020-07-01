import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import HorarioCard from '../components/HorarioCard';
import HorarioModal from '../components/HorarioModal';
import HorarioDetalleModal from '../components/HorarioDetalleModal';
import Loader from '../components/Loader';
import ErrorIcon from '../components/ErrorIcon';

export const SCHEDULE_QUERY = gql`
	query Schedules {
		schedules {
			id
			startDate
			finishDate
			state
			employeeCardId
			employee {
				name
				lastname
				photo
			}
			scheduleDetail{
				day
				id
				inHour
				outHour
			}
		}
	}
`;


export const initialState = {
	__typename: 'Schedule',
	id: '',
	startDate: '',
	finishDate: '',
	state: '',
	employeeCardId: '',
	employee: {
		__typename: 'Employee',
		name: '',
		lastname: '',
	}
};

export default function Horario() {

	const [selectedItem, setSelectedItem] = useState(initialState);
	const { loading, data, error } = useQuery(SCHEDULE_QUERY);
	if (loading) return <Loader />;
	if (error) return <ErrorIcon error={error} />;

	return (
		<div className='page-content'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1 htmlFor='' className=''>
					Horarios
				</h1>
			</div>
			<div className='  bg-dark p-3 ml-3 mr-3'>
				<form className='buscar justify-content-sm-start'>
					<div className='form-row'>
						<div className='col'>
							<input
								type='text'
								title='Buscar por empleado'
								className='form-control'
								maxLength='8'
								placeholder='Ingrese DNI y presione ENTER para buscar'
							/>
						</div>
						<div className=''>
							<button
								type='button'
								data-toggle='modal'
								data-target='#frmHorario'
								onClick={() =>
									setSelectedItem(initialState)
								}
								className='degradado d-flex h-100 align-items-center border-0 justify-content-center text-decoration-none'
							>
								<i className='fa fa-calendar-plus mr-1'></i>
								NUEVO
							</button>
						</div>
					</div>
				</form>
				<div className='row'>
					{data.schedules.map((s) => {
						return (
							<HorarioCard
								key={s.id}
								data={s}
								showData={() => setSelectedItem(s)}
							/>
						);
					})}
				</div>
				<HorarioModal item={selectedItem} update={setSelectedItem} />
				<HorarioDetalleModal schedules={selectedItem} />
			</div>
		</div>
	);
}
