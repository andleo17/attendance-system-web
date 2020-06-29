import React, { useState } from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { NavLink } from 'react-router-dom';
import UsuarioCard from '../components/UsuarioCard';
import UsuarioModal from '../components/UsuarioModal';
import LicenciaCard from '../components/LicenciaCard';
import LicenciaModal from '../components/LicenciaModal';
import Loader from '../components/Loader';
import ErrorIcon from '../components/ErrorIcon';

export const LICENSES_QUERY = gql`
	query Licenses {
		licenses {
			id
			startDate
			state
			licenseType {
				description
			}
			employee {
				name
				lastname
			}
		}
	}
`;

export default function Usuario() {
	const initialState = {
		__typename: 'Contract',
		description: null,
		id: null,
		maximumDays: null,
		mode: 0,
	};
	const [selectedItem, setSelectedItem] = useState(initialState);

	const { loading, data, error } = useQuery(LICENSES_QUERY);
	if (loading) return <Loader />;
	if (error) return <ErrorIcon error={error} />;

	return (
		<div className='page-content'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1 htmlFor='' className=''>
					Licencias
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
								data-target='#frmJustificacion'
								className='degradado d-flex h-100 align-items-center border-0 justify-content-center text-decoration-none'
							>
								<i className='fa fa-file-word mr-1'></i>
								NUEVO
							</button>
						</div>
					</div>
				</form>
				<div className='row'>
					{data.licenses.map((lt) => {
						return (
							<LicenciaCard
								key={lt.id}
								data={lt}
								setData={setSelectedItem}
							/>
						);
					})}
				</div>
				<LicenciaModal licenseType={selectedItem} />
			</div>
		</div>
	);
}
