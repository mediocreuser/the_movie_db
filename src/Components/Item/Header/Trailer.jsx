import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'

import { PlayFill } from 'react-bootstrap-icons'
import styled from 'styled-components'

import { openModal } from '../../../redux/modalSlice'

import { Context } from '../../pages/ItemPage'

const Trailer = React.memo(({ className }) => {
	const { videos } = useContext(Context)

	const dispatch = useDispatch()

	if (!videos?.length) return null

	const trailer = videos.find((obj) => obj.type === 'Trailer' || 'Teaser').key

	return (
		<span
			className={`${className} beforeDot`}
			onClick={() => dispatch(openModal(trailer))}
		>
			Play Trailer <PlayFill />
		</span>
	)
})

export default styled(Trailer)`
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
`
