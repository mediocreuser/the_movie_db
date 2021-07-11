import React, { useEffect, useState } from 'react'
import API from '../../api/api'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/PrimaryLongLogo.svg'

const Header = ({ className }) => {
	const [backdrop, setBackdrops] = useState(null)

	useEffect(() => {
		API.getPopular('movie')
			.then((result) => {
				const array = []

				for (const element of result)
					if (element.backdrop_path) array.push(element.backdrop_path)

				setBackdrops(array[Math.floor(Math.random() * array.length)])
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	return (
		<header className={className}>
			<Container>
				<Logo className="mb-5" />
				<h1>Welcome.</h1>
				<h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
			</Container>
			<Backdrop backdrop={backdrop} />
		</header>
	)
}

export default styled(Header)`
	width: 100%;
	position: relative;
`

const Container = styled.div.attrs({ className: 'container' })`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1000;
	padding: 0 30px;
	color: white;

	h1,
	h2 {
		color: white;
	}

	h1 {
		font-size: 3rem;
	}
`

const Backdrop = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;

	@media (min-width: 576px) {
		height: 600px;
	}

	${({ backdrop }) =>
		backdrop &&
		`background-image: url(https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces${backdrop})`};

	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	&::before {
		content: '';
		display: block;

		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		background-color: rgba(3, 37, 65, 0.8);
		mix-blend-mode: darken;
	}

	&::after {
		content: '';
		display: block;

		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		mix-blend-mode: lighten;
		background-color: rgb(3, 37, 65);
	}
`
