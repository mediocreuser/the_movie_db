import React from 'react'

import { v4 as uuid } from 'uuid'

import SwiperCore, { Scrollbar, A11y, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SRLWrapper } from 'simple-react-lightbox'

import ErrorBlock from '../../UIComponents/ErrorBlock'
import Spinner from '../../UIComponents/Spinner'
import preloader from '../../../assets/preloader_horizontal.jpg'

const Posters = ({ posters, error, fetching }) => {
	if (error) return <ErrorBlock error={error} />
	if (fetching) return <Spinner />

	SwiperCore.use([Scrollbar, A11y, Lazy])

	const lightboxOptions = {
		buttons: {
			showAutoplayButton: false,
			showNextButton: false,
			showPrevButton: false,
			showThumbnailsButton: false,
		},
		thumbnails: { showThumbnails: false },
		caption: { showCaption: false },
	}

	return (
		<div
			className="tab-pane fade show"
			id="posters"
			role="tabpanel"
			aria-labelledby="posters-tab"
		>
			{posters.length === 0 ? (
				<p className="py-3">
					We don't have any posters added to this movie. You can help by adding some!
				</p>
			) : (
				<Swiper
					lazy={true}
					preloadImages={false}
					spaceBetween={10}
					scrollbar={{ draggable: true }}
					slidesPerView={1}
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
					{posters.slice(0, 30).map((poster) => (
						<SwiperSlide key={uuid()}>
							<SRLWrapper options={lightboxOptions}>
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
									<a href={`https://www.themoviedb.org/t/p/original/${poster.file_path}`}>
										<img
											style={{
												height: '100%',
												objectFit: 'cover',
											}}
											data-srcset={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster.file_path}`}
											src={preloader}
											className="swiper-lazy"
											alt="poster"
										/>
									</a>
								</div>
							</SRLWrapper>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</div>
	)
}

export default Posters
