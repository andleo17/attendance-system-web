import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import ContratoCard from '../components/ContratoCard';
import ContratoModal from '../components/ContratoModal';
import Loader from '../components/Loader';
import ErrorIcon from '../components/ErrorIcon';

export const CONTRACT_QUERY = gql`
	query Contracts {
		contracts {
			id
			startDate
			finishDate
			mount
			state
			extraHours
			employeeCardId
			employee {
				name
				lastname
			}
		}
	}
`;

const initialState = {
	__typename: 'Contract',
	id: '',
	startDate: '',
	finishDate: '',
	mount: 0,
	state: false,
	extraHours: false,
	employeeCardId: '',
	employee: {
		name: '',
		lastname: '',
	},
	mode: 2,
};

export default function Contrato() {
	const [selectedItem, setSelectedItem] = useState(initialState);

	const { loading, data, error } = useQuery(CONTRACT_QUERY);
	if (loading) return <Loader />;
	if (error) return <ErrorIcon error={error} />;

	return (
		<div className='page-content'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1>Contrato</h1>
			</div>
			<div className='bg-dark p-3 ml-3 mr-3'>
				<form className='buscar justify-content-sm-start'>
					<div className='form-row'>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								title='Buscar contrato por empleado'
								placeholder='Buscar'
							/>
						</div>
						<div className=''>
							<button
								type='button'
								data-toggle='modal'
								data-target='#frmContrato'
								className='degradado d-flex h-100 align-items-center border-0 justify-content-center text-decoration-none'
								onClick={() => setSelectedItem(initialState)}
							>
								<i className='fa fa-file-archive mr-1'></i>
								NUEVO
							</button>
						</div>
					</div>
				</form>
				<div className='row'>
					{data.contracts.map((c) => {
						c = Object.assign(c, { mode: 0 });
						return (
							<ContratoCard
								key={c.id}
								data={c}
								setData={(mode) =>
									setSelectedItem({ ...c, mode })
								}
							/>
						);
					})}
				</div>
				<ContratoModal item={selectedItem} update={setSelectedItem} />
			</div>
		</div>
	);
}
