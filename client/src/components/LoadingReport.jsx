import React from 'react';

const ComponentGeneral = (props)=>{
    const {employeeCardId, colums, title} = props;
    return(
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
                                placeholder='Ingrese DNI y presione ENTER para buscar'
                                title='Buscar'
                                defaultValue={employeeCardId}
                            />
                        </div>
                        <div className=''>
                            <button
                                type='button'
                                title= "Antes de generar el PDF oculte la barra lateral"
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
                            <tr>
                                {
                                    colums.map((c)=>{
                                      return  <td key={c}>Cargando...</td>
                                    })  
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ComponentGeneral;