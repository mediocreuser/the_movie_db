import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import personPlaceholder from '../../assets/personPlaceholder.svg'

const Avatar = ({ url = null, width, height, rounding = false }) => {
	const transformUrl = (url) => {
		if (url === null) return personPlaceholder

		if (url.includes('gravatar')) return url.substring(1, url.length - 1)
		return `https://www.themoviedb.org/t/p/w${width}_and_h${height}_face${url}`
	}

	return (
		<Container
			path={transformUrl(url)}
			width={width}
			height={height}
			rounding={rounding}
		/>
	)
}

const Container = styled.div`
	margin: 0 auto;

	width: 100%;
	max-width: ${({ width }) => `${width}px`};

	max-height: 100%;
	height: ${({ height }) => `${height}px`};

	border-radius: ${({ rounding }) => (rounding ? '100px' : 0)};

	background-color: #dbdbdb;
	background-image: url(${({ path }) => path});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`

Avatar.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	rounding: PropTypes.bool,
}

export default Avatar
