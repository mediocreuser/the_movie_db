import { useCallback, useEffect, useState } from 'react'
import API from '../api/api'

export default function useTrending() {
	const [trending, setTrending] = useState({
		day: [],
		week: [],
		errors: {},
	})

	const fetchTrending = useCallback(async () => {
		const state = {
			day: [],
			week: [],
			errors: {
				day: false,
				week: false,
			},
		}

		for (const element of arguments) {
			if (element) {
				await API.getTrending(element, 'day')
					.then((results) => state.day.push(...results))
					.catch((error) => (state.errors.day = error))

				await API.getTrending(element, 'week')
					.then((results) => state.week.push(...results))
					.catch((error) => (state.errors.week = error))
			}
		}

		return state
	}, [])

	useEffect(() => {
		fetchTrending().then((result) => setTrending(result))
	}, [fetchTrending])

	return trending
}
