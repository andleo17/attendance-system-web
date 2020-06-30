import React from 'react';

export default function Footer() {
	return (
		<div className='page-content '>
			<footer className='fixed-bottom bg-dark text-white text-center pb-2 border-top border-white'>
				<small className=''>
					© Desarrollado por -{' '}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.facebook.com/'
						className='text-danger'
					>
						Tercermundistas
					</a>
				</small>
			</footer>
		</div>
	);
}
