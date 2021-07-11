import React from 'react'
import styled from 'styled-components'
import { Film } from 'react-bootstrap-icons'

const FilmOverlay = ({ className }) => {
	return (
		<div className={className}>
			<Film />
		</div>
	)
}

export default styled(FilmOverlay)`
	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;

	cursor: pointer;
	background-color: transparent;

	transition: background-color 0.15s;

	&:hover {
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(2px);

		& svg {
			fill: rgba(255, 255, 255, 0.7);
		}
	}

	svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		fill: transparent;
		width: 33px;
		height: 33px;

		transition: fill 0.15s;
	}
`
