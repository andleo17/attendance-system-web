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
			employee {
				name
				lastname
			}
		}
	}
`;

export default function Horario() {
	const initialState = {
		__typename: 'Schedule',
		description: null,
		id: null,
		maximumDays: null,
		mode: 0,
	};
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
								placeholder='Buscar'
							/>
						</div>
						<div className=''>
							<button
								type='button'
								data-toggle='modal'
								data-target='#frmHorario'
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
								setData={setSelectedItem}
							/>
						);
					})}
				</div>
				<HorarioModal licenseType={selectedItem} />
				<HorarioDetalleModal licenseType={selectedItem} />
			</div>
		</div>
	);
}
