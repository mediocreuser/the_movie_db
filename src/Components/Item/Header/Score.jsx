import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from '../../pages/ItemPage'

const Score = React.memo(() => {
	const {
		details: { vote_average, vote_count },
	} = useContext(Context)

	return (
		<div>
			<Average>{vote_average}</Average> <Count>{vote_count}</Count>
		</div>
	)
})

export default Score

const Average = styled.span`
	color: #093;
	font-size: 2em;
	font-weight: 700;
`

const Count = styled.span`
	color: hsla(0, 0%, 98.8%, 0.4);
	margin-left: 4px;
	font-size: 1.1em;
`
