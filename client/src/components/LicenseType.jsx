import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css'
import foto from '../recursos/embarazada.jpg'
import foto1 from '../recursos/fallecimiento.jpg'

export default function LicenseType() {
    return (
        <div className=' row container-fluid' >
            <div className='col-lg-2'>
                <span></span>
            </div>
            <div className='col-lg-10 '>
                <div className=' m-5 conteinerGeneral pt-2 pr-4 pl-4 pb-4'>
                    <div class="hit-the-floor  ">Tipo de licencias</div>
                    <form action="" className='row form-inline d-flex mt-2 justify-content-sm-start m-2 md-form form-sm active-pink-2 mt-2'>
                        <input type="text" className='form-control form-control-sm m-1 mr-3 col-lg-10 bg-transparent border 
                            border-left-0 border-right-0  border-top-0 border-danger' placeholder='Buscar' />

                        <button type='button' className='col-lg-1 degradado border-0 w-100' data-toggle="modal" data-target="#nuevoTipoLicencia">
                            NUEVO
                        </button>

                        {/* Inicio Modal para nuevo tipo de licencia */}
                        <div className='modal fade' tabindex='-1' role='dialog' id='nuevoTipoLicencia'>
                            <div className='modal-dialog modal-dialog-centered' role='document'>
                                <div className='modal-content'>
                                    <div className='modal-header'>
                                        <h5 className='modal-title'> Nuevo tipo de licencia </h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                        <button type="button" class="btn btn-primary">Registrar</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Fin Modal para nuevo tipo de licencia */}



                    </form>
                    <br />
                    <div className=' row align-content-between'>
                        <div className='col-lg-4 '>
                            <div className='m-5 card-licensetype text-lg-center '>
                                <img src={foto} alt="" className='w-75' />
                                <h3 className='text-warning'>Licencia por embarazo</h3>
                                <div className='row'>
                                    <div className='col-ms-2 ml-5'>
                                        <label htmlFor="" className='text-info'> Tiempo: <span className='text-info'>90 días</span></label> <br />
                                    </div>
                                </div>
                                <div className=' text-center pt-1 pb-1 border border-darken-1 border-bottom-0 border-right-0'>
                                    <button className='degradado border-0 m-1'>Modificar</button>
                                    <button className='degradado border-0 m-1'>Dar de baja</button>
                                    <button className='degradado border-0 m-1'>Eliminar</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br />

                </div>
            </div>
        </div>



    )
}

