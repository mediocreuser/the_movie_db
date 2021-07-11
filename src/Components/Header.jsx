import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as Logo } from '../assets/tmdbLogo.svg'
import { ReactComponent as GitHubLogo } from '../assets/github-mark.svg'

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
					<span className="navbar-toggler-icon" />
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
						<li className="nav-item">
							<NavLink
								to={'/tv'}
								className={'nav-link'}
								activeClassName="active"
								aria-current="page"
							>
								TV Shows
							</NavLink>
						</li>
					</ul>
					<GitHub
						href="https://github.com/mediocreuser/"
						target="_blank"
						rel="noreferrer"
					>
						<GitHubLogo />
					</GitHub>
				</div>
			</div>
		</nav>
	)
}

export default Header

const GitHub = styled.a`
	display: inline-block;

	svg {
		fill: #cdd9e5;
		width: 40px;
		height: 40px;
	}

	&:hover svg {
		opacity: 70%;
	}
`
