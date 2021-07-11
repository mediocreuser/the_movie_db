import React, { useContext } from 'react'

import styled from 'styled-components'
import { usePalette } from 'react-palette'
import { rgba, darken } from 'polished'

import { Context } from '../../pages/ItemPage'

import Poster from './Poster'
import Details from './Details'

const Header = () => {
	const { details } = useContext(Context)

	const backdrop = details.backdrop_path
		? `https://image.tmdb.org/t/p/original/${details.backdrop_path}`
		: null

	const palette = usePalette(backdrop).data.muted

	return (
		<Backdrop path={details.backdrop_path} palette={palette}>
			<div className="container py-5">
				<div className="row">
					<Poster />
					<Details />
				</div>
			</div>
		</Backdrop>
	)
}

export default Header

const Backdrop = styled.div.attrs({ className: 'container-fluid' })`
	background-color: #b5b5b5;
	background-image: linear-gradient(
			to right,
			${({ palette }) => (palette ? darken(0.35, palette) : palette)} 150px,
			${({ palette }) => rgba(`${palette ? darken(0.2, palette) : 'black'}`, 0.5)} 100%
		),
		url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${({ path }) => path});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`
