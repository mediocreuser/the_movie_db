import React, { useContext } from 'react'

import { Context } from '../../pages/ItemPage'

import Title from './Title'
import Genres from './Genres'
import Trailer from './Trailer'
import Overview from './Overview'
import Crew from './Crew'

const Details = () => {
	const {
		details: { runtime, episode_run_time },
	} = useContext(Context)

	return (
		<div className="col text-white">
			<Title />
			<div className="mt-3 container-blur">
				<Genres />

				{runtime && (
					<span className="beforeDot">
						{`${Math.trunc(runtime / 60)}h ${runtime % 60}m`}
					</span>
				)}
				{episode_run_time?.length && (
					<span className="beforeDot">
						{`${Math.trunc(episode_run_time[0] / 60)}h ${episode_run_time[0] % 60}m`}
					</span>
				)}

				<Trailer />
			</div>
			<Overview />
			<Crew />
		</div>
	)
}

export default Details
