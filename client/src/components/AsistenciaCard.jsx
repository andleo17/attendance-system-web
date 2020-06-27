import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import foto from '../recursos/perfil.jpg';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { LIST_LICENSETYPE } from '../pages/LicenseType';

const DELETE_LICENSE_TYPE_MUTATION = gql`
	mutation DeleteLicenseType($licenseTypeId: Byte!) {
		deleteLicenseType(licenseTypeId: $licenseTypeId) {
			id
			description
			maximumDays
		}
	}
`;

export default function LicenseTypeCard(props) {
    const { data, setData } = props;

    const [mutation] = useMutation(DELETE_LICENSE_TYPE_MUTATION);

    return (
        <div className='col-sm-3 p-3'>
            <div className='fuera p-2' >
                {/* AQUÍ VA EL CÓDIGO DE LA ASISTENCIA */}
                01            </div>
            <div className='card card-licensetype mt-0'>

                
                <div className='text-center card-header m-0'>
                    <img src={foto} alt='' className='h-50 w-50 circle m-0' />
                    <div className=' text-capitalize  font-italic'>Paola Cieza Bances</div>
                </div>
                <div className='card-body pt-0 pb-0 '>
                    
                    <div className='mb-1'>
                        <i className='fa fa-calendar-alt pr-4 pl-2'></i>
                        <b>Fecha</b>
                        <div className='ml-5 text-justify font-italic '>12/06/20</div>
                    </div>
                    <div className='mb-2'>
                        <i className='fa fa-clock pr-4 pl-2'></i>
                        <b>Hora entrada</b>
                        {/* <div className='ml-5'>{data.description}</div> */}
                        <div className='ml-5 font-italic'>10:00</div>
                    </div>
                    <div className='mb-2'>
                        <i className='fa fa-clock pr-4 pl-2'></i>
                        <b>Hora salida</b>
                        {/* <div className='ml-5'>{data.description}</div> */}
                        <div className='ml-5 font-italic'>03:00</div>
                    </div>
                </div>

                <div className='card-footer d-flex justify-content-between'>
                    <button
                        type='button'
                        className='degradado btn'
                        data-toggle='modal'
                        data-target='#frmAsistencia'
                        onClick={() =>
                            setData(Object.assign(data, { mode: 1 }))
                        }
                    >
                        <i className='fa fa-pencil-alt text-white'></i>
                    </button>
                    <button
                        type='button'
                        className='degradado btn'
                        onClick={() =>
                            setData(Object.assign(data, { mode: 1 }))
                        }
                    >
                        <i className='fa fa-ban text-white'></i>
                    </button>
                    <button
                        type='button'
                        className='degradado btn '
                        onClick={() =>
                            mutation({
                                variables: { licenseTypeId: parseInt(data.id) },
                                refetchQueries: [
                                    {
                                        query: LIST_LICENSETYPE,
                                    },
                                ],
                            })
                        }
                    >
                        <i className='fa fa-trash-alt text-white'></i>
                    </button>
                </div>
            </div>
        </div>
    );
}