import React from 'react';

export default function Mantenimiento() {
	return (
		<div className='page-content'>
			<div
				className='row badge-dark pl-4 '
				style={{ background: '#D5691E' }}
			>
				<h1>LO LAMENTAMOS...</h1>
			</div>
			<div className=' p-3 ml-3 mr-3 row'>
				<div className='col-lg-6'>
					<h1 className='mante bg-dark text-justify'>
						NUESTRO MÓDULO ESTÁ FUERA DE SERVICIO, LE DIO COVID-19.
					</h1>
				</div>
				<img
					className='col-lg-6'
					src='https://i.pinimg.com/originals/2f/51/af/2f51af66c19f2adac5304ff4c5821c5a.gif'
					alt=''
				/>
			</div>
		</div>
	);
}
