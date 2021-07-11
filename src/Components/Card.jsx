import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Card as AntCard } from 'antd'
import { StarOutlined } from '@ant-design/icons'

import preloader from '../assets/preloader_poster.jpg'

const { Meta } = AntCard

const Card = ({ item, className }) => {
	return (
		<AntCard
			style={{
				margin: '0 auto',
			}}
			className={className}
			hoverable
			cover={
				<Link to={item.first_air_date ? `/tv/${item.id}` : `/movie/${item.id}`}>
					<img
						style={{ width: '100%' }}
						alt="Poster"
						src={
							item.poster_path
								? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`
								: preloader
						}
					/>
				</Link>
			}
		>
			<Meta
				title={
					<Link
						to={item.first_air_date ? `/tv/${item.id}` : `/movie/${item.id}`}
						className="link text-center"
						style={{ display: 'inherit' }}
					>
						{item.original_title ?? item.name}
					</Link>
				}
				description={
					<div className="d-flex justify-content-between">
						{(item.release_date || item.first_air_date) && (
							<span>
								{new Date(item.release_date || item.first_air_date).toLocaleString(
									'default',
									{
										month: 'short',
										day: 'numeric',
										year: 'numeric',
									}
								)}
							</span>
						)}
						<span className="d-flex align-items-center">
							<StarOutlined style={{ paddingRight: 5 }} />{' '}
							{item.vote_average ? item.vote_average : 'NR'}
						</span>
					</div>
				}
			/>
		</AntCard>
	)
}

export default styled(Card)`
	padding: 0;
	width: 100%;
	min-width: 190px;
	max-width: 300px;
	height: auto;

	@media (min-width: 576px) {
		width: 100%;
	}

	@media (min-width: 768px) {
		max-width: 200px;
		width: 25%;
	}
`
