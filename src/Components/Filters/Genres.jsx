import React, { useContext, useEffect, useState } from 'react'

import { Checkbox, Space } from 'antd'
import API from '../../api/api'

import useMediaType from '../../hooks/useMediaType'
import { setGenres } from './reducer'
import { Context } from './Filters'

const Genres = React.memo(() => {
	const dispatch = useContext(Context)

	const [genres, setLocalGenres] = useState([])
	const [selected, setSelected] = useState([])

	const mediaType = useMediaType()

	// Load Genres
	useEffect(() => {
		API.getGenres(mediaType).then((data) => setLocalGenres(data.genres))
	}, [mediaType])

	// Set Genres to useReducer state
	useEffect(() => {
		if (selected.length) dispatch(setGenres(selected.join(',')))
		else dispatch(setGenres(null))
	}, [selected, dispatch])

	const handleChange = (e) => {
		setSelected((oldArray) => {
			// Add ID
			if (e.target.checked) return [...oldArray, e.target.id]

			// Remove ID
			const index = selected.findIndex((id) => id === e.target.id)
			const arr = [...oldArray]
			arr.splice(index, 1)

			return arr
		})
	}

	return (
		<Space direction="vertical">
			<h3 className="filters-title">Genres</h3>
			<Space direction="vertical">
				{genres.map((genre) => (
					<Checkbox key={genre.id} id={genre.id} onChange={handleChange}>
						{genre.name}
					</Checkbox>
				))}
			</Space>
		</Space>
	)
})

export default Genres
