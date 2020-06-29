import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import foto from '../recursos/perfil.jpg';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { LIST_LICENSETYPE } from '../pages/LicenseType';
import moment from 'moment';
import { JUSTIFICATIONS_QUERY } from '../pages/Justificación';

const DELETE_LICENSE_TYPE_MUTATION = gql`
	mutation DeleteLicenseType($licenseTypeId: Byte!) {
		deleteLicenseType(licenseTypeId: $licenseTypeId) {
			id
			description
			maximumDays
		}
	}
`;

export default function JustificationCard(props) {
	const { data, setData } = props;

	const [mutation] = useMutation(DELETE_LICENSE_TYPE_MUTATION);

	return (
		<div className='col-sm-4 pt-3 pl-1 pr-1'>
			<div className=''>
				<div className='card card-licensetype'>
					<div className='row p-0 '>
						<div className='card-header bg-light-gray col-4 d-flex flex-column text-center justify-content-between p-0 '>
							<div htmlFor='' className='badge-sonar'></div>
							<img
								src={foto}
								alt=''
								className=' mt-5 circle mb-0 bg-transparent h-50 w-50'
							/>
							<label htmlFor='' className=' text-sistema '>
								{' '}
								<b> {data.state ? 'Vigente' : 'No vigente'}</b>
							</label>
						</div>
						<div className='card-body col-6  p-0 pl-2 pt-1'>
							<div className='font-italic  mb-1'>
								{`${data.attendance.employee.name} ${data.attendance.employee.lastname}`}
							</div>
							<div className='mb-2'>
								<i className='fa fa-exclamation-triangle pr-2'></i>
								<b>Código asistencia</b>
								<div className='pl-4 font-italic'>
									{' '}
									{data.attendance.id}
								</div>
							</div>
							<div className='mb-2'>
								<i className='fa fa-calendar pr-2'></i>
								<b>Fecha</b>
								<div className='pl-4 font-italic'>
									{moment(data.date).format('DD/MM/YYYY')}
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
											justificationId: parseInt(data.id),
										},
										refetchQueries: [
											{
												query: JUSTIFICATIONS_QUERY,
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
