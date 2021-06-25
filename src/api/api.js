/*

API Key (v3 auth): fb02210959ba63bd41cf2c22114664e4

API Read Access Token (v4 auth): eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjAyMjEwOTU5YmE2M2JkNDFjZjJjMjIxMTQ2NjRlNCIsInN1YiI6IjYwYzBhNGJkZjVjODI0MDA0MDVkMTNlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._NTNgKShozKtNALvfb-sB89WVfHtcdixrC7sVQJjMoY

example: https://api.themoviedb.org/3/movie/550?api_key=fb02210959ba63bd41cf2c22114664e4


https://api.themoviedb.org/3/discover/movie?api_key=fb02210959ba63bd41cf2c22114664e4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate

* * */

import axios from 'axios'

const APIKey_v3auth = 'fb02210959ba63bd41cf2c22114664e4'

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/',
})

export const getMovies = async () => {
	try {
		return await instance
			.get(
				'3/discover/movie?api_key=fb02210959ba63bd41cf2c22114664e4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate'
			)
			.then((response) => response.data.results)
	} catch (error) {
		console.log(error)
	}
}

export const movieAPI = {
	discover: async () => {
		try {
			return await instance
				.get(
					'3/discover/movie?api_key=fb02210959ba63bd41cf2c22114664e4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate'
				)
				.then((response) => response.data.results)
		} catch (error) {
			console.log(error)
		}
	},

	getDetails: async (id) => {
		return await instance
			.get(`3/movie/${id}?api_key=${APIKey_v3auth}&language=en-US`)
			.then((response) => response.data)
	},

	getCredits: async (id) => {
		return await instance
			.get(
				`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKey_v3auth}&language=en-US`
			)
			.then((response) => response.data)
	},
}
