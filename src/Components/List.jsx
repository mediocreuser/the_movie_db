import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import InfiniteScroll from 'react-infinite-scroller'

import ErrorBlock from './UIComponents/ErrorBlock'
import Spinner from './UIComponents/Spinner'
import Card from './Card'

const List = ({ error, uniqueKey, fetchData, list }) => {
	const items = []
	for (const item of list) {
		items.push(<Card key={uuid()} item={item} />)
	}

	return (
		<div className="col-lg-9">
			{error ? (
				<ErrorBlock error={error} />
			) : (
				<InfiniteScroll
					key={uniqueKey}
					initialLoad
					pageStart={0}
					loadMore={fetchData}
					hasMore={true}
					loader={<Spinner key={uuid()} />}
				>
					<div className="row row-cols-auto gap-3 py-4">{items}</div>
				</InfiniteScroll>
			)}
		</div>
	)
}

List.propTypes = {
	error: PropTypes.object,
	uniqueKey: PropTypes.string,
	fetchData: PropTypes.func,
	list: PropTypes.array,
}

export default List
