import React from 'react'

import { v4 as uuid } from 'uuid'
import SwiperCore, { A11y, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../Card'

const PosterSlider = ({ items }) => {
	SwiperCore.use([Pagination, A11y])

	return (
		<Swiper
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
				992: {
					slidesPerView: 4,
				},
				1200: {
					slidesPerView: 5,
				},
			}}
		>
			{items &&
				items.map((item) => (
					<SwiperSlide key={uuid()}>
						<Card item={item} />
					</SwiperSlide>
				))}
		</Swiper>
	)
}

export default PosterSlider
