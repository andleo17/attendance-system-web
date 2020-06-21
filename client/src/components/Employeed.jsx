import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css'
import foto from '../recursos/perfil.jpg'

export default function Employeed() {
    return (
        <div className=' row container-fluid' >
            <div className='col-lg-2'>
                <span></span>
            </div>
            <div className='col-lg-10 '>
                <div className=' m-5 conteinerGeneral pt-2 pr-4 pl-4 pb-4'>
                    <div class="hit-the-floor  ">Empleados</div>
                    <form action="" className='row form-inline d-flex mt-2 justify-content-sm-start m-2 md-form form-sm active-pink-2 mt-2'>
                        <input type="text" className='form-control form-control-sm m-1 mr-3 col-lg-10 bg-transparent border 
                            border-left-0 border-right-0  border-top-0 border-danger' placeholder='Buscar' />
                        <button className='col-lg-1 degradado border-0 w-100'>
                            NUEVO
                            </button>
                    </form>
<br/>
                    <div className=' row card-employeed'>
                        <div className='col-lg-3 p-0  text-lg-center fondito'>
                            <img src={foto} alt="" className='w-50 rounded-circle mt-4 ' />
                        </div>
                        <div className='col-lg-7'>
                            <h3 className='m-3'>Paola Cieza Bances</h3>
                            <div className='row'>
                            <div className='col-ms-2 ml-5'>
                                <label htmlFor="" className='text-danger'> Dni:</label> <br/>
                                <label htmlFor="" className='text-danger'>Sexo:</label> <br/>
                                <label htmlFor="" className='text-danger'>Correo:</label> <br/>
                                <label htmlFor="" className='text-danger'>Estado:</label> <br/>
                            </div>
                            <div className='col-ms-8 ml-2'>
                                <label htmlFor=""> 75756219</label> <br/>
                                <label htmlFor=""> Femenino</label> <br/>
                                <label htmlFor=""> paolacieza8@gmail.com</label> <br/>
                                <label htmlFor=""> Vigente</label>
                            </div>
                            </div>
                        
                        </div>
                        <div className='col-lg-2 text-center border border-darken-1 border-bottom-0 border-top-0 border-right-0'>
                            <br/> <br/>
                            <button className='degradado border-0 w-75 m-1'>Ver</button> <br /> 
                            <button className='degradado border-0 w-75 m-1'>Modificar</button> <br /> 
                            <button className='degradado border-0 w-75 m-1'>Dar de baja</button> <br /> <br/>
                        </div>
                    </div>
                    <br/>

                </div>
            </div>
        </div>



    )
}

