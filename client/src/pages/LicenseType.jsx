import React, { useState, useEffect } from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Redirect, useHistory } from 'react-router';
import LicenseTypeCard from '../components/LicenseTypeCard'
import LicenseTypeModal from '../components/LicenseTypeModal'
import foto from '../recursos/embarazada.jpg';
import foto1 from '../recursos/fallecimiento.jpg';

const LIST_LICENSETYPE = gql`
	query ListLicenseType {
		licenseTypes{
			description
			maximumDays
			id
		}
	}
`;


export default function LicenseType() {
	const { loading, data, error } = useQuery(LIST_LICENSETYPE);
	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>{error.message}</h1>;

	return (
		<div className=' row container-fluid'>
			<div className='col-lg-2'>
				<span></span>
			</div>
			<div className='col-lg-10 '>
				<div className=' m-5 mt-3 conteinerGeneral pt-2 pr-4 pl-4 pb-4'>
					<div className='hit-the-floor  '>Tipo de licencias</div>
					<form
						action=''
						className='row form-inline d-flex mt-2 justify-content-sm-start m-2 md-form form-sm active-pink-2 mt-2'
					>
						<input
							type='text'
							className='form-control form-control-sm m-1 mr-3 col-lg-10 bg-transparent border 
                        border-left-0 border-right-0  border-top-0 border-danger'
							placeholder='Buscar'
						/>

						<button
							type='button'
							className='col-lg-1 degradado border-0 w-100'

							data-toggle='modal'
							data-target='#nuevoTipoLicencia'
							
						>
							{' '}
							NUEVO
						</button>

						{/* Inicio Modal para nuevo tipo de licencia  */}
						{
							
						}
						{/* /* Fin Modal para nuevo tipo de licencia */}
					</form>
					<br />
					<div className=' row '>
					{			
							data.licenseTypes.map((lt) =>
								{	
									return <LicenseTypeCard 
										licenceType ={lt} 
										showModal={showModal}/>
								}
							)			
					}
					</div>
				</div>
				<br />
			</div>
		</div>
	);
}

function showModal(lt){
	console.log(lt);
	// useEffect(() => {
	// 	return(
	// 		<LicenseTypeModal licenceType= {lt}/>	
	// 	);
	//   });
	
}