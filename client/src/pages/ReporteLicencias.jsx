import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { gql } from 'apollo-boost';
import {  useQuery } from '@apollo/react-hooks';
import  ComponentGeneral from '../components/LoadingReport';
import ErrorIcon from '../components/ErrorIcon';



export const LIST_LICENSES = gql`
	query ListLicenses($employeeCardId: String) {
		licenses(employeeCardId: $employeeCardId) {
			id
			startDate
			finishDate
			presentationDate
			employeeCardId
			licenseType{
				description
			}
			state
			employee {
				name
				lastname
			}
		}
	}
`;

const pxToMm = (px) => {
    return Math.floor(px/document.getElementById('report').offsetHeight);
};
  
const mmToPx = (mm) => {
    return document.getElementById('report').offsetHeight*mm;
};
  
const range = (start, end) => {
      return Array(end-start).join(0).split(0).map(function(val, id) {return id+start});
};

function Imprimir(){
  
    const input = document.getElementById("report");
    const inputHeightMm = pxToMm(input.offsetHeight);
    const a4WidthMm = 210;
    const a4HeightMm = 297; 
    const a4HeightPx = mmToPx(a4HeightMm); 
    const numPages = inputHeightMm <= a4HeightMm ? 1 : Math.floor(inputHeightMm/a4HeightMm) + 1;

    html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      let pdf = null; 
      if (inputHeightMm > a4HeightMm) {
        pdf = new jsPDF('landscape', 'mm', [inputHeightMm+16, a4WidthMm]);
      } else {
        // standard a4
        pdf = new jsPDF('landscape', 'mm');
      }
      const imgProps= pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save("reporte-tardanzas.pdf");

    });


}

export default function RLicencias() {
    const [employeeCardId, setEmployeeCardId] = useState(null);
    const { loading, error, data, refetch} = useQuery(LIST_LICENSES, {
        variables:  {employeeCardId},
    });
    const colums =["Código", "Dni", "Nombres", "Apellidos","Fecha inicio", "Fecha fin", "Tipo", "Estado"];
    const title = "Licencias";
    if (loading){
        return (
            <ComponentGeneral employeeCardId={employeeCardId} colums={colums} title={title}/>
        ) ;
    };
    if (error) return <ErrorIcon error={error} />;
    return (
        <div 
            className='page-content' id='report'
        >
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
                                title= "Antes de generar el PDF oculte la barra lateral"
                                onClick={
                                    ()=>Imprimir()
                                }
                                className='degradado d-flex align-items-center border-0 justify-content-center p-0' style={{ width: '40px', height: '40px' }}
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
                                {
                                    colums.map((c)=>{
                                      return  <th key={c} scope='col'>{c}</th>
                                    })  
                                }
                            </tr>
                        </thead>
                        <tbody className=''>
                            {data.licenses.map((l) => {
                                return (
                                    <tr key={l.id}>
                                        <td>{l.id}</td>
                                        <td>{l.employeeCardId}</td>
                                        <td>{l.employee.name}</td>
                                        <td>{l.employee.lastname}</td>
										<td>{l.startDate}</td>
										<td>{l.finishDate}</td>
										<td>{l.licenseType.description}</td>
										<td>{l.state ? "Vigente" : "No vigente"}</td> 
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







