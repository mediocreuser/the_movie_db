import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'

import SwiperCore, { Scrollbar, A11y, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SRLWrapper } from 'simple-react-lightbox'

import ErrorBlock from '../../UIComponents/ErrorBlock'
import Spinner from '../../UIComponents/Spinner'
import preloader from '../../../assets/preloader_horizontal.jpg'

const Backdrops = ({ backdrops, error, fetching }) => {
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
			id="backdrop"
			role="tabpanel"
			aria-labelledby="backdrop-tab"
		>
			{backdrops.length === 0 ? (
				<p className="py-3">
					We don't have any backdrops added to this movie. You can help by adding some!
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
				>
					{backdrops.slice(0, 30).map((backdrop) => (
						<SwiperSlide key={uuid()}>
							<SRLWrapper options={lightboxOptions}>
								<div className="card-backdrop">
									<a
										href={`https://www.themoviedb.org/t/p/original/${backdrop.file_path}`}
									>
										<img
											style={{ objectFit: 'contain' }}
											data-srcset={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${backdrop.file_path}`}
											src={preloader}
											className="swiper-lazy"
											alt="Backdrop"
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

Backdrops.propTypes = {
	backdrops: PropTypes.array,
	fetching: PropTypes.bool.isRequired,
}

export default Backdrops
