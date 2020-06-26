import React, { useState } from 'react';

export default function DropDownMenu(props) {
	const [active, setActive] = useState(false);
	return (
		<li
			className={`sidebar-dropdown ${active ? 'active' : ''}`}
			onClick={() => setActive(!active)}
		>
			<div className='title'>
				<i className={props.icon}></i>
				<span>{props.title}</span>
			</div>
			<div className={`slideup ${active ? 'slidedown' : ''}`}>
				<ul>
					{props.children.map
						? props.children.map((c) => c)
						: props.children}
				</ul>
			</div>
		</li>
	);
}
