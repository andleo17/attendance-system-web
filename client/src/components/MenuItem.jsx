import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MenuItem(props) {
	return (
		<li>
			<NavLink to={`${props.path}`} className='title'>
				{props.title}
			</NavLink>
		</li>
	);
}
