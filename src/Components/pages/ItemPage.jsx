import React from 'react'

import ErrorBlock from '../UIComponents/ErrorBlock'

import Header from '../Item/Header/Header'
import Cast from '../Item/Cast'
import Social from '../Item/Social'
import Media from '../Item/Media/Media'
import Recommendations from '../Item/Recommendations'
import SideBar from '../Item/SideBar'
import useItemData from '../../hooks/useItemData'

export const Context = React.createContext('')

const ItemPage = () => {
	const data = useItemData()

	if (data.errors.details) return <ErrorBlock error={data.errors.details} />

	return (
		<Context.Provider value={{ ...data }}>
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-xl-9">
						<Cast />
						<Social />
						<Media />
						<Recommendations />
					</div>
					<SideBar />
				</div>
			</div>
		</Context.Provider>
	)
}

export default ItemPage
