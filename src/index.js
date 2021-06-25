import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
)
