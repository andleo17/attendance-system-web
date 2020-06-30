import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import ErrorIcon from '../components/ErrorIcon';
import ContentAttendance from '../components/R-Asistencias';

export const LIST_ATTENDANCES = gql`
	query ListAttendances($employeeCardId: String) {
		attendances(employeeCardId: $employeeCardId) {
			date
			id
			employeeCardId
			inHour
			outHour
			employee {
				name
				lastname
			}
		}
	}
`;

const pxToMm = (px) => {
	return Math.floor(
		px / document.getElementById('attendanceReport').offsetHeight
	);
};

export const initialState = {
	attendances: [
		{
			__typename: 'Attendances',
			date: '',
			id: '',
			inHour: '',
			outHour: '',
			employeeCardId: '',
			employee: {
				__typename: 'Employee',
				name: '',
				lastname: '',
			},
		},
	],
};

function Imprimir() {
	const input = document.getElementById('attendanceReport');
	const inputHeightMm = pxToMm(input.offsetHeight);
	const a4WidthMm = 210;
	const a4HeightMm = 297;

	html2canvas(input).then((canvas) => {
		const imgData = canvas.toDataURL('image/png');
		let pdf = null;
		if (inputHeightMm > a4HeightMm) {
			pdf = new jsPDF('landscape', 'mm', [inputHeightMm + 16, a4WidthMm]);
		} else {
			// standard a4
			pdf = new jsPDF('landscape', 'mm');
		}
		const imgProps = pdf.getImageProperties(imgData);
		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
		pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
		pdf.save('reporte-asistencia.pdf');
	});
}

export default function RAsistencias() {
	const [employeeCardId, setEmployeeCardId] = useState(null);
	const { loading, error, data, refetch } = useQuery(LIST_ATTENDANCES, {
		variables: { employeeCardId },
	});

	if (loading) {
		return (
			<div className='page-content' id='attendanceReport'>
				<div
					className='row badge-dark pl-4 '
					style={{ background: '#D5691E' }}
				>
					<h1>Asistencias</h1>
				</div>
				<div className='  bg-dark p-3 ml-3 mr-3'>
					<form className='buscar justify-content-sm-start'>
						<div className='form-row'>
							<div className='col'>
								<input
									id='txtSearch'
									type='text'
									className='form-control'
									placeholder='Ingrese DNI y presione ENTER para buscar'
									title='Buscar'
									defaultValue={employeeCardId}
								/>
							</div>
							<div className=''>
								<button
									type='button'
									title='Antes de generar el PDF oculte la barra lateral'
									className='degradado d-flex align-items-center border-0 justify-content-center p-0'
									style={{ width: '40px', height: '40px' }}
								>
									<i className='fa fa-file-pdf '></i>
								</button>
							</div>
						</div>
					</form>
					<div className='card table-responsive-lg  p-3 mt-3 text-center'>
						<table className='table tablaDetalleHorario'>
							<thead className='thead-dark '>
								<tr>
									<th scope='col'>Fecha</th>
									<th scope='col'>Código</th>
									<th scope='col'>Documento</th>
									<th scope='col'>Nombres</th>
									<th scope='col'>Apellidos</th>
									<th scope='col'>Hora entrada</th>
									<th scope='col'>Hora salida</th>
								</tr>
							</thead>
							<tbody className=''>
								<tr>
									<td>Cargando...</td>
									<td>Cargando...</td>
									<td>Cargando...</td>
									<td>Cargando...</td>
									<td>Cargando...</td>
									<td>Cargando...</td>
									<td>Cargando...</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
	if (error) return <ErrorIcon error={error} />;

	return (
		<div className='page-content' id='attendanceReport'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1>Asistencias</h1>
			</div>
			<div className='  bg-dark p-3 ml-3 mr-3'>
				<form className='buscar justify-content-sm-start'>
					<div className='form-row'>
						<div className='col'>
							<input
								id='txtSearch'
								type='text'
								className='form-control'
								placeholder='Ingrese DNI y presione ENTER para buscar'
								title='Buscar'
								defaultValue={employeeCardId}
								onChange={(e) => {
									if (e.target.value === '') {
										setEmployeeCardId(null);
										refetch();
									}
								}}
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
								title='Antes de generar el PDF oculte la barra lateral'
								onClick={() => Imprimir()}
								className='degradado d-flex align-items-center border-0 justify-content-center p-0'
								style={{ width: '40px', height: '40px' }}
							>
								<i className='fa fa-file-pdf '></i>
							</button>
						</div>
					</div>
				</form>
				<div className='card table-responsive-lg  p-3 mt-3 text-center'>
					<table className='table tablaDetalleHorario'>
						<thead className='thead-dark '>
							<tr>
								<th scope='col'>Fecha</th>
								<th scope='col'>Código</th>
								<th scope='col'>Documento</th>
								<th scope='col'>Nombres</th>
								<th scope='col'>Apellidos</th>
								<th scope='col'>Hora entrada</th>
								<th scope='col'>Hora salida</th>
							</tr>
						</thead>
						<tbody className=''>
							{/* {
                                ()=> {if (loading) return <Loader />;}
                            } */}
							{data.attendances.map((a) => {
								return <ContentAttendance key={a.id} a={a} />;
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
