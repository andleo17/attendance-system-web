import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import ComponentGeneral from '../components/LoadingReport';
import ErrorIcon from '../components/ErrorIcon';

export const LIST_JUSTIFICATIONS = gql`
	query ListJustifications($employeeCardId: String) {
		justifications(employeeCardId: $employeeCardId) {
			date
			id
			state
			motive
			attendance {
				employee {
					name
					lastname
					cardId
				}
				date
			}
		}
	}
`;

const pxToMm = (px) => {
	return Math.floor(px / document.getElementById('report').offsetHeight);
};

function Imprimir() {
	const input = document.getElementById('report');
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
		pdf.save('reporte-justificaciones.pdf');
	});
}

export default function RJustificaciones() {
	const [employeeCardId, setEmployeeCardId] = useState(null);
	const { loading, error, data, refetch } = useQuery(LIST_JUSTIFICATIONS, {
		variables: { employeeCardId },
	});
	const colums = [
		'Código',
		'Fecha tardanza',
		'Fecha justificación',
		'Motivo',
		'Dni',
		'Nombres',
		'Apellidos',
		'Estado',
	];
	const title = 'Justificaiones';
	if (loading) {
		return (
			<ComponentGeneral
				employeeCardId={employeeCardId}
				colums={colums}
				title={title}
			/>
		);
	}
	if (error) return <ErrorIcon error={error} />;
	return (
		<div className='page-content' id='report'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1>{title}</h1>
			</div>
			<div className='  bg-dark p-3 ml-3 mr-3'>
				<form className='buscar justify-content-sm-start'>
					<div className='form-row'>
						<div className='col'>
							<input
								id='txtSearch'
								type='text'
								className='form-control'
								maxLength='8'
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
								{colums.map((c) => {
									return (
										<th key={c} scope='col'>
											{c}
										</th>
									);
								})}
							</tr>
						</thead>
						<tbody className=''>
							{data.justifications.map((j) => {
								return (
									<tr key={j.id}>
										<td>{j.id}</td>
										<td>{j.attendance.date}</td>
										<td>{j.date}</td>
										<td>{j.motive}</td>
										<td>{j.attendance.employee.cardId}</td>
										<td>{j.attendance.employee.name}</td>
										<td>
											{j.attendance.employee.lastname}
										</td>
										<td>
											{j.state ? 'Vigente' : 'No vigente'}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
