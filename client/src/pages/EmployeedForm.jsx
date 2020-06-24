import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css'
import foto from '../recursos/perfil.jpg'

export default function EmployeedForm() {
    return (
        <div className='  row  container-fluid'>
            <div className='col-sm-2'>
            </div>
            <div className='col-sm-10 p-3 '>
                <form action="" className='bg-white p-3'>
                    <div className="row border">
                        <div className="col-sm-6 text-center">
                            <div>
                                <div className='prevPhoto border border-0'>
                                    <span className='delPhoto notBlock font-weight-bold'> X</span>
                                    <label for='foto'></label>
                                </div>
                                <div className='upimg '>
                                    <input src={foto} type='file' name='foto' id='foto' />
                                </div>
                                <div id='form_alert'></div>
                            </div>
                            <input type="checkbox" name="" id="" /> <label htmlFor=""> Vigente</label>

                        </div>
                        <div className="col-sm-6  text-center">
                            <div className=''>
                                <i className='fa fa-id-card'></i>
                                <label htmlFor="">Dni:</label>
                                <input type="text" className=''/>
                            </div>
                            <div>
                                <i className='fa fa-tag'></i>
                                <label htmlFor="">Nombres:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <i className='fa fa-tag'></i>
                                <label htmlFor="">Apellidos:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <i className='fa fa-gift'></i>
                                <label htmlFor="">Nacimiento:</label>
                                <input type="text" />
                            </div>

                        </div>
                    </div>


                    <div className="row border">
                        <div className="col-sm-6 text-center">
                            <div>
                                <i className='fa fa-venus-mars'></i>
                                <label htmlFor="">Sexo:</label>
                                <select name="selectorC" id="selectorC" class="btn ">
                                    <option value="1" disabled selected>SELECCIONAR</option>
                                    <option value="2" >Femenino</option>
                                    <option value="3">Masculino</option>
                                    <option value="4">Otro</option>
                                </select>
                            </div>
                            <div>
                                <i className='fa fa-home'></i>
                                <label htmlFor="">Dirección:</label>
                                <input type="text" />
                            </div>

                        </div>
                        <div className="col-sm-6  text-center">
                            <div className=''>
                                <i className='fa fa-envelope'></i>
                                <label htmlFor="">Correo:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <i className='fa fa-mobile'></i>
                                <label htmlFor="">Teléfono:</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>


                    <div className="row border">
                        <div className="col-sm-6 text-center">
                            <div>
                                <i className='fa fa-file-archive'></i>
                                <label htmlFor="">Contrato:</label>
                                <input type="checkbox" name="" id="" /> <label htmlFor=""> Vigente</label>
                            </div>
                            <div>
                                <i className='fa fa-calendar-check'></i>
                                <label htmlFor="">Fecha inicial:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <i className='fa fa-calendar-times'></i>
                                <label htmlFor="">Fecha final:</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="col-sm-6  text-center">
                            <div className=''>
                                <i className='fa fa-money-bill-alt'></i>
                                <label htmlFor="">Monto:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <i className='fa fa-clock'></i>
                                <label htmlFor="">Horas extras:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <button className='btn degradado pb-0 pt-0'>
                                    <i className='fa fa-eye text-white'></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row border">
                        <div className="col-sm-6 text-center">
                            <div>
                                <i className='fa fa-file-archive'></i>
                                <label htmlFor="">Horario:</label>
                                <input type="checkbox" name="" id="" /> <label htmlFor=""> Vigente</label>
                            </div>
                            <div>
                                <i className='fa fa-calendar-check'></i>
                                <label htmlFor="">Fecha inicial:</label>
                                <input type="text" />
                            </div>

                        </div>

                        <div className="col-sm-6  text-center">
                            <div>
                                <i className='fa fa-calendar-times'></i>
                                <label htmlFor="">Fecha final:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <button className='btn degradado pb-0 pt-0'>
                                    <i className='fa fa-eye text-white '></i>
                                </button>
                            </div>
                        </div>
                    </div>



                </form>


            </div>
        </div>

    )
}