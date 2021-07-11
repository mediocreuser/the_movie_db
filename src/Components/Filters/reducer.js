// Actions
const SET_SORT = 'SET_SORT'
const SET_GENRES = 'SET_GENRES'
const SET_VOTE_AVERAGE = 'SET_VOTE_AVERAGE'
const SET_PRIMARY_RELEASE_DATE = 'PRIMARY_RELEASE_DATE'
const SET_FIRST_AIR_DATE = 'FIRST_AIR_DATE'
const SET_KEYWORDS = 'SET_KEYWORDS'

export const initialState = {
	sort_by: 'popularity.desc',
	with_genres: null,
	'vote_average.gte': null,
	'vote_average.lte': null,
	'primary_release_date.gte': null,
	'primary_release_date.lte': null,
	'first_air_date.gte': null,
	'first_air_date.lte': null,
	with_keywords: null,
}

// Reducer
const reducer = (state, action) => {
	const { payload } = action

	switch (action.type) {
		case SET_SORT:
			return { ...state, sort_by: payload }

		case SET_GENRES:
			return { ...state, with_genres: payload }

		case SET_VOTE_AVERAGE:
			return {
				...state,
				'vote_average.gte': payload[0],
				'vote_average.lte': payload[1],
			}

		case SET_PRIMARY_RELEASE_DATE:
			return {
				...state,
				'primary_release_date.gte': payload.gte,
				'primary_release_date.lte': payload.lte,
			}

		case SET_FIRST_AIR_DATE:
			return {
				...state,
				'first_air_date.gte': payload.gte,
				'first_air_date.lte': payload.lte,
			}

		case SET_KEYWORDS:
			return { ...state, with_keywords: payload }

		default:
			return state
	}
}

export default reducer

// Action Creators
export const setSort = (payload) => ({ type: SET_SORT, payload })
export const setGenres = (payload) => ({ type: SET_GENRES, payload })
export const setVoteAverage = (payload) => ({ type: SET_VOTE_AVERAGE, payload })
export const setPrimaryReleaseDate = (payload) => ({
	type: SET_PRIMARY_RELEASE_DATE,
	payload,
})
export const setFirstAirDate = (payload) => ({ type: SET_FIRST_AIR_DATE, payload })
export const setKeywords = (payload) => ({ type: SET_KEYWORDS, payload })
