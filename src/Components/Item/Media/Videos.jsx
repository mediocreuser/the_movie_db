import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'

import SwiperCore, { Scrollbar, A11y, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Context } from '../../pages/ItemPage'

import { openModal } from '../../../redux/modalSlice'
import ErrorBlock from '../../UIComponents/ErrorBlock'
import PlayButton from '../../UIComponents/PlayButton'
import preloader from '../../../assets/preloader_horizontal.jpg'

const Videos = () => {
	const { videos, errors } = useContext(Context)

	const dispatch = useDispatch()

	if (errors.videos) return <ErrorBlock error={errors.videos} />

	SwiperCore.use([Scrollbar, A11y, Lazy])

	return (
		<div
			className="tab-pane fade show active"
			id="videos"
			role="tabpanel"
			aria-labelledby="videos-tab"
		>
			{videos.length === 0 ? (
				<p className="py-3">
					We don't have any videos added to this movie. You can help by adding some!
				</p>
			) : (
				<Swiper
					lazy={true}
					preloadImages={false}
					spaceBetween={10}
					scrollbar={{ draggable: true }}
					slidesPerView={1}
					observer={true}
					observeParents={true}
				>
					{videos.slice(0, 30).map((video) => (
						<SwiperSlide key={video.id}>
							<div className="card-backdrop" style={{ position: 'relative' }}>
								<img
									className="swiper-lazy"
									data-srcset={`https://img.youtube.com/vi/${video.key}/maxresdefault.jpg`}
									src={preloader}
									alt="Backdrop"
								/>
								<div onClick={() => dispatch(openModal(video.key))}>
									<PlayButton />
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</div>
	)
}

export default Videos
