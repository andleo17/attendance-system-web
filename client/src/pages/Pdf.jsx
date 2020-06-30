import html2canvas from 'html2canvas';
import React, { useState } from 'react';
// import jsPDF, { Text, AddPage, Line, Image, Table, Html } from 'jspdf-react';
import jsPDF from 'jspdf'

import OctoCatImage from '../recursos/embarazada.jpg';
 

const pxToMm = (px) => {
    return Math.floor(px/document.getElementById('prueba').offsetHeight);
};
  
const mmToPx = (mm) => {
    return document.getElementById('prueba').offsetHeight*mm;
};
  
const range = (start, end) => {
      return Array(end-start).join(0).split(0).map(function(val, id) {return id+start});
};



export function Imprimir(){
    // window.html2canvas = html2canvas;
    
    // // var doc = new jsPDF({
    // //   orientation: "portaid",
    // //   unit: "mm",
    // // //   format: [16, 9]
    // // });

    // let content = document.getElementById("prueba");
 
    // // doc.html(content, {
    // //   callback: function(doc) {
    // //     console.log("in callback");
        
    // //     doc.save();
    // //   }
    // // });


    // // const input = document.getElementById('prueba');

    // // html2canvas(input)
    // //     .then((canvas) => {
    // //         const imgData = canvas.toDataURL('image/png');
    // //         const pdf = new jsPDF('p', 'px', 'a4');
    // //         const imgProps= pdf.getImageProperties(imgData);
    // //         const pdfWidth = pdf.internal.pageSize.getWidth();
    // //         const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    // //         pdf.fromHTML(input)
    // //         // pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    // //         pdf.save("test.pdf");
            
    // //     });

    // html2canvas(content, {scrollY: -window.scrollY}).then(function(canvas) {
    //     var img = canvas.toDataURL();
    //     window.open(img);
    // });


    const input = document.getElementById("prueba");
    const inputHeightMm = pxToMm(input.offsetHeight);
    const a4WidthMm = 210;
    const a4HeightMm = 297; 
    const a4HeightPx = mmToPx(a4HeightMm); 
    const numPages = inputHeightMm <= a4HeightMm ? 1 : Math.floor(inputHeightMm/a4HeightMm) + 1;

    html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      let pdf = null; 
      // Document of a4WidthMm wide and inputHeightMm high
      if (inputHeightMm > a4HeightMm) {
        // elongated a4 (system print dialog will handle page breaks)
        pdf = new jsPDF('p', 'mm', [inputHeightMm+16, a4WidthMm]);
      } else {
        // standard a4
        pdf = new jsPDF();
      }
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("hola.pdf");

    });


}

export default function Pdf(){

    return (
        <div className='col-sm-3 p-3 container-page' id='prueba'>
			<div className='card card-licensetype'>
				<div className='card-title text-lg-center m-0'>
					<h3
						className='text-white pl-2 m-0'
						style={{ background: '#D5691E' }}
					>
						LICENCIA
					</h3>
				</div>
				<div className='card-header p-0 m-0 text-center'>
					<img src='' alt='' className='h-50 w-50' />
				</div>
				<div className='card-body  pt-0 pb-0 '>
					<div className='mb-2'>
                        <i className='fa fa-tag pr-4 pl-2'></i>
						<b>Nombre</b>
						<div className='ml-5 font-italic'>ggggg</div>
					</div>
					<div className='mb-1'>
                        <i className='fa fa-calendar-alt pr-4 pl-2'></i>
						<b>Tiempo</b>
						<div className='ml-5 font-italic'>ggggg días</div>
					</div>
				</div>
				<div className='card-footer d-flex justify-content-between'>
					<button
						type='button'
						className='degradado btn'
						title='Modificar'
						data-toggle='modal'
                        data-target='#frmLicenseType'
                        onClick={
                            ()=>Imprimir()
                        }
						
					>
						<i className='fa fa-pencil-alt text-white'></i>
					</button>
					<button
						type='button'
						className='degradado btn ' 
						title='Eliminar'
					>
						<i className='fa fa-trash-alt text-white'></i>
					</button>
				</div>
			</div>
		</div>

      );


}  


