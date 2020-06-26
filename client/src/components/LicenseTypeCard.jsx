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
			<div className='card'>
				<div className='card-title text-lg-center'>
					<h3
						className='text-white'
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
						<b>Nombre</b>
						<div>{data.description}</div>
					</div>
					<div className='mb-1'>
						<b>Tiempo</b>
						<div>{data.maximumDays} días</div>
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
						className='degradado btn'
						onClick={() =>
							mutation({
								variables: { licenseTypeId: parseInt(data.id) },
								update: (store) => {
									const { licenseTypes } = store.readQuery({
										query: LIST_LICENSETYPE,
									});
									licenseTypes.splice(
										licenseTypes.findIndex(
											(lt) => lt.id === data.id
										),
										1
									);
									store.writeQuery({
										query: LIST_LICENSETYPE,
										data: { licenseTypes },
									});
								},
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
