import React from 'react'
import ModalVideo from 'react-modal-video'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../redux/modalSlice'
import 'react-modal-video/scss/modal-video.scss'

const Modal = () => {
	const dispatch = useDispatch()

	const videoId = useSelector(({ modal }) => modal.videoId)
	const isOpen = useSelector(({ modal }) => modal.isOpen)

	return (
		<ModalVideo
			channel="youtube"
			autoplay
			isOpen={isOpen}
			videoId={videoId}
			onClose={() => dispatch(closeModal())}
		/>
	)
}
export default Modal
