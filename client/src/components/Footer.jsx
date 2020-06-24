import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';

export default function Footer() {
	return (
		<footer class='fixed-bottom  row  text-center p-0'>
			<div class=' col-sm-12 mb-2 text-white border border-left-0 border-right-0 border-bottom-0 p-0'>
				<small className='p-0 m-0'>
					© 2020 hecho por -{' '}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.facebook.com/paola.cieza'
						className='text-danger'
					>
						Tercermundistas
					</a>
				</small>
			</div>
		</footer>
	);
}
