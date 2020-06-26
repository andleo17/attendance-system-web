import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import foto from '../recursos/embarazada.jpg';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { LIST_LICENSETYPE } from '../pages/LicenseType';

const DELETE_LICENSE_TYPE_MUTATION = gql`
	mutation DeleteLicenseType($licenseTypeId: Byte!) {
		deleteLicenseType(licenseTypeId: $licenseTypeId) {
			id
			description
			maximumDays
		}
	}
`;

export default function LicenseTypeCard(props) {
	const { data, setData } = props;

	const [mutation] = useMutation(DELETE_LICENSE_TYPE_MUTATION);

	return (
		<div className='col-sm-3 p-3'>
			<div className='card card-licensetype'>
				<div className='card-title text-lg-center'>
					<h3
						className='text-white pl-2'
						style={{ background: '#D5691E' }}
					>
						LICENCIA
					</h3>
				</div>
				<div className='text-center'>
					<img src={foto} alt='' className='h-50 w-50' />
				</div>
				<div className='card-body '>
					<div className='mb-2'>
                        <i className='fa fa-tag pr-4 pl-2'></i>
						<b>Nombre</b>
						<div className='ml-5'>{data.description}</div>
					</div>
					<div className='mb-1'>
                        <i className='fa fa-calendar-alt pr-4 pl-2'></i>
						<b>Tiempo</b>
						<div className='ml-5'>{data.maximumDays} días</div>
					</div>
				</div>
				<div className='card-footer d-flex justify-content-between'>
					<button
						type='button'
						className='degradado btn'
						data-toggle='modal'
						data-target='#frmLicenseType'
						onClick={() =>
							setData(Object.assign(data, { mode: 1 }))
						}
					>
						<i className='fa fa-pencil-alt text-white'></i>
					</button>
					<button
						type='button'
						className='degradado btn ' 
						onClick={() =>
							mutation({
								variables: { licenseTypeId: parseInt(data.id) },
								refetchQueries: [
									{
										query: LIST_LICENSETYPE,
									},
								],
							})
						}
					>
						<i className='fa fa-trash-alt text-white'></i>
					</button>
				</div>
			</div>
		</div>
	);
}
