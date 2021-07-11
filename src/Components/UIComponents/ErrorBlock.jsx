import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'antd'

const ErrorBlock = ({ error }) => {
	return (
		<div className="container my-3">
			<Alert message="Error" description={error.message} type="error" showIcon />
		</div>
	)
}

ErrorBlock.propTypes = {
	error: PropTypes.object.isRequired,
}

export default ErrorBlock
