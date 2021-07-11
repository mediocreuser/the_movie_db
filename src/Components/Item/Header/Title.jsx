import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from '../../pages/ItemPage'
import Score from './Score'

const Title = React.memo(({ className }) => {
	const {
		details: { original_title, name, release_date, first_air_date },
	} = useContext(Context)

	return (
		<div className="d-flex mt-3 mt-lg-0 justify-content-between align-items-center container-blur">
			<h1 className={className}>
				<span>{original_title ?? name}</span>{' '}
				{release_date && <Year>{parseInt(release_date)}</Year>}
				{first_air_date && <Year>{parseInt(first_air_date)}</Year>}
			</h1>
			<Score />
		</div>
	)
})

export default styled(Title)`
	font-size: 1.5rem;
	font-weight: 700;
	margin: 20px;
	color: white;

	@media (min-width: 576px) {
		font-size: 2.2rem;
	}
`

const Year = styled.span`
	font-weight: 400;
	opacity: 0.8;
`
