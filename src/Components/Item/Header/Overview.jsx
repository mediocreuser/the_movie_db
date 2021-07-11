import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from '../../pages/ItemPage'

const Overview = React.memo(() => {
	const {
		details: { overview, tagline },
	} = useContext(Context)

	if (!overview) return null

	return (
		<div className="mt-3 py-4 container-blur">
			<Tagline>{tagline}</Tagline>
			<Heading>Overview</Heading>
			<div className="overview" dir="auto">
				<p style={{ lineHeight: 1.2, margin: 0 }}>{overview}</p>
			</div>
		</div>
	)
})

const Tagline = styled.h3`
	font-size: 1.1em;
	font-weight: 400;
	font-style: italic;
	color: white;
	opacity: 0.7;
`

const Heading = styled.h3`
	font-weight: 600;
	font-size: 1.3em;
	color: white;
`

export default Overview
