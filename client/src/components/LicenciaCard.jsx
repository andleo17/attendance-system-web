import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import foto from '../recursos/perfil.jpg';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { LIST_LICENSETYPE } from '../pages/LicenseType';
import moment from 'moment';

const DELETE_LICENSE_TYPE_MUTATION = gql`
	mutation DeleteLicenseType($licenseTypeId: Byte!) {
		deleteLicenseType(licenseTypeId: $licenseTypeId) {
			id
			description
			maximumDays
		}
	}
`;

export default function LicenciaCard(props) {
	const { data, setData } = props;

	const [mutation] = useMutation(DELETE_LICENSE_TYPE_MUTATION);

	return (
		<div className='col-sm-4 pt-3 pl-1 pr-1' >
			<div className=''>
				<div className='card card-licensetype' style={{height:'170px'}}>
					<div className='row p-0 ' style={{height:'170px'}}>
						<div className='card-header bg-light-gray col-4 d-flex flex-column text-center justify-content-between p-0 '>
							<div htmlFor='' className='badge-sonar'></div>
							<img
								src={foto}
								alt=''
								className=' mt-5 circle mb-0 bg-transparent h-50 w-50'
							/>
							<label htmlFor='' className=' text-sistema '>
								{' '}
								<b>{data.state ? 'Vigente' : 'No vigente'}</b>
							</label>
						</div>
						<div className='card-body col-6  p-0 pl-2 pt-1'>
							<div className='font-italic  mb-1' style={{height:'39px'}}>
								{`${data.employee.name} ${data.employee.lastname}`}
							</div>
							<div className='mb-2'>
								<i className='fa fa-exclamation-triangle pr-2'></i>
								<b>Tipo</b>
								<div className='pl-4 font-italic'>
									{data.licenseType.description}
								</div>
							</div>
							<div className='mb-2'>
								<i className='fa fa-calendar pr-2'></i>
								<b>Fecha inicio</b>
								<div className='pl-4 font-italic'>
									{moment(data.startDate).format(
										'DD/MM/YYYY'
									)}
								</div>
							</div>
						</div>

						<div className='card-footer p-1 pl-1 pr-1   col-2 d-flex flex-column justify-content-around m-0'>
							<button
								type='button'
								title='Visualizar'
								className='degradado btn'
								data-toggle='modal'
								data-target='#frmJustificacion'
								onClick={() =>
									setData(Object.assign(data, { mode: 1 }))
								}
							>
								<i className='fa fa-eye text-white'></i>
							</button>

							<button
								type='button'
								title='Modificar'
								className='degradado btn'
								data-toggle='modal'
								data-target='#frmJustificacion'
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
									mutation({
										variables: {
											licenseTypeId: parseInt(data.id),
										},
										refetchQueries: [
											{
												query: LIST_LICENSETYPE,
											},
										],
									})
								}
							>
								<i className='fa fa-ban text-white'></i>
							</button>

							<button
								type='button'
								title='Eliminar'
								className='degradado btn'
								onClick={() =>
									mutation({
										variables: {
											licenseTypeId: parseInt(data.id),
										},
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
			</div>
		</div>
	);
}
