import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Select, Space } from 'antd'

import { Context } from './Filters'
import { setSort } from './reducer'

const { Option } = Select

const Sort = React.memo(({ value }) => {
	const dispatch = useContext(Context)

	const handleChange = (value) => dispatch(setSort(value))

	return (
		<Space direction="vertical" className="w-100">
			<h3 className="filters-title">Sort Results By</h3>

			<Select className="w-100" defaultValue={value} onChange={handleChange}>
				<Option value="popularity.desc">Popularity Descending</Option>
				<Option value="popularity.asc">Popularity Ascending</Option>
				<Option value="vote_average.desc">Rating Descending</Option>
				<Option value="vote_average.asc">Rating Ascending</Option>
				<Option value="primary_release_date.desc">Release Date Descending</Option>
				<Option value="primary_release_date.asc">Release Date Ascending</Option>
				<Option value="title.asc">Title (A-Z)</Option>
				<Option value="title.desc">Title (Z-A)</Option>
			</Select>
		</Space>
	)
})

Sort.propTypes = { value: PropTypes.string.isRequired }

export default Sort
