import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { ReactComponent as Logo } from '../assets/tmdbLogo.svg'

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link to={'/'} className="navbar-brand">
					<Logo style={{ width: 154, height: 20 }} />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								to={'/movie'}
								className={'nav-link'}
								activeClassName="active"
								aria-current="page"
							>
								Movies
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header
