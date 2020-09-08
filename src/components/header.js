import React from 'react';
import Logo from '../components/logo';
import Navigation from '../components/navigation';


export default function Header() {

	return (
		<div style={{

		}}>
            <nav className="navbar navbar-expand-lg" style={{'borderBottom': '1px solid #eee'}}>
                <a className="" href="#"><Logo /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Qui sommes nous ?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nos expertises</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nos partenariats</a>
                        </li>
						<li className="nav-item">
                            <a className="nav-link" href="#">Efisens Clic&Shop</a>
                        </li>
						<li className="nav-item">
                            <a className="nav-link" href="#">Efisens Lab</a>
                        </li>
						<li className="nav-item">
                            <a className="nav-link" href="#">Carrières</a>
                        </li>
						<li className="nav-item">
                            <a className="nav-link" href="#">Nous contacter</a>
                        </li>

                    </ul>
                </div>
				<button className="btn btn-danger btn-custom">
                    Accès client
				</button>
            </nav>
		</div >

	);
}

