import React, { useContext, useEffect, useState } from 'react'
import { Space, Select } from 'antd'

import API from '../../api/api'
import { setKeywords } from './reducer'
import { Context } from './Filters'

const { Option } = Select

const Keywords = React.memo(() => {
	const dispatch = useContext(Context)

	const [options, setOptions] = useState([])
	const [keywords, setLocalKeywords] = useState([])

	useEffect(() => {
		if (keywords.length) {
			const IDs = keywords.map((item) => item.id)
			dispatch(setKeywords(IDs.join(',')))
		} else {
			dispatch(setKeywords(null))
		}
	}, [keywords, dispatch])

	// Search Keywords
	const handleSearch = (value) => {
		if (value) API.searchKeywords(value).then((data) => setOptions(data))
	}

	// Add ID to Keywords
	const handleSelect = (_, option) => {
		if (option.id) {
			setLocalKeywords((prevState) => [...prevState, option])
		}
	}

	// Remove ID from Keywords
	const handleDeselect = (_, LabeledValue) => {
		const value = LabeledValue.value
		const index = keywords.findIndex((item) => item.value === value)

		if (index !== -1)
			setLocalKeywords((prevState) => {
				prevState.splice(index, 1)
				return [...prevState]
			})
	}

	return (
		<Space direction="vertical" className="w-100">
			<h3 className="filters-title">Keywords</h3>
			<Select
				mode="tags"
				style={{ width: '100%' }}
				onSearch={handleSearch}
				onSelect={handleSelect}
				onDeselect={handleDeselect}
				tokenSeparators={[',']}
			>
				{!!options.length &&
					options.map((option) => (
						<Option key={option.id} value={option.name} id={option.id}>
							{option.name}
						</Option>
					))}
			</Select>
		</Space>
	)
})

export default Keywords
