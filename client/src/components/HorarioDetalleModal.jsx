import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { LIST_LICENSETYPE } from '../pages/LicenseType';

const ADD_LICENSE_TYPE_MUTATION = gql`
	mutation AddLicenseType($input: LicenseTypeInput!) {
		addLicenseType(input: $input) {
			id
			description
			maximumDays
		}
	}
`;

const MODIFY_LICENSE_TYPE_MUTATION = gql`
	mutation ModifyLicenseType($input: LicenseTypeInput!) {
		modifyLicenseType(input: $input) {
			id
			description
			maximumDays
		}
	}
`;

export default function HorarioModal(props) {
    const { licenseType } = props;
    const mutation =
        licenseType.mode === 0
            ? ADD_LICENSE_TYPE_MUTATION
            : MODIFY_LICENSE_TYPE_MUTATION;
    const [execute] = useMutation(mutation);
    return (
        <div id='frmHorarioDetalle' className='modal fade inputEmpleado' tabIndex='-1'>
            <div className='modal-dialog modal-lg table-responsive-lg modal-dialog-centered'>
                <div className='modal-content'>
                    <div className='modal-header  text-white' style={{ background: '#D5691E' }}>
                        <h5 className='modal-title'>Detalle horario</h5>
                        <button
                            type='button'
                            className='close text-white'
                            data-dismiss='modal'
                        >
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className='modal-body '>
                        <div className='card table-responsive-sm p-3 mt-3 text-center empleCard'>
                            <table class='table tablaDetalleHorario'>
                                <thead class='thead-dark '>
                                    <tr>
                                        <th scope='col'>Hora</th>
                                        <th scope='col'>Lunes</th>
                                        <th scope='col'>Martes</th>
                                        <th scope='col'>Miércoles</th>
                                        <th scope='col'>Jueves</th>
                                        <th scope='col'>Viernes</th>
                                        <th scope='col'>Sábado</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    <tr>
                                        <th scope='row'>07:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>08:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>09:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>10:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>11:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>12:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>13:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>14:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>15:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>16:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>17:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>18:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>19:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>20:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>21:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>22:00</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
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
                            className='btn degradado text-white'
                            onClick={() =>
                                execute({
                                    variables: {
                                        input: {
                                            id: parseInt(licenseType.id),
                                            description:
                                                licenseType.description,
                                            maximumDays: parseInt(
                                                licenseType.maximumDays
                                            ),
                                        },
                                    },
                                    refetchQueries: [
                                        { query: LIST_LICENSETYPE },
                                    ],
                                })
                            }
                        >
                            {licenseType.mode === 0 ? 'Registrar' : 'Modificar'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
