import React from 'react'

import { Space } from 'antd'

import Header from '../Home/Header'
import Popular from '../Home/Popular'
import Trending from '../Home/Trending'

const HomePage = () => {
	return (
		<Space direction="vertical" size={30} style={{ width: '100%' }} className="mb-5">
			<Header />
			<Popular />
			<Trending />
		</Space>
	)
}

export default HomePage
