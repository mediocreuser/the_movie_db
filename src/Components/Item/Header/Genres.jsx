import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Context } from '../../pages/ItemPage'

const Genres = React.memo(() => {
	const {
		details: { genres },
	} = useContext(Context)

	if (!genres?.length) return null

	return (
		<span className="genres">
			{genres.map((genre, i) => {
				if (genres.length - 1 === i) {
					return (
						<Link key={genre.id} to="/genres" className="link-light text-decoration-none">
							{genre.name}
						</Link>
					)
				}
				return (
					<Link key={genre.id} to="/genres" className="link-light text-decoration-none">
						{genre.name},{' '}
					</Link>
				)
			})}
		</span>
	)
})

export default Genres
