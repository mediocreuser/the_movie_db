import React from 'react'
import { Link } from 'react-router-dom'
import { Result, Button } from 'antd'

const ErrorPage = () => {
	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Button type="primary">
					<Link to="/" className="text-decoration-none">
						Back Home
					</Link>
				</Button>
			}
		/>
	)
}

export default ErrorPage
