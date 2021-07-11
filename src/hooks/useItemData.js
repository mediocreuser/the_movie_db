import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import API from '../api/api'
import useMediaType from './useMediaType'

export default function useItemData() {
	const mediaType = useMediaType()
	const { id } = useParams()

	const [state, setState] = useState({
		details: {},
		videos: [],
		credits: {},
		externalIDs: {},
		keywords: {},
		errors: {
			details: null,
			videos: null,
			credits: null,
			externalIDs: null,
			keywords: null,
		},
	})

	const fetchData = useCallback(async () => {
		const state = {
			details: {},
			videos: [],
			credits: {},
			externalIDs: {},
			keywords: {},
			errors: {
				details: null,
				videos: null,
				credits: null,
				externalIDs: null,
				keywords: null,
			},
		}

		await API.getDetails(mediaType, id)
			.then((data) => (state.details = data))
			.catch((error) => (state.errors.details = error))

		await API.getVideos(mediaType, id)
			.then((data) => (state.videos = data))
			.catch((error) => (state.errors.videos = error))

		await API.getCredits(mediaType, id)
			.then((data) => (state.credits = { cast: data.cast, crew: data.crew }))
			.catch((error) => (state.errors.credits = error))

		await API.getExternalIDs(mediaType, id)
			.then((data) => (state.externalIDs = data))
			.catch((error) => (state.errors.externalIDs = error))

		await API.getKeywords(mediaType, id)
			.then((data) => (state.keywords = data))
			.catch((error) => (state.errors.keywords = error))

		return state
	}, [mediaType, id])

	useEffect(() => {
		fetchData().then((result) => setState(result))
	}, [fetchData, mediaType, id])

	return state
}
