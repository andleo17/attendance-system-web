import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LicenseTypeCard from '../components/LicenseTypeCard';
import LicenseTypeModal from '../components/LicenseTypeModal';
import Loader from '../components/Loader';
import ErrorIcon from '../components/ErrorIcon';

export const LIST_LICENSETYPE = gql`
	query ListLicenseType {
		licenseTypes {
			description
			maximumDays
			id
		}
	}
`;

const initialState = {
	__typename: 'LicenseType',
	id: '',
	description: '',
	maximumDays: 0,
};

export default function LicenseType() {
	const [selectedItem, setSelectedItem] = useState(initialState);
	const { loading, data, error } = useQuery(LIST_LICENSETYPE);
	if (loading) return <Loader />;
	if (error) return <ErrorIcon error={error} />;

	return (
		<div className='page-content'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1>Tipo de licencia</h1>
			</div>
			<div className='  bg-dark p-3 ml-3 mr-3'>
				<form className='buscar justify-content-sm-start'>
					<div className='form-row'>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								placeholder='Buscar'
								title='Buscar un tipo de licencia por nombre'
							/>
						</div>
						<div className=''>
							<button
								type='button'
								data-toggle='modal'
								data-target='#frmLicenseType'
								className='degradado d-flex h-100 align-items-center border-0 justify-content-center text-decoration-none'
								onClick={() => setSelectedItem(initialState)}
							>
								<i className='fa fa-plus mr-1'></i>
								NUEVA
							</button>
						</div>
					</div>
				</form>
				<div className='row'>
					{data.licenseTypes.map((lt) => {
						return (
							<LicenseTypeCard
								key={lt.id}
								data={lt}
								showData={() => setSelectedItem(lt)}
							/>
						);
					})}
				</div>
				<LicenseTypeModal
					item={selectedItem}
					update={setSelectedItem}
				/>
			</div>
		</div>
	);
}
