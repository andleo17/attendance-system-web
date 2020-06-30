import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { CONTRACT_QUERY } from '../pages/Contrato'

const ADD_CONTRACT_MUTATION = gql`
	mutation AddContract($input: ContractInput!) {
		addContract(input: $input) {
			id
			starDate
			finisdDate
			Mount
			State
			ExtraHours
			EmployeeCardId
			employee {
				name
				lastname
			}
		}
	}
`;

const MODIFY_CONTRACT_MUTATION = gql`
	mutation ModifyContract($input: ContractInput!) {
		modifyContract(input: $input) {
			id
			starDate
			finisdDate
			Mount
			State
			ExtraHours
			EmployeeCardId
			employee {
				name
				lastname
			}
		}
	}
`;

export default function ContractModal(props) {
	const { contract } = props;
	const mutation =
		contract.mode === 0
			? ADD_CONTRACT_MUTATION
			: MODIFY_CONTRACT_MUTATION;
	const [execute] = useMutation(mutation);
	return (
		<div id='frmContrato' className='modal fade inputEmpleado' tabIndex='-1'>
			<div className='modal-dialog  modal-dialog-centered'>
				<div className='modal-content'>
					<div className='modal-header  text-white' style={{ background: '#D5691E' }}>
						<h5 className='modal-title'>Nuevo contrato</h5>
						<button
							type='button'
							className='close text-white'
							data-dismiss='modal'
						>
							<span>&times;</span>
						</button>
					</div>
					<div className='modal-body '>
						<form>
							<div className='form-group'>
								<i className='fa fa-id-card pl-2'></i>
								<label htmlFor='txtName'>Documento:</label>
								<input
									id='txtName'
									type='text'
									className='form-control '
									onChange={(e) =>
										(contract.EmployeeCardId =
											e.target.value)
									}
									defaultValue={contract.EmployeeCardId}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-tag pl-2'></i>
								<label htmlFor='txtTiempo'>Nombre:</label>
								<input
									id='txtTiempo'
									type='text'
									className='form-control bg-white' disabled
								// onChange={(e) =>
								// 	(licenseType.maximumDays =
								// 		e.target.value)
								// }
								// defaultValue={contract.maximumDays}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-calendar-check pl-2'></i>
								<label htmlFor='txtTiempo'>Fecha inicio:</label>
								<input
									id='txtTiempo'
									type='date'
									className='form-control'
									onChange={(e) =>
										(contract.starDate =
											e.target.value)
									}
									defaultValue={contract.starDate}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-calendar-times pl-2'></i>
								<label htmlFor='txtTiempo'>Fecha fin:</label>
								<input
									id='txtTiempo'
									type='date'
									className='form-control'
									onChange={(e) =>
										(contract.finisdDate =
											e.target.value)
									}
									defaultValue={contract.finisdDate}
								/>

							</div>
							<div className='form-group'>
								<i className='fa fa-money-bill-alt pl-2'></i>
								<label htmlFor='txtTiempo'>Monto:</label>
								<input
									id='txtTiempo'
									type='number'
									className='form-control'
									onChange={(e) =>
										(contract.Mount =
											e.target.value)
									}
									defaultValue={contract.Mount}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-ban pl-2'></i>
								<label htmlFor='txtTiempo'>Horas extras:</label> <br />
								<input
									id='txtTiempo'
									type='checkbox'
									className='ml-4'
									onChange={(e) =>
										(contract.State =
											e.target.value)
									}
									defaultValue={contract.State}
								/> <label htmlFor=""
									onChange={(e) =>
										(contract.ExtraHours =
											e.target.value)
									}
									defaultValue={contract.ExtraHours}
								>Sí</label>
							</div>
							<div className='form-group'>
								<i className='fa fa-ban pl-2'></i>
								<label htmlFor='txtTiempo'>Estado:</label> <br />
								<input
									id='txtTiempo'
									type='checkbox'
									className='ml-4'
									onChange={(e) =>
										(contract.State =
											e.target.value)
									}
									defaultValue={contract.State}
								/> <label htmlFor=""
									onChange={(e) =>
										(contract.State =
											e.target.value)
									}
									defaultValue={contract.State}
								>Vigente</label>
							</div>
						</form>
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-dismiss='modal'
						>
							Cerrar
						</button>
						<button
							type='button'
							className='btn degradado text-white'
							onClick={() =>
								execute({
									variables: {
										input: {
											id: parseInt(contract.id),
											starDate:contract.starDate,
											finisdDate: contract.finisdDate,
											Mount: contract.Mount,
											State:  contract.State,
											ExtraHours: contract.ExtraHours,
											EmployeeCardId:  contract.EmployeeCardId
										},
									},
									refetchQueries: [
										{ query: CONTRACT_QUERY },
									],
								})
							}
						>
							xd
							{contract.mode === 0 ? 'Registrar' : 'Modificar'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
