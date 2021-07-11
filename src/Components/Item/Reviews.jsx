import React, { useContext, useEffect, useState } from 'react'

import SwiperCore, { A11y, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Context } from '../pages/ItemPage'
import useMediaType from '../../hooks/useMediaType'
import API from '../../api/api'

import ErrorBlock from '../UIComponents/ErrorBlock'
import Spinner from '../UIComponents/Spinner'
import Avatar from '../UIComponents/Avatar'

const Reviews = () => {
	const {
		details: { id, original_title, name },
	} = useContext(Context)

	const mediaType = useMediaType()

	const [reviews, setReviews] = useState(null)
	const [error, setError] = useState(null)
	const [fetching, setFetching] = useState(true)

	useEffect(() => {
		const fetchData = async (id) => {
			await API.getReviews(mediaType, id)
				.then((data) => setReviews(data))
				.catch((error) => setError(error))

			setFetching(false)
		}

		if (id) fetchData(id)
	}, [id, mediaType])

	if (error) return <ErrorBlock error={error} />
	if (fetching) return <Spinner />

	if (reviews.length === 0)
		return (
			<p className="pt-3">{`We don't have any reviews for ${
				original_title ?? name
			}. Would you like to write one?`}</p>
		)

	SwiperCore.use([Pagination, A11y])

	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			pagination={{
				dynamicBullets: true,
			}}
		>
			{reviews.map((review) => (
				<SwiperSlide key={review.id}>
					<div className="row pb-2 pt-2">
						<div className="col-3 col-md-2">
							<Avatar
								url={review.author_details.avatar_path}
								width={64}
								height={64}
								rounding={true}
							/>
						</div>
						<div className="col">
							<div className="header">
								<a href={review.url} className="title link">
									<strong>A review by {review.author}</strong>
								</a>
								<div style={{ fontSize: '0.9rem' }}>
									Written by{' '}
									<a
										href={`https://www.themoviedb.org/u/${review.author}`}
										className="link"
									>
										<strong>{review.author}</strong>
									</a>{' '}
									on{' '}
									{new Date(review.created_at).toLocaleString('default', {
										month: 'short',
										day: 'numeric',
										year: 'numeric',
									})}
								</div>
							</div>
						</div>
					</div>
					<div className="row justify-content-end">
						<p className="col col-md-10 pb-4">
							{review.content.length <= 500
								? review.content
								: review.content.substring(0, 500)}
							...
							<a href={review.url} className="link-secondary">
								read the rest.
							</a>
						</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Reviews
