import React from 'react';
import foto from '../recursos/perfil.jpg';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { LIST_PERMISSION } from '../pages/Permiso';

const DELETE_PERMISSION_MUTATION = gql`
	mutation DeletePermission($permissionId: Int!) {
		deletePermission(permissionId: $permissionId) {
			id
		}
	}
`;

const DOWN_PERMISSION_MUTATION = gql`
	mutation DownPermission($permissionId: Int!) {
		downPermission(permissionId: $permissionId) {
			id
		}
	}
`;

export default function PermissionCard(props) {
	const { data, showData } = props;

	const [deletePermission] = useMutation(DELETE_PERMISSION_MUTATION);
	const [downPermission] = useMutation(DOWN_PERMISSION_MUTATION);

	return (
		<div className='col-lg-3 p-3'>
			<div className='card card-licensetype'>
				<div className='card-title  text-lg-center m-0  '>
					<h3
						className='text-white pl-2 m-0'
						style={{ background: '#D5691E' }}
					>
						{data.state ? 'VIGENTE' : 'NO VIGENTE'}
					</h3>
				</div>
				<div className='text-center card-header m-0'>
					<img src={foto} alt='' className='h-50 w-50 circle m-0' />
					<div
						className='text-capitalize  font-italic'
						style={{ height: '35px' }}
					>
						{data.employee.name} {data.employee.lastname}
					</div>
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
						<div className='ml-5 text-justify text'>
							{data.motive}
						</div>
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
						onClick={showData}
					>
						<i className='fa fa-pencil-alt text-white'></i>
					</button>
					<button
						type='button'
						title='Dar de baja'
						className='degradado btn'
						onClick={() =>
							downPermission({
								variables: { permissionId: parseInt(data.id) },
								refetchQueries: [
									{
										query: LIST_PERMISSION,
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
						className='degradado btn '
						onClick={() =>
							deletePermission({
								variables: { permissionId: parseInt(data.id) },
								refetchQueries: [
									{
										query: LIST_PERMISSION,
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
