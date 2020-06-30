import React, { useState } from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import JustificacionCard from '../components/JustificacionCard';
import JustificacionModal from '../components/JustifcicacionModal';
import Loader from '../components/Loader';
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
	justifications: [
		{
			__typename: 'Justification',
			id: null,
			date: null,
			motive: null,
			state: null,
			attendanceId: null,
			mode: 0,
			attendance: {
				__typename: 'Attendance',
				id: null,
				date: null,
				employee: {
					__typename: 'Employee',
					name: null,
					lastname: null,
					cardId: null,
				},
			},
		},
	],
};

export default function Justificación() {
	const [selectedItem, setSelectedItem] = useState(
		initialState.justifications[0]
	);
	const [employeeCardId, setEmployeeCardId] = useState(null);
	const [search, { loading, data, error }] = useLazyQuery(
		JUSTIFICATIONS_QUERY
	);
	if (loading) return <Loader />;
	if (error) return <ErrorIcon error={error} />;
	let listJustifications = initialState;

	if (data && data.justifications) {
		listJustifications = data;
	}
	return (
		<div
			className='page-content'
			onLoad={() => {
				if (employeeCardId == null) {
					search({
						variables: null,
					});
				}
			}}
		>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1 htmlFor='' className=''>
					Justificación
				</h1>
			</div>
			<div className='  bg-dark p-3 ml-3 mr-3'>
				<form className='buscar justify-content-sm-start'>
					<div className='form-row'>
						<div className='col'>
							<input
								type='text'
								title='Buscar por empleado'
								className='form-control'
								placeholder='Ingrese DNI y presione ENTER para buscar'
								onChange={(e) =>
									setEmployeeCardId(e.target.value)
								}
								onKeyDown={(e) => {
									if (e.keyCode === 13 && !e.shiftKey) {
										e.preventDefault();
										if (e.target.value === '') {
											search({
												variables: null,
											});
										} else {
											search({
												variables: { employeeCardId },
											});
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
									setSelectedItem(Object.assign({ mode: 0 }))
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
						return (
							<JustificacionCard
								key={j.id}
								data={j}
								setData={setSelectedItem}
							/>
						);
					})}
				</div>
				<JustificacionModal justification={selectedItem} />
			</div>
		</div>
	);
}
