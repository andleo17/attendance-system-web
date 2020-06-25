import React, { useState } from 'react';

export default function DropDownMenu(props) {
	const [active, setActive] = useState(false);
	return (
		<li
			className={`sidebar-dropdown ${active ? 'active' : ''}`}
			onClick={() => setActive(!active)}
		>
			<a>
				<i className={props.icon}></i>
				<span>{props.title}</span>
			</a>
			<div className={`slideup ${active ? 'slidedown' : ''}`}>
				<ul>{props.children.map((c) => c)}</ul>
			</div>
		</li>
	);
}
