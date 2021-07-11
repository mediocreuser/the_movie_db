import React, { useContext } from 'react'

import { Context } from '../../pages/ItemPage'

const Crew = React.memo(() => {
	const {
		credits: { crew },
		errors,
	} = useContext(Context)

	if (!crew || errors.credits) return null

	const findMembers = (job) => {
		const array = crew.filter((obj) => obj.job === job)
		return array.length ? array : false
	}

	const crewMapping = (array) => {
		return (
			<div>
				{array[0].job}:{' '}
				{array.map((member, i) => {
					if (array.length - 1 === i) return <span key={member.id}>{member.name}</span>
					return <span key={member.id}>{member.name}, </span>
				})}
			</div>
		)
	}

	// Crew
	const director = findMembers('Director')
	const producer = findMembers('Producer')
	const story = findMembers('Story')
	const screenplay = findMembers('Screenplay')
	const composer = findMembers('Original Music Composer')
	const art = findMembers('Art Direction')
	const editor = findMembers('Editor')

	return (
		<div className="mt-3 container-blur">
			{director && crewMapping(director)}
			{producer && crewMapping(producer)}
			{story && crewMapping(story)}
			{screenplay && crewMapping(screenplay)}
			{composer && crewMapping(composer)}
			{art && crewMapping(art)}
			{editor && crewMapping(editor)}
		</div>
	)
})

export default Crew
