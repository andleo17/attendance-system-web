import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import foto from '../recursos/embarazada.jpg';


export default function LicenseTypeModal(props){
    
    return(
        <div
            className='modal fade '
            tabindex='-1'
            role='dialog'
            id={
                'modal'+props.licenceType.id
            }
        >
            <div
                className='modal-dialog modal-sm modal-dialog-centered '
                role='document'
            >
                <div className='modal-content'>
                    <div className='modal-header bg-dark '>
                        <h5 className='modal-title text-white'>
                            {' '}
                            Nuevo tipo de licencia{' '}
                        </h5>
                        <button
                            type='button'
                            className='close text-white'
                            data-dismiss='modal'
                            aria-label='Close'
                        >
                            <span aria-hidden='true'>
                                &times;
                            </span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        <div>
                            <div className=' text-lg-center '>
                                <div>
                                    <div>
                                        <label for='foto'>
                                            IMAGEN
                                        </label>
                                        <div className='prevPhoto border border-0'>
                                            <span className='delPhoto notBlock font-weight-bold'>
                                                X
                                            </span>
                                            <label for='foto'></label>
                                        </div>
                                        <div className='upimg '>
                                            <input
                                                type='file'
                                                name='foto'
                                                id='foto'
                                            />
                                        </div>
                                        <div id='form_alert'></div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <label
                                        for=''
                                        className='col-sm-4 m-0'
                                    >
                                        Nombre:
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control form-control-sm  col-sm-7 bg-transparent border 
                                    border-left-0 border-right-0  border-top-0 border-danger'
                                    value= {props.licenceType.description}
                                    />{' '}
                                </div>
                                <div className='row'>
                                    <label
                                        for=''
                                        className='col-sm-4 m-0'
                                    >
                                        Tiempo
                                    </label>
                                    <input
                                        type='number'
                                        className='form-control form-control-sm m-1 mr-3 col-sm-7 bg-transparent border 
                                    border-left-0 border-right-0  border-top-0 border-danger'
                                    />{' '}
                                </div>
                            </div>
                        </div>
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
                            className='btn  degradado'
                        >
                            Registrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}







