import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { v4 as uuid } from 'uuid'
import styled from 'styled-components'

import SwiperCore, { Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Context } from '../pages/ItemPage'

import Avatar from '../UIComponents/Avatar'
import ArrowLink from '../UIComponents/ArrowLink'
import ErrorBlock from '../UIComponents/ErrorBlock'

const Cast = () => {
	const {
		credits: { cast },
		errors,
		details: { id },
	} = useContext(Context)

	if (errors.credits) return <ErrorBlock error={errors.credits} />
	if (!cast?.length) return null

	SwiperCore.use([Scrollbar, A11y])

	return (
		<div className="dividerBottom">
			<h3 className="h5 mt-3">
				<strong>Top Billed Cast</strong>
			</h3>
			{cast.length === 0 ? (
				<p className="pb-4">
					We don't have any cast added to this movie. You can help by adding some!
				</p>
			) : (
				<Swiper
					spaceBetween={10}
					scrollbar={{ draggable: true }}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						576: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						992: {
							slidesPerView: 4,
						},
					}}
				>
					{cast
						.slice()
						.sort((a, b) => {
							return a.popularity < b.popularity
								? 1
								: b.popularity < a.popularity
								? -1
								: 0
						})
						.slice(0, 9)
						.map((item) => (
							<SwiperSlide style={{ height: 'auto' }} key={uuid()}>
								<Card>
									<div style={{ height: 200 }}>
										<Avatar url={item.profile_path} width={300} height={450} />
									</div>
									<div className="card-body">
										<h5>
											<Link to="/" className="link">
												{item.original_name}
											</Link>
										</h5>
										<p>{item.character}</p>
									</div>
								</Card>
							</SwiperSlide>
						))}
					<SwiperSlide style={{ height: 'auto' }}>
						<ArrowLinkCard>
							<ArrowLink path="/">View More</ArrowLink>
						</ArrowLinkCard>
					</SwiperSlide>
				</Swiper>
			)}
			{cast.length !== 0 && (
				<div className="pb-3 pt-3">
					<a href={`https://www.themoviedb.org/movie/${id}/cast`} className="link">
						<strong>Full Cast & Crew</strong>
					</a>
				</div>
			)}
		</div>
	)
}

export default Cast

const Card = styled.div`
	margin: 0 auto;
	width: 170px;
	height: 100%;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	border-radius: 8px;

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
