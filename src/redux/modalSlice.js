import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		isOpen: false,
		videoId: '',
	},
	reducers: {
		openModal: (state, { payload }) => {
			state.videoId = payload
			state.isOpen = true
		},
		closeModal: (state) => {
			state.isOpen = false
		},
	},
})

export default modalSlice.reducer

export const { openModal, closeModal } = modalSlice.actions
