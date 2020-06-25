import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';

export default function Footer() {
	return (
		<footer className='fixed-bottom text-white text-center p-0 border-top border-white'>
			<small className=''>
				© 2020 hecho por -{' '}
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
	);
}
