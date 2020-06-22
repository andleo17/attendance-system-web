import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css'
import foto from '../recursos/embarazada.jpg'
import foto1 from '../recursos/fallecimiento.jpg'

export default function LicenseType() {
    return (
        <div className=' row container-fluid'>
            <div className='col-lg-2'>
                <span></span>
            </div>
            <div className='col-lg-10 '>
                <div className=' mt-3 conteinerGeneral pt-2 pr-4 pl-4 pb-4'>
                    <div className="hit-the-floor  ">Tipo de licencias</div>
                    <form action=""
                        className='row form-inline d-flex mt-2 justify-content-sm-start m-2 md-form form-sm active-pink-2 mt-2'>
                        <input type="text" className='form-control form-control-sm m-1 mr-3 col-lg-10 bg-transparent border 
                        border-left-0 border-right-0  border-top-0 border-danger' placeholder='Buscar' />

                        <button type='button' className='col-lg-1 degradado border-0 w-100' data-toggle="modal"
                            data-target="#nuevoTipoLicencia"> NUEVO</button>

                        {/* Inicio Modal para nuevo tipo de licencia  */}
                        <div className='modal fade ' tabindex='-1' role='dialog' id='nuevoTipoLicencia'>
                            <div className='modal-dialog modal-sm modal-dialog-centered ' role='document'>
                                <div className='modal-content'>
                                    <div className='modal-header bg-dark '>
                                        <h5 className='modal-title text-white'> Nuevo tipo de licencia </h5>
                                        <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div>
                                            <div className=' text-lg-center '>
                                                <div>
                                                    <div>
                                                        <label for="foto">IMAGEN</label>
                                                        <div className="prevPhoto border border-0">
                                                            <span className="delPhoto notBlock font-weight-bold">X</span>
                                                            <label for="foto"></label>
                                                        </div>
                                                        <div className="upimg ">
                                                            <input type="file" name="foto" id="foto" />
                                                        </div>
                                                        <div id="form_alert"></div>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <label for="" className="col-sm-4 m-0">Nombre:</label>
                                                    <input type="text" className='form-control form-control-sm  col-sm-7 bg-transparent border 
                                                    border-left-0 border-right-0  border-top-0 border-danger' /> </div>
                                                <div className="row">
                                                    <label for="" className="col-sm-4 m-0">Tiempo</label>
                                                    <input type="number" className='form-control form-control-sm m-1 mr-3 col-sm-7 bg-transparent border 
                                                    border-left-0 border-right-0  border-top-0 border-danger' /> </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                        <button type="button" className="btn  degradado">Registrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /* Fin Modal para nuevo tipo de licencia */}

                    </form>
                    <br />
                    <div className=' row '>
                        <div className='col-lg-4 '>
                            <div className=' m-3  card-licensetype text-lg-center '>
                                <div className='row p-3 ' style={{background: '#D5691E'}} >
                                    <center>
                                    <h3 className='text-center text-white'>LICENCIA</h3>

                                    </center>
                                </div>
                                <img src={foto} alt="" className='w-50 h-50' />

                                <div className='row p-4'>
                                    <div className='col-ms-2 '>
                                        <label className='text-black'> <b>Nombre:</b>  <span >Licencia por embarazo</span> </label>
                                    </div>
                                    <div className='col-ms-2 '>
                                        <label htmlFor="" className='text-black'> <b>Tiempo:</b>  <span >90 días</span></label> <br />
                                    </div>
                                </div>
                                <div className=' row p-3 text-center  border border-darken-1 border-bottom-0 border-right-0'>
                                    <button className='col-sm-4 degradado border border-whit' data-toggle="modal"
                                        data-target="#nuevoTipoLicencia">Modificar</button>
                                    <button className='col-sm-4 degradado border border-black '>Dar baja</button>
                                    <button className='col-sm-4 degradado border border-white '>Eliminar</button>
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
