import React from 'react'
import { BackTop as BackTopAntd } from 'antd'
import { ArrowUpSquareFill } from 'react-bootstrap-icons'
import styled from 'styled-components'

const BackTop = ({ className }) => {
	return (
		<BackTopAntd>
			<div>
				<ArrowUpSquareFill size={30} className={className} />
			</div>
		</BackTopAntd>
	)
}

export default styled(BackTop)`
	fill: rgba(17, 182, 221, 0.5);

	&:hover {
		fill: #11b6dd;
	}
`
