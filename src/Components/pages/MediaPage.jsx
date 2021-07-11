import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import useMediaType from '../../hooks/useMediaType'
import API from '../../api/api'

import Filters from '../Filters/Filters'
import List from '../List'
import BackTop from '../UIComponents/BackTop'
const TvShowsPage = () => {
	const mediaType = useMediaType()

	const [list, setList] = useState([])
	const [error, setError] = useState(null)
	const [key, setKey] = useState(null)
	const [params, setParams] = useState({})

	useEffect(() => {
		if (key === null) setKey(uuid())
	}, [key])

	// Rerender Component List
	useEffect(() => {
		setList([])
		setKey(uuid())
		setParams({})
	}, [mediaType])

	// Search With Filters
	useEffect(() => {
		setList([])
		setKey(uuid())
	}, [params])

	const fetchData = (page) => {
		return API.discover(mediaType, { page, ...params })
			.then((res) => {
				setList((prevState) => [...prevState, ...res.results])
			})
			.catch((error) => {
				setError(error)
			})
	}

	const provideParams = (params) => setParams(params)

	return (
		<div className="container">
			<div className="row">
				<Filters provideParams={provideParams} />
				<List error={error} uniqueKey={key} fetchData={fetchData} list={list} />
			</div>
			<BackTop />
		</div>
	)
}

export default TvShowsPage
