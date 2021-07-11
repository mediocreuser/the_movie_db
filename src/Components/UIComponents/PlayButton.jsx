import React from 'react'
import styled from 'styled-components'
import { PlayFill } from 'react-bootstrap-icons'

const PlayButton = ({ className }) => {
	return (
		<div className={className}>
			<PlayFill />
		</div>
	)
}

export default styled(PlayButton)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 67px;
	height: 67px;

	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.7);
	border-radius: 100px;

	&:hover svg {
		fill: rgba(255, 255, 255, 0.7);
	}

	svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		fill: white;
		width: 33px;
		height: 33px;

		transition: fill 0.15s;
	}
`
