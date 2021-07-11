import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd'
import PosterSlider from './PosterSlider'
import API from '../../api/api'

const { TabPane } = Tabs

const Popular = () => {
	const [movies, setMovies] = useState(null)
	const [TVShows, setTVShows] = useState(null)

	useEffect(() => {
		API.getPopular('movie').then((results) => {
			setMovies(results)
		})

		API.getPopular('tv').then((results) => {
			setTVShows(results)
		})
	}, [])

	return (
		<div className="container">
			<h2
				style={{
					fontSize: '1.5em',
					fontWeight: 600,
				}}
			>
				What's Popular
			</h2>
			<Tabs defaultActiveKey="1">
				<TabPane tab="In Theaters" key="1">
					<PosterSlider items={movies} />
				</TabPane>
				<TabPane tab="On TV" key="2">
					<PosterSlider items={TVShows} />
				</TabPane>
			</Tabs>
		</div>
	)
}

export default Popular
