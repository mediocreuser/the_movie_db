import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const Spinner = () => {
	return (
		<div className="w-100 d-flex justify-content-center my-4">
			<Spin
				size="large"
				tip="Loading..."
				indicator={<LoadingOutlined className="mb-2" />}
			/>
		</div>
	)
}

export default Spinner
