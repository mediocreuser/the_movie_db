import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Tooltip } from 'antd'
import {
	Twitter,
	Facebook,
	Instagram,
	Film,
	Link as BootstrapLink,
} from 'react-bootstrap-icons'

import { Context } from '../pages/ItemPage'
import ErrorBlock from '../UIComponents/ErrorBlock'

const SideBar = () => {
	const {
		details: { homepage, status, original_language, budget, revenue },
		keywords,
		externalIDs: { imdb_id, facebook_id, instagram_id, twitter_id },
		errors,
	} = useContext(Context)

	if (errors.externalIDs) return <ErrorBlock error={errors.externalIDs} />
	if (errors.keywords) return <ErrorBlock error={errors.keywords} />

	return (
		<div className="col-lg-12 col-xl-3">
			<aside className="d-flex justify-content-between p-3">
				{facebook_id && (
					<Tooltip title="Visit Facebook">
						<a
							className="link"
							href={`https://www.facebook.com/${facebook_id}`}
							target="_blank"
							rel="noreferrer"
						>
							<Facebook size={22} />
						</a>
					</Tooltip>
				)}
				{twitter_id && (
					<Tooltip title="Visit Twitter">
						<a
							className="link"
							href={`https://twitter.com/${twitter_id}`}
							target="_blank"
							rel="noreferrer"
						>
							<Twitter size={22} />
						</a>
					</Tooltip>
				)}
				{instagram_id && (
					<Tooltip title="Visit Instagram">
						<a
							className="link"
							href={`https://www.instagram.com/${instagram_id}/`}
							target="_blank"
							rel="noreferrer"
						>
							<Instagram size={22} />
						</a>
					</Tooltip>
				)}
				{imdb_id && (
					<Tooltip title="Visit IMDb">
						<a
							className="link"
							href={`https://www.imdb.com/title/${imdb_id}/`}
							target="_blank"
							rel="noreferrer"
						>
							<Film size={22} />
						</a>
					</Tooltip>
				)}

				{homepage && (
					<Tooltip title="Visit Homepage">
						<a
							className="link dividerLeft"
							href={homepage}
							target="_blank"
							rel="noreferrer"
						>
							<BootstrapLink size={22} />
						</a>
					</Tooltip>
				)}
			</aside>
			<aside className="p-3 pt-0 dividerBottom">
				<p className="d-flex flex-column">
					<strong>Status</strong>
					<span>{status ?? '-'}</span>
				</p>
				<p className="d-flex flex-column">
					<strong>Original Language</strong>
					<span>{original_language ?? '-'}</span>
				</p>
				{budget && (
					<p className="d-flex flex-column">
						<strong>Budget</strong>
						<span>{budget !== 0 ? `$${budget}` : '-'}</span>
					</p>
				)}

				{revenue && (
					<p className="d-flex flex-column">
						<strong>Revenue</strong>
						<span>{revenue !== 0 ? `$${revenue}` : '-'}</span>
					</p>
				)}
			</aside>
			<aside className="p-3">
				<h4>Keywords</h4>
				<div>
					{keywords?.length
						? keywords.map((keyword) => (
								<Link
									key={keyword.id}
									className="btn btn-light btn-sm m-1"
									to={`'/`}
									role="button"
								>
									{keyword.name}
								</Link>
						  ))
						: '-'}
				</div>
			</aside>
		</div>
	)
}

export default SideBar
