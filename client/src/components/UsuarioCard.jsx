import React from 'react';
import foto from '../recursos/perfil.jpg';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { USERS_QUERY } from '../pages/Usuario';

const DELETE_USER_MUTATION = gql`
	mutation DownUser($userId: ID!) {
		downUser(userId: $userId) {
			id
		}
	}
`;

export default function UsuarioCard(props) {
	const { data, showData } = props;

	const [downUser] = useMutation(DELETE_USER_MUTATION);

	return (
		<div className='col-lg-4 pt-3 pl-1 pr-1'>
			<div
				className='card card-licensetype h-100'
				style={{ height: '100%' }}
			>
				<div className='row p-0 h-100' style={{ height: '100%' }}>
					<div className='card-header bg-light-gray col-4 d-flex flex-column text-center justify-content-between p-0 '>
						<div htmlFor='' className='badge-sonar'></div>
						<img
							src={foto}
							className=' mt-5 circle mb-0 bg-transparent h-50 w-50'
						/>
						<label htmlFor='' className=' text-sistema '>
							{' '}
							<b>{data.state ? 'Vigente' : 'No vigente'}</b>
						</label>
					</div>
					<div className='card-body col-6  p-0 pl-2 pt-1'>
						<div className='font-italic  mb-1'>
							{`${data.employee.name} ${data.employee.lastname}`}
						</div>
						<div className='mb-2'>
							<i className='fa fa-user-circle pr-2'></i>
							<b>Usuario</b>
							<div className='pl-4 font-italic'> {data.name}</div>
						</div>
						<div className='mb-2'>
							<i className='fa fa-key pr-2'></i>
							<b>Contraseña</b>
							<div className='pl-4 font-italic'>
								{data.password}
							</div>
						</div>
					</div>

					<div className='card-footer p-1 pl-1 pr-1   col-2 d-flex flex-column justify-content-around m-0'>
						<button
							type='button'
							title='Modificar'
							className='degradado btn p-1'
							data-toggle='modal'
							data-target='#frmContrato'
							onClick={showData}
						>
							<i className='fa fa-pencil-alt text-white'></i>
						</button>

						<button
							type='button'
							title='Eliminar'
							className='degradado btn p-1 '
							onClick={() =>
								downUser({
									variables: { userId: parseInt(data.id) },
									refetchQueries: [
										{
											query: USERS_QUERY,
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
	);
}
