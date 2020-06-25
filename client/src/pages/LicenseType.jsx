import React, { useState } from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LicenseTypeCard from '../components/LicenseTypeCard';
import LicenseTypeModal from '../components/LicenseTypeModal';

const LIST_LICENSETYPE = gql`
	query ListLicenseType {
		licenseTypes {
			description
			maximumDays
			id
		}
	}
`;

export default function LicenseType() {
	const [selectedItem, setSelectedItem] = useState({
		__typename: 'LicenseType',
		description: '',
		id: '',
		maximumDays: 0,
	});

	const { loading, data, error } = useQuery(LIST_LICENSETYPE);
	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>{error.message}</h1>;

	return (
		<div className='page-content'>
			<div className='hit-the-floor'>Tipo de licencias</div>
			<form className='d-flex mx-3'>
				<input
					type='text'
					className='form-control form-control-sm bg-transparent border 
                        border-left-0 border-right-0 border-top-0 border-danger'
					placeholder='Buscar'
				/>

				<button
					type='button'
					className='degradado border-0 ml-3'
					data-toggle='modal'
					data-target='#frmLicenseType'
				>
					NUEVO
				</button>
			</form>
			<div className='row'>
				{data.licenseTypes.map((lt) => {
					return (
						<LicenseTypeCard
							key={lt.id}
							data={lt}
							setData={setSelectedItem}
						/>
					);
				})}
			</div>
			<LicenseTypeModal licenseType={selectedItem} />
		</div>
	);
}
