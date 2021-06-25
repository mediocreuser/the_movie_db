import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './moviesSlice'

export default configureStore({
	reducer: {
		movies: movieSlice,
	},
})
