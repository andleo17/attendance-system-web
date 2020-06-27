import React, { useState } from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { NavLink } from 'react-router-dom';
import LicenseTypeCard from '../components/LicenseTypeCard';
import LicenseTypeModal from '../components/LicenseTypeModal';
import PermisoCard from '../components/PermissoCard';
import PermisoModal from '../components/PermisoModal';
import { buildResolveInfo } from 'graphql/execution/execute';

export const LIST_LICENSETYPE = gql`
	query ListLicenseType {
		licenseTypes {
			description
			maximumDays
			id
		}
	}
`;

export default function Contrato() {
    const initialState = {
        __typename: 'Contract',
        description: null,
        id: null,
        maximumDays: null,
        mode: 0,
    };
    const [selectedItem, setSelectedItem] = useState(initialState);

    const { loading, data, error } = useQuery(LIST_LICENSETYPE);
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error.message}</h1>;

    return (
        <div className='page-content'>
            <div
                className='row badge-dark pl-4 '
                style={{ background: '#D5691E' }}
            >
                <h1 htmlFor='' className=''>
                    Permisos
				</h1>
            </div>
            <div className='  bg-dark p-3 ml-3 mr-3'>
                <form className='buscar justify-content-sm-start'>
                    <div className='form-row'>
                        <div className='col'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Buscar'
                            />
                        </div>
                        <div className=''>
                            <button
                                type='button'
                                data-toggle='modal'
                                data-target='#frmPermiso'
                                className='degradado d-flex h-100 align-items-center border-0 justify-content-center text-decoration-none'
                            >
                                <i className='fa fa-user-plus mr-1'></i>
								NUEVO
							</button>
                        </div>
                    </div>
                </form>
                <div className='row'>
                    {data.licenseTypes.map((lt) => {
                        return (
                            <PermisoCard
                                key={lt.id}
                                data={lt}
                                setData={setSelectedItem}
                            />
                        );
                    })}
                </div>
                <PermisoModal licenseType={selectedItem} />
            </div>
        </div>
    );
}