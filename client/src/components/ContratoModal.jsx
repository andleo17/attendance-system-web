import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { CONTRACT_QUERY } from '../pages/Contrato';
import moment from 'moment';

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
	const { item, update } = props;
	const mutation = item.id ? MODIFY_CONTRACT_MUTATION : ADD_CONTRACT_MUTATION;
	const [execute] = useMutation(mutation);
	return (
		<div
			id='frmContrato'
			className='modal fade inputEmpleado'
			tabIndex='-1'
		>
			<div className='modal-dialog  modal-dialog-centered'>
				<div className='modal-content'>
					<div
						className='modal-header  text-white'
						style={{ background: '#D5691E' }}
					>
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
									value={item.employeeCardId}
									onChange={(e) =>
										update({
											...item,
											employeeCardId: e.target.value,
										})
									}
									readOnly={item.mode === 0 || item.id}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-tag pl-2'></i>
								<label htmlFor='txtEmployee'>Nombre:</label>
								<input
									id='txtEmployee'
									type='text'
									className='form-control bg-white'
									value={`${item.employee.name} ${item.employee.lastname}`}
									readOnly
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-calendar-check pl-2'></i>
								<label htmlFor='txtDateI'>Fecha inicio:</label>
								<input
									id='txtDateI'
									type='date'
									className='form-control'
									value={moment(item.startDate).format(
										'YYYY-MM-DD'
									)}
									onChange={(e) =>
										update({
											...item,
											startDate: e.target.value,
										})
									}
									readOnly={item.mode === 0}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-calendar-times pl-2'></i>
								<label htmlFor='txtDateF'>Fecha fin:</label>
								<input
									id='txtDateF'
									type='date'
									className='form-control'
									value={moment(item.finishDate).format(
										'YYYY-MM-DD'
									)}
									onChange={(e) =>
										update({
											...item,
											finishDate: e.target.value,
										})
									}
									readOnly={item.mode === 0}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-money-bill-alt pl-2'></i>
								<label htmlFor='txtMount'>Monto:</label>
								<input
									id='txtMount'
									type='number'
									className='form-control'
									value={item.mount}
									onChange={(e) =>
										update({
											...item,
											mount: e.target.value,
										})
									}
									readOnly={item.mode === 0}
								/>
							</div>
							<div className='form-group'>
								<i className='fa fa-ban pl-2'></i>
								<label htmlFor='chkExtraHours'>
									Horas extras:
								</label>
								<input
									id='chkExtraHours'
									type='checkbox'
									className='ml-4'
									checked={item.extraHours}
									onChange={(e) =>
										update({
											...item,
											extraHours: e.target.checked,
										})
									}
									disabled={item.mode === 0}
								/>
								<label htmlFor='chkExtraHours'>Sí</label>
							</div>
							<div className='form-group'>
								<i className='fa fa-ban pl-2'></i>
								<label htmlFor='chkState'>Estado:</label>
								<br />
								<input
									id='chkState'
									type='checkbox'
									className='ml-4'
									checked={item.state}
									onChange={(e) =>
										update({
											...item,
											state: e.target.checked,
										})
									}
									disabled={item.mode === 0}
								/>
								<label htmlFor='chkState'>Vigente</label>
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
						{(item.mode === 1 || item.mode === 2) && (
							<button
								type='button'
								className='btn degradado text-white'
								onClick={() =>
									execute({
										variables: {
											input: {
												id: parseInt(item.id),
												starDate: item.startDate,
												finisdDate: item.finishDate,
												mount: item.mount,
												state: item.state,
												extraHours: item.extraHours,
												employeeCardId:
													item.employeeCardId,
											},
										},
										refetchQueries: [
											{ query: CONTRACT_QUERY },
										],
									})
								}
							>
								{item.id ? 'Modificar' : 'Registrar'}
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
