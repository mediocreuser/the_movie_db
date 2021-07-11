import React, { useContext, useEffect, useState } from 'react'

import { DatePicker, Space } from 'antd'

import { Context } from './Filters'
import useMediaType from '../../hooks/useMediaType'
import { setPrimaryReleaseDate, setFirstAirDate } from './reducer'

const ReleaseDates = React.memo(() => {
	const dispatch = useContext(Context)

	const mediaType = useMediaType()
	const [dates, setDates] = useState({ gte: null, lte: null })

	useEffect(() => {
		if (mediaType === 'tv') dispatch(setFirstAirDate(dates))
		if (mediaType === 'movie') dispatch(setPrimaryReleaseDate(dates))
	}, [dates, mediaType, dispatch])

	const handleChangeGte = (date) => {
		setDates((prevState) => ({
			...prevState,
			gte: date ? new Date(date).toISOString() : null,
		}))
	}

	const handleChangeLte = (date) => {
		setDates((prevState) => ({
			...prevState,
			lte: date ? new Date(date).toISOString() : null,
		}))
	}

	return (
		<Space direction="vertical" size={12} style={{ width: '100%' }}>
			<h3 className="filters-title">
				{mediaType === 'tv' && 'Air Dates'}
				{mediaType === 'movie' && 'Release Dates'}
			</h3>
			<div className="d-flex justify-content-between ps-3">
				<span className="info-text">from</span>

				<DatePicker onChange={handleChangeGte} />
			</div>
			<div className="d-flex justify-content-between ps-3">
				<span className="info-text">to</span>
				<DatePicker onChange={handleChangeLte} />
			</div>
		</Space>
	)
})

export default ReleaseDates
