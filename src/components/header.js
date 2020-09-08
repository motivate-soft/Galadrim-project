import React from 'react';
import Logo from '../components/logo';
import Navigation from '../components/navigation';


export default function Header() {

	return (
		<div style={{
			'display': 'flex',
			'alignItems': 'center',
			'justifyContent': 'space-between',
			'width': 'calc(100% - 30px)',
			'margin': '5px 15px',
			'borderBottom': '1px solid #eee'
		}}>
			<div style={{ display: "inline-block" }}>
				<div className="brand-logo">
					<Logo />
				</div>
			</div>
			<div style={{ display: "inline-block" }}>
				<Navigation />
			</div>
			<div style={{ display: "inline-block" }}>
				<button className="btn btn-primary">Accès client</button>
			</div>
		</div >
	);
}

