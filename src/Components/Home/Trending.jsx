import React from 'react'
import styled from 'styled-components'

import { Tabs } from 'antd'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import useTrending from '../../hooks/useTrending'
import { shuffleArray } from '../../utils'

import PosterSlider from './PosterSlider'
import ErrorBlock from '../UIComponents/ErrorBlock'
import Image from '../../assets/trending-bg.svg'

const { TabPane } = Tabs

const Trending = ({ className }) => {
	const trending = useTrending('movie', 'tv')

	if (trending.errors.day && trending.errors.week) return null
	if (!trending.day.length || !trending.week.length)
		return (
			<div className="container d-flex justify-content-center">
				<Spin indicator={<LoadingOutlined style={{ fontsize: 50 }} />} />
			</div>
		)

	return (
		<div className="container">
			<h2
				style={{
					fontSize: '1.5em',
					fontWeight: 600,
				}}
			>
				Trending
			</h2>
			<Tabs defaultActiveKey="1">
				<TabPane tab="Today" key="1" className={className}>
					{trending.errors.day ? (
						<ErrorBlock error={trending.errors.day} />
					) : (
						!!trending.day.length && (
							<PosterSlider items={shuffleArray(trending.day).slice(0, 20)} />
						)
					)}
				</TabPane>
				<TabPane tab="This Week" key="2" className={className}>
					{trending.errors.week ? (
						<ErrorBlock error={trending.errors.week} />
					) : (
						!!trending.week.length && (
							<PosterSlider items={shuffleArray(trending.week).slice(0, 20)} />
						)
					)}
				</TabPane>
			</Tabs>
		</div>
	)
}

export default styled(Trending)`
	background-image: url(${Image});
	background-repeat: no-repeat;
	background-position: bottom;
`
