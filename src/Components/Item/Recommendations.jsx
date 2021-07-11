import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import SwiperCore, { A11y, Lazy, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Context } from '../pages/ItemPage'
import API from '../../api/api'

import ErrorBlock from '../UIComponents/ErrorBlock'
import Spinner from '../UIComponents/Spinner'
import preloader from '../../assets/preloader_poster.jpg'
import FilmOverlay from '../UIComponents/FilmOverlay'
import useMediaType from '../../hooks/useMediaType'

const Recommendations = () => {
	const {
		details: { id },
	} = useContext(Context)

	const mediaType = useMediaType()

	const [rec, setRec] = useState(null)
	const [error, setError] = useState(null)
	const [fetching, setFetching] = useState(true)

	useEffect(() => {
		const fetchImages = async (mediaType, id) => {
			await API.getRecommendations(mediaType, id)
				.then((data) => setRec(data))
				.catch((error) => setError(error))

			setFetching(false)
		}

		if (id) {
			fetchImages(mediaType, id)
			window.scrollTo(0, 0)
		}
	}, [mediaType, id])

	if (error) return <ErrorBlock error={error} />
	if (fetching) return <Spinner />

	if (!rec.length)
		return (
			<p className="py-3">
				{`We don't have any recommendations added to this ${mediaType}. You can help by adding
          some!`}
			</p>
		)

	SwiperCore.use([Pagination, A11y, Lazy])

	return (
		<div className="mb-4">
			<h3 className="h5 mt-3">
				<strong>Recommendations</strong>
			</h3>
			<Swiper
				lazy={true}
				preloadImages={false}
				spaceBetween={10}
				pagination={{
					dynamicBullets: true,
				}}
				loop={true}
				observer={true}
				observeParents={true}
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
				}}
			>
				{rec.slice(0, 30).map((rec) => (
					<SwiperSlide key={rec.id}>
						<div style={{ textAlign: 'center' }}>
							<div
								className="card-backdrop"
								style={{
									position: 'relative',
									borderRadius: 10,
									overflow: 'hidden',
									margin: '20px auto',
									width: 200,
									maxWidth: 200,
									height: 300,
									boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
								}}
							>
								<Link
									to={`/${mediaType}/${rec.id}`}
									style={{
										position: 'relative',
										display: 'block',
									}}
								>
									<img
										style={{
											height: '100%',
											objectFit: 'cover',
										}}
										data-srcset={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${rec.poster_path}`}
										src={preloader}
										className="swiper-lazy"
										alt="poster"
									/>
									<FilmOverlay />
								</Link>
							</div>
							<Link to={`/${mediaType}/${rec.id}`} className="link link-bold">
								{rec.original_title}
							</Link>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Recommendations
