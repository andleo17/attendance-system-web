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

export default function PermissionCard(props) {
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
						{
							data.state === true ? 'VIGENTE' : 'NO VIGENTE'
						}
					</h3>
				</div>
				<div className='text-center card-header m-0'>
					<img src={foto} alt='' className='h-50 w-50 circle m-0' />
					<div className='text-capitalize  font-italic'>{data.employee.name} {data.employee.lastname}</div>
				</div>
				<div className='card-body '>
					<div className='mb-2'>
                        <i className='fa fa-tag pr-4 pl-2'></i>
						<b>Código</b>
						{/* <div className='ml-5'>{data.description}</div> */}
						<div className='ml-5 text-capitalize'>{data.id}</div>
					</div>
					<div className='mb-1'>
                        <i className='fa fa-calendar-alt pr-4 pl-2'></i>
						<b>Motivo</b>
					<div className='ml-5 text-justify text'>{data.motive}</div>
					</div>
                    <div className='mb-2'>
                        <i className='fa fa-calendar pr-4 pl-2'></i>
						<b>Fecha presentación</b>
						{/* <div className='ml-5'>{data.description}</div> */}
						<div className='ml-5'>{data.presentationDate}</div>
					</div>
                    <div className='mb-2'>
                        <i className='fa fa-calendar-check pr-4 pl-2'></i>
						<b>Fecha permiso</b>
						{/* <div className='ml-5'>{data.description}</div> */}
						<div className='ml-5'>{data.date}</div>
					</div>
				</div>

				<div className='card-footer d-flex justify-content-between'>
					<button
						type='button'
						title='Modificar'
						className='degradado btn'
						data-toggle='modal'
						data-target='#frmPermiso'
						onClick={() =>
							setData(Object.assign(data, { mode: 1 }))
						}
					>
						<i className='fa fa-pencil-alt text-white'></i>
					</button>
                    <button
						type='button'
						title='Dar de baja'
						className='degradado btn'
						onClick={() =>
							setData(Object.assign(data, { mode: 1 }))
						}
					>
						<i className='fa fa-ban text-white'></i>
					</button>
					<button
						type='button'
						title='Eliminar'
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
