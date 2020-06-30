import React, { useState } from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Loader from '../components/Loader';
import ErrorIcon from '../components/ErrorIcon';
import ReporteAsistencias  from '../components/R-Asistencias'

export default function RAsistencias() {

    return (
        <div className='page-content'>
            <div
                className='row badge-dark pl-4 '
                style={{ background: '#D5691E' }}
            >
                <h1>Asistencias</h1>
            </div>
            <div className='  bg-dark p-3 ml-3 mr-3'>
                <form className='buscar justify-content-sm-start'>
                    <div className='form-row'>
                        <div className='col'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Buscar'
                                title='Buscar'
                            />
                        </div>
                        <div className=''>
                            <button
                                type='button'
                                data-toggle='modal'
                                data-target='#frmLicenseType'
                                className='degradado d-flex align-items-center border-0 justify-content-center p-0' style={{ width: '40px', height: '40px' }}
                            >
                                <i className='fa fa-file-pdf '></i>

                            </button>
                        </div>
                    </div>
                </form>
                <div className='card table-responsive-lg  p-3 mt-3 text-center'>
                    <table class='table tablaDetalleHorario'>
                        <thead class='thead-dark '>
                            <tr>
                                <th scope='col'>Fecha</th>
                                <th scope='col'>Código</th>
                                <th scope='col'>Documento</th>
                                <th scope='col'>Nombres</th>
                                <th scope='col'>Apellidos</th>
                                <th scope='col'>Hora entrada</th>
                                <th scope='col'>Hora salida</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                                <td>-----</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}
