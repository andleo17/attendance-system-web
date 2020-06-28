import React, { useState } from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { NavLink } from 'react-router-dom';
import ControlAsistenciaCard from '../components/ControlAsistenciaCard'

export const LIST_LICENSETYPE = gql`
	query ListLicenseType {
		licenseTypes {
			description
			maximumDays
			id
		}
	}
`;

export default function Contrato() {
	const initialState = {
		__typename: 'Contract',
		description: null,
		id: null,
		maximumDays: null,
		mode: 0,
	};
	const [selectedItem, setSelectedItem] = useState(initialState);

	const { loading, data, error } = useQuery(LIST_LICENSETYPE);
	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>{error.message}</h1>;

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
					{data.licenseTypes.map((lt) => {
						return (
							<ControlAsistenciaCard
								key={lt.id}
								data={lt}
								setData={setSelectedItem}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
