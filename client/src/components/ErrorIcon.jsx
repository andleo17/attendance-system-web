import React from 'react';

export default function ErrorIcon(props) {
	return (
		<div className='page-content d-flex justify-content-center align-items-center h-100 text-white'>
			{props.error.message}
		</div>
	);
}
