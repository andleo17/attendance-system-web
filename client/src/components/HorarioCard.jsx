import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import foto from '../recursos/perfil.jpg';
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

export default function HorarioCard(props) {
	const { data, setData } = props;

	const [mutation] = useMutation(DELETE_LICENSE_TYPE_MUTATION);

	return (
		<div className='col-sm-3 p-3'>
			<div className='card card-licensetype'>
				<div className='card-title  text-lg-center m-0  '>
					<h3
						className='text-white pl-2 m-0'
						style={{ background: '#D5691E' }}
					>
						Vigente
					</h3>
				</div>
				<div className='text-center card-header m-0'>
					<img src={foto} alt='' className='h-50 w-50 circle m-0' />
					<div className='ext-capitalize font-italic'>Paola Cieza Bances</div>
				</div>
				<div className='card-body '>
					
                    <div className='mb-2'>
                        <i className='fa fa-calendar-check pr-4 pl-2'></i>
						<b>Fecha inicio</b>
						{/* <div className='ml-5'>{data.description}</div> */}
						<div className='ml-5 font-italic'>12/12/12</div>
					</div>
                    <div className='mb-2'>
                        <i className='fa fa-calendar-times pr-4 pl-2'></i>
						<b>Fecha fin</b>
						{/* <div className='ml-5'>{data.description}</div> */}
						<div className='ml-5 font-italic'>20/12/20</div>
					</div>
				</div>
				<div className='card-footer d-flex justify-content-between'>
					<button
						type='button'
						className='degradado btn'
						data-toggle='modal'
						data-target='#frmHorarioDetalle'
						onClick={() =>
							setData(Object.assign(data, { mode: 1 }))
						}
					>
						<i className='fa fa-eye text-white'></i>
					</button>
                    <button
						type='button'
						className='degradado btn'
						data-toggle='modal'
						data-target='#frmHorario'
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
							setData(Object.assign(data, { mode: 1 }))
						}
					>
						<i className='fa fa-ban text-white'></i>
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
