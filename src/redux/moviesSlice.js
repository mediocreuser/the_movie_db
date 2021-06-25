import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { movieAPI } from '../api/api'

// Thunks
export const fetchMovies = createAsyncThunk(
	'movies/fetchMovies',
	async () => {
		return await movieAPI.discover()
	}
	// prettier
)

export const fetchDetail = createAsyncThunk(
	'movies/fetchDetail',
	async (id) => {
		return await movieAPI.getDetails(id)
	}
	// prettier
)

const moviesSlice = createSlice({
	name: 'movies',
	initialState: {
		list: [],
		page: 1,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
			state.list = payload
			state.page = state.page + 1
		})
	},
})

export default moviesSlice.reducer

export const { set: setMovies } = moviesSlice.actions
