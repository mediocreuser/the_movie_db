import React, { useContext, useEffect, useState } from 'react'
import { Space, Slider } from 'antd'

import { Context } from './Filters'
import { setVoteAverage } from './reducer'

const Score = React.memo(() => {
	const dispatch = useContext(Context)

	const [range, setRange] = useState([])

	const handleChange = (e) => setRange(e)

	useEffect(() => {
		if (range.length) dispatch(setVoteAverage(range))
		else dispatch(setVoteAverage([null, null]))
	}, [dispatch, range])

	return (
		<Space direction="vertical" className="mt-2 w-100">
			<div className="d-flex justify-content-between">
				<h3 className="filters-title m-0">User Score</h3>
				{!!range.length && (
					<span className="info-text">
						from {range[0]} to {range[1]}
					</span>
				)}
			</div>
			<Slider range step={1} max={10} onChange={handleChange} />
		</Space>
	)
})

export default Score
