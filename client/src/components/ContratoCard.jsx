import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import foto from '../recursos/perfil.jpg';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { CONTRACT_QUERY } from '../pages/Contrato';
import moment from 'moment';

const DOWN_CONTRACT_MUTATION = gql`
	mutation DownContract($input: ContractInput!) {
		modifyContract(input: $input) {
			id
		}
	}
`;

export default function Contrato(props) {
	const { data, setData } = props;

	const [down] = useMutation(DOWN_CONTRACT_MUTATION);

	return (
		<div className='col-sm-4 pt-3 pl-1 pr-1'>
			<div className='card card-licensetype' style={{ height: '170px' }}>
				<div className='row p-0' style={{ height: '170px' }}>
					<div className='card-header bg-light-gray col-4 d-flex flex-column justify-content-between p-0 '>
						<div className='badge-sonar'></div>
						<img
							src={foto}
							alt=''
							className=' mt-5 circle  bg-transparent h-50 w-50'
						/>
					</div>
					<div className='card-body col-6 p-0 pl-2 pt-1 '>
						<div
							className='font-italic  mb-1'
							style={{ height: '39px' }}
						>
							{`${data.employee.name} ${data.employee.lastname}`}
						</div>

						<div className='mb-2'>
							<i className='fa fa-calendar-plus pr-2'></i>
							<b>Fecha inicio</b>
							<div className='ml-4 font-italic'>
								{' '}
								{moment(data.startDate).format('DD/MM/YYYY')}
							</div>
						</div>
						<div className='mb-2'>
							<i className='fa fa-calendar-times pr-2'></i>
							<b>Fecha fin</b>
							<div className='ml-4 font-italic'>
								{' '}
								{moment(data.finishDate).format('DD/MM/YYYY')}
							</div>
						</div>
					</div>

					<div className='card-footer p-1 pl-1 pr-1   col-2 d-flex flex-column justify-content-between m-0'>
						<button
							type='button'
							className='degradado btn '
							title='Visualizar'
							data-toggle='modal'
							data-target='#frmContrato'
							onClick={() => {
								setData(0);
							}}
						>
							<i className='fa fa-eye text-white'></i>
						</button>

						<button
							type='button'
							title='Modificar'
							className='degradado btn'
							data-toggle='modal'
							data-target='#frmContrato'
							onClick={() => {
								setData(1);
							}}
						>
							<i className='fa fa-pencil-alt text-white'></i>
						</button>

						<button
							type='button'
							title='Dar de baja'
							className='degradado btn  '
							onClick={() =>
								down({
									variables: {
										input: { ...data, state: false },
									},
									refetchQueries: [
										{
											query: CONTRACT_QUERY,
										},
									],
								})
							}
						>
							<i className='fa fa-ban text-white'></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
