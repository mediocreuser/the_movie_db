import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ArrowLink from './UIComponents/ArrowLink'
import styled from 'styled-components'

import { movieAPI } from '../api/api'

const CreditsCarousel = ({ id }) => {
	const [error, setError] = useState('')
	const [cast, setCast] = useState([])

	useEffect(() => {
		const fetchData = async (id) => {
			await movieAPI.getCredits(id).then(({ cast }) => {
				const array = cast
					.sort((a, b) =>
						a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0
					)
					.slice(0, 9)

				setCast(array)
			})
		}

		fetchData(id).catch((error) => setError(error.message))
	}, [id])

	if (error)
		return (
			<div className="alert alert-danger mt-3 text-center" role="alert">
				Cast: {error}
			</div>
		)

	if (!cast.length)
		return (
			<div className="progress mt-3">
				<div
					className="progress-bar progress-bar-striped progress-bar-animated"
					role="progressbar"
					style={{ width: '100%' }}
				></div>
			</div>
		)

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 992 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 991, min: 768 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 767, min: 576 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 575, min: 0 },
			items: 1,
		},
	}

	return (
		<CarouselContainer responsive={responsive}>
			{cast.length &&
				cast.map((item) => (
					<Card key={item.id} className="card">
						<img
							src={`https://www.themoviedb.org/t/p/w300_and_h450_face/${item.profile_path}`}
							className="card-img-top"
							alt="Actor"
						/>
						<div className="card-body">
							<h5>
								<Link to="/" className="link">
									{item.original_name}
								</Link>
							</h5>
							<p>{item.character}</p>
						</div>
					</Card>
				))}
			<ArrowLinkCard>
				<ArrowLink path="/">View More</ArrowLink>
			</ArrowLinkCard>
		</CarouselContainer>
	)
}

const CarouselContainer = styled(Carousel)`
	padding: 30px 10px;
	width: 100%;
	margin-bottom: 200px;
`

const Card = styled.div`
	width: 100%;
	max-width: 270px;
	height: 100%;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	margin: 0 auto;

	// Small devices (landscape phones, 576px and up)
	@media (min-width: 576px) {
		max-width: 230px;
		flex-direction: column;
	}

	// Medium devices (tablets, 768px and up)
	@media (min-width: 768px) {
		max-width: 200px;
	}

	// X-Large devices (large desktops, 1200px and up)
	@media (min-width: 1200px) {
		max-width: 170px;
	}

	.card-body {
		padding: 10px;
	}

	h5 {
		font-size: 1em;
		font-weight: bold;
		margin: 0;
	}

	p {
		font-size: 0.9em;
		margin: 0;
	}
`

const ArrowLinkCard = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export default CreditsCarousel

CreditsCarousel.propTypes = {
	id: PropTypes.string.isRequired,
}
