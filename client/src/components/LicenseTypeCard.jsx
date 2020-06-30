import React from 'react';
import foto from '../recursos/licenciastrabajo1.jpg';
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
	const { data, showData } = props;

	const [mutation] = useMutation(DELETE_LICENSE_TYPE_MUTATION);

	return (
		<div className='col-lg-12 col-md-6 col-lg-4 col-xl-3 p-3'>
			<div className='card card-licensetype '>
				<div className='card-title text-lg-center m-0'>
					<h3
						className='text-white pl-2 m-0'
						style={{ background: '#D5691E' }}
					>
						<br />
					</h3>
				</div>
				<div className='text-center card-header m-0  '>
					<img
						src={foto}
						alt=''
						className='h-50 w-50  m-0 '
						style={{
							borderRadius: '10px',
							border: '2px solid black',
						}}
					/>
				</div>
				<div className='card-body  pt-0 pb-0  '>
					<div className='mb-2'>
						<i className='fa fa-tag pr-4 pl-2'></i>
						<b>Nombre</b>
						<div className='ml-5 font-italic'>
							{data.description}
						</div>
					</div>
					<div className='mb-1'>
						<i className='fa fa-calendar-alt pr-4 pl-2'></i>
						<b>Tiempo</b>
						<div className='ml-5 font-italic'>
							{data.maximumDays} días
						</div>
					</div>
				</div>
				<div className='card-footer d-flex justify-content-between'>
					<button
						type='button'
						className='degradado btn'
						title='Modificar'
						data-toggle='modal'
						data-target='#frmLicenseType'
						onClick={showData}
					>
						<i className='fa fa-pencil-alt text-white'></i>
					</button>
					<button
						type='button'
						className='degradado btn '
						title='Eliminar'
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
