import React, { useContext } from 'react'
import styled from 'styled-components'
import poster from '../../../assets/posterPlaceholder.svg'

import { Context } from '../../pages/ItemPage'

const Poster = React.memo(() => {
	const {
		details: { poster_path },
	} = useContext(Context)

	return (
		<div className="col-12 col-lg-4">
			<PosterImage path={poster_path} />
		</div>
	)
})

const PosterImage = styled.div`
	margin: 0 auto;

	background-color: #dbdbdb;

	background-image: url(${({ path }) =>
		path ? `https://image.tmdb.org/t/p/w500/${path}` : poster});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	width: 300px;
	height: 450px;

	border-radius: 10px;
`

export default Poster
