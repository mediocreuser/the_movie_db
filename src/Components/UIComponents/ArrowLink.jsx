import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'react-bootstrap-icons'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ArrowLink = ({ path, children, className }) => {
	return (
		<Link to={path} className={className}>
			<span>{children}</span>
			<ArrowRight />
		</Link>
	)
}

export default styled(ArrowLink)`
	font-weight: bold;
	font-size: 1em;
	text-decoration: none;
	color: black;
	padding-right: 20px;
	position: relative;
	transition: opacity 0.3s;

	&:hover {
		color: black;
		opacity: 0.7;

		svg {
			transform: translate(30%, -50%);
		}
	}

	svg {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		transition: transform 0.3s;
	}
`

ArrowLink.propTypes = {
	path: PropTypes.string.isRequired,
}
