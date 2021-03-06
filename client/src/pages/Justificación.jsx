import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import JustificacionCard from '../components/JustificacionCard';
import JustificacionModal from '../components/JustifcicacionModal';
import LoadingPage from '../components/LoadingPage';
import ErrorIcon from '../components/ErrorIcon';

export const JUSTIFICATIONS_QUERY = gql`
	query ListJustifications($employeeCardId: String) {
		justifications(employeeCardId: $employeeCardId) {
			id
			date
			motive
			state
			attendanceId
			attendance {
				id
				date
				employee {
					name
					lastname
					cardId
				}
			}
		}
	}
`;
export const initialState = {
			__typename: 'Justification',
			id: '',
			date: '',
			motive: '',
			state: false,
			attendanceId: '',
			mode: 2,
			attendance: {
				__typename: 'Attendance',
				date: '',
				employee: {
					__typename: 'Employee',
					name: '',
					lastname: '',
					cardId: '',
				},
			},

};

export default function Justificación() {
	const [selectedItem, setSelectedItem] = useState(
		initialState
	);
	const [employeeCardId, setEmployeeCardId] = useState(null);
	const { loading, error, data, refetch} = useQuery(JUSTIFICATIONS_QUERY, {
		variables:  {employeeCardId},
		pollInterval: 500,
	});

	if (loading){
		return <LoadingPage employeeCardId={employeeCardId} title="Justificación"/>
	};
	if (error) return <ErrorIcon error={error} />;
	let listJustifications = initialState;

	if (data && data.justifications) {
		listJustifications = data;
	}
	return (
		<div
			className='page-content'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1>Justificación</h1>
			</div>
			<div className='  bg-dark p-3 ml-3 mr-3'>
				<form className='buscar justify-content-sm-start'>
					<div className='form-row'>
						<div className='col'>
							<input
								id='txtSearch'
								type='text'
								title='Buscar por empleado'
								className='form-control'
								maxLength='8'
								placeholder='Ingrese DNI y presione ENTER para buscar'
								defaultValue={employeeCardId}
                                onChange={(e) =>
									{
                                        if (e.target.value === '') {
                                            setEmployeeCardId(null)
                                            refetch();
										}
                                    }
								}
								onKeyDown={(e) => {
									if (e.keyCode === 13 && !e.shiftKey) {
										e.preventDefault();
										if (e.target.value === '') {
											setEmployeeCardId(null);
											refetch();
										} else {
											setEmployeeCardId(
												document.getElementById(
													'txtSearch'
												).value
											);
											refetch();
										}
									}
								}}
							/>
						</div>
						<div className=''>
							<button
								type='button'
								data-toggle='modal'
								data-target='#frmJustificacion'
								onClick={() =>
									setSelectedItem(initialState)
								}
								className='degradado d-flex h-100 align-items-center border-0 justify-content-center text-decoration-none'
							>
								<i className='fa fa-check-circle mr-1'></i>
								NUEVO
							</button>
						</div>
					</div>
				</form>
				<div className='row'>
					{listJustifications.justifications.map((j) => {
						j = Object.assign(j, { mode: 2 });
						return (
							<JustificacionCard
								key={j.id}
								data={j}
								setData={(mode) =>
									setSelectedItem({ ...j, mode })
								}
							/>
						);
					})}
				</div>
				<JustificacionModal
					justification={selectedItem}
					update={setSelectedItem}
				/>
			</div>
		</div>
	);
}
