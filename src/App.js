import React from 'react'
import Header from './Components/Header'
import MoviesPage from './pages/MoviesPage'
import { Switch, Route } from 'react-router-dom'
import MoviePage from './pages/MoviePage'
import ErrorPage from './pages/404'
import GlobalStyle from './GlobalStyle'

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Switch>
				<Route exact path={'/movie'}>
					<MoviesPage />
				</Route>
				<Route path={'/movie/:id'}>
					<MoviePage />
				</Route>
				<Route path="/404">
					{/*<Route path="*">*/}
					<ErrorPage />
				</Route>
			</Switch>
		</>
	)
}

export default App
