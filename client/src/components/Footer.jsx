import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';

export default function Footer() {
	return (
		<footer class='fixed-bottom  row text-center'>
			<div class=' col-sm-12 mb-2 text-white border border-left-0 border-right-0 border-bottom-0'>
				<small>
					© 2020 hecho por -{' '}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='#'
						className='text-danger'
					>
						Tercermundistas
					</a>
				</small>
			</div>
		</footer>
	);
}
