import React, { useContext, useEffect, useState } from 'react'

import { Context } from '../../pages/ItemPage'
import API from '../../../api/api'

import Videos from './Videos'
import Backdrops from './Backdrops'
import useMediaType from '../../../hooks/useMediaType'
import Posters from './Posters'

const Media = () => {
	const {
		details: { id },
	} = useContext(Context)
	const mediaType = useMediaType()

	const [images, setImages] = useState([])
	const [error, setError] = useState(null)
	const [fetching, setFetching] = useState(true)

	useEffect(() => {
		const fetchImages = async (mediaType, id) => {
			await API.getImages(mediaType, id)
				.then((data) => setImages(data))
				.catch((error) => setError(error))

			setFetching(false)
		}

		if (id) fetchImages(mediaType, id)
	}, [mediaType, id])

	return (
		<div className="mt-4 pb-4 dividerBottom">
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item" role="presentation">
					<h3 className="h5 mt-2 px-3">
						<strong>Media</strong>
					</h3>
				</li>
				<li className="nav-item" role="presentation">
					<button
						className="nav-link active"
						id="videos-tab"
						data-bs-toggle="tab"
						data-bs-target="#videos"
						type="button"
						role="tab"
						aria-controls="videos"
						aria-selected="true"
					>
						Videos
					</button>
				</li>
				<li className="nav-item" role="presentation">
					<button
						className="nav-link"
						id="backdrop-tab"
						data-bs-toggle="tab"
						data-bs-target="#backdrop"
						type="button"
						role="tab"
						aria-controls="backdrops"
						aria-selected="true"
					>
						Backdrops
					</button>
				</li>
				<li className="nav-item" role="presentation">
					<button
						className="nav-link"
						id="posters-tab"
						data-bs-toggle="tab"
						data-bs-target="#posters"
						type="button"
						role="tab"
						aria-controls="posters"
						aria-selected="true"
					>
						Posters
					</button>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<Videos />
				<Backdrops backdrops={images.backdrops} error={error} fetching={fetching} />
				<Posters posters={images.posters} error={error} fetching={fetching} />
			</div>
		</div>
	)
}

export default Media
