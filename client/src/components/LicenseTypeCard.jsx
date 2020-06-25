import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import foto from '../recursos/embarazada.jpg';

export default function LicenseTypeCard(props) {
	const { data, setData } = props;
	return (
		<div className='col-sm-3 p-3'>
			<div className='card'>
				<div className='card-title text-lg-center'>
					<h3
						className='text-white'
						style={{ background: '#D5691E' }}
					>
						LICENCIA
					</h3>
				</div>
				<div className='text-center'>
					<img src={foto} alt='' className='h-50 w-50' />
				</div>
				<div className='card-body '>
					<div className='mb-2'>
						<b>Nombre</b>
						<div>{data.description}</div>
					</div>
					<div className='mb-1'>
						<b>Tiempo</b>
						<div>{data.maximumDays} días</div>
					</div>
				</div>
				<div className='card-footer d-flex justify-content-between'>
					<button
						className='degradado btn'
						data-toggle='modal'
						data-target='#frmLicenseType'
						onClick={() => setData(data)}
					>
						<i className='fa fa-pencil-alt text-white'></i>
					</button>
					<button className='degradado btn'>
						<i className='fas fa-ban text-white'></i>
					</button>
					<button className='degradado btn'>
						<i className='fa fa-trash-alt text-white'></i>
					</button>
				</div>
			</div>
		</div>
	);
}
