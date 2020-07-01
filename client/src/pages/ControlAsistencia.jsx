import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import ControlAsistenciaCard from '../components/ControlAsistenciaCard';
import Loader from '../components/Loader';
import ErrorIcon from '../components/ErrorIcon';

export const ATTENDANCES_QUERY = gql`
query Attendances{
	attendances{
	  inHour
	  outHour
	  employee{
		  name
		lastname
	  }
	}
  }
`;

export default function ControlAsistencia() {
	const initialState = {
		__typename: 'Contract',
		description: null,
		id: null,
		maximumDays: null,
		mode: 0,
	};
	const [setSelectedItem] = useState(initialState);
	const { loading, data, error } = useQuery(ATTENDANCES_QUERY);
	if (loading) return <Loader />;
	if (error) return <ErrorIcon error={error} />;

	return (
		<div className='page-content'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1 htmlFor='' className=''>
					Control diario de asistencia
				</h1>
			</div>
			<div className='  bg-dark p-3 ml-3 mr-3'>
				<form className='buscar justify-content-sm-start'>
					<div className='form-row'>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='Buscar'
							/>
						</div>
					</div>
				</form>
				<div className='row'>
					{data.attendances.map((ca) => {
						return (
							<ControlAsistenciaCard
								key={ca.id}
								data={ca}
								showData={() => setSelectedItem(ca)}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
