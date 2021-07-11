import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: { api_key: 'fb02210959ba63bd41cf2c22114664e4' },
})

class API {
	async getTrending(
		mediaType, // String -> 123_movie | tv | person
		timeWindow // String -> week | day
	) {
		return await instance
			.get(`trending/${mediaType}/${timeWindow}`)
			.then((response) => response.data.results)
	}

	async getPopular(mediaType) {
		return await instance
			.get(`${mediaType}/popular`)
			.then((response) => response.data.results)
	}

	async discover(mediaType, params) {
		return await instance
			.get(
				`discover/${mediaType}`,
				{ params }
				//
			)
			.then((response) => response.data)
	}

	async getGenres(mediaType) {
		return await instance.get(`genre/${mediaType}/list`).then((response) => response.data)
	}

	async searchKeywords(string) {
		return await instance
			.get(`search/keyword?query=${string}`)
			.then(({ data }) => data.results)
	}

	async getDetails(mediaType, id) {
		return await instance.get(`${mediaType}/${id}`).then(({ data }) => data)
	}

	async getVideos(mediaType, id) {
		return await instance
			.get(`${mediaType}/${id}/videos`)
			.then(({ data }) => data.results)
	}

	async getCredits(mediaType, id) {
		return await instance.get(`${mediaType}/${id}/credits`).then(({ data }) => data)
	}

	async getExternalIDs(mediaType, id) {
		return await instance.get(`${mediaType}/${id}/external_ids`).then(({ data }) => data)
	}

	async getKeywords(mediaType, id) {
		return await instance.get(`${mediaType}/${id}/keywords`).then(({ data }) => {
			if (data?.results) return data.results
			if (data?.keywords) return data.keywords
		})
	}

	async getReviews(mediaType, id) {
		return await instance
			.get(`${mediaType}/${id}/reviews`)
			.then(({ data }) => data.results)
	}

	async getImages(mediaType, id) {
		return await instance
			.get(`${mediaType}/${id}/images`)
			.then((response) => response.data)
	}

	async getRecommendations(mediaType, id) {
		return await instance
			.get(`${mediaType}/${id}/recommendations`)
			.then((response) => response.data.results)
	}
}

export default new API()
