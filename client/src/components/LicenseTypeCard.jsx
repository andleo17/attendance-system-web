import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import foto from '../recursos/embarazada.jpg';
import LicenseTypeModal from '../components/LicenseTypeModal'

export default function LicenseTypeCard(props){
    const { showModal } = props;
    let {licenceType} =props;
    return( 
        <div className='col-lg-3  '>
                <div className=' m-1  card-licensetype text-lg-center '>
                    <div
                        className='row pl-4 '
                        style={{ background: '#D5691E' }}
                    >
                        <h3 className='text-center text-white'>
                            LICENCIA
                        </h3>
                    </div>
                    <img src={foto} alt='' className='w-50 h-50' />

                    <div className='row p-3'>
                        <div className=' align-content-start p-1'>
                            <label className=' text-sm-left text-black mr-1'>
                                {' '}
                                <b>Nombre:</b>{' '}
                            </label>
                            <label htmlFor=''>
                                {licenceType.description}
                            </label>
                        </div>
                        <div className='align-content-start p-1 '>
                            <label	className='text-black mr-1'	>
                                {' '}
                                <b>Tiempo:</b> {' '}
                            </label>
                            <label htmlFor=''>
                                {licenceType.maximumDays} dias
                            </label>
                            <br />
                        </div>
                    </div>
                    <div className=' row pb-1 pt-1 pl-4 pr-4  justify-content-lg-around  border border-darken-1 border-bottom-0 border-right-0'>
                        <button
                            className='col-lg-2 degradado border-0  m-1 p-0 '
                            data-toggle='modal'
                            data-target= {
                                '#modal' + licenceType.id
                            }
                            //onClick={() => showModal(licenceType)}
                        >
                            <i className='fa fa-pencil-alt'></i>
                            {/* Modificar */}
                        </button>

                        <button className='col-lg-2 degradado border-0 m-1 p-0'>
                        <i className='fas fa-ban'></i>
                            {/* Dar baja */}
                        </button>
                        <button className='col-lg-2 degradado border-0 m-1 p-0 '>
                        <i
                                className='fa fa-trash-alt'
                                aria-hidden='true'
                            ></i>
                            {/* Eliminar */}
                        </button>
                    </div>
                </div>
                <LicenseTypeModal licenceType= {licenceType}/>	
        </div>
        
    );
}