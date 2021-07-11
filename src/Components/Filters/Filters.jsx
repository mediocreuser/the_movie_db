import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

import { Space, Collapse, Button } from 'antd'

import reducer from './reducer'
import { initialState } from './reducer'

import Sort from './Sort'
import Genres from './Genres'
import Score from './Score'
import ReleaseDates from './ReleaseDates'
import Keywords from './Keywords'

const { Panel } = Collapse

export const Context = React.createContext('')

const Filters = React.memo(({ provideParams }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { sort_by } = state

	return (
		<div className="col-lg-3 py-4">
			<Space direction="vertical" className="w-100">
				<Context.Provider value={dispatch}>
					<Collapse>
						<Panel header="Sort" key="1">
							<Sort value={sort_by} />
						</Panel>
						<Panel header="Filters" key="2">
							<Space direction="vertical" className="w-100">
								<Genres />
								<Score />
								<ReleaseDates />
								<Keywords />
							</Space>
						</Panel>
					</Collapse>
				</Context.Provider>
				<Button className="w-100" onClick={() => provideParams(state)}>
					Search
				</Button>
			</Space>
		</div>
	)
})

Filters.prototype = { provideParams: PropTypes.func.isRequired }

export default Filters
