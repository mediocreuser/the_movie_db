import React from 'react'
import { Switch, Route } from 'react-router-dom'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import 'swiper/components/lazy/lazy.scss'

import 'antd/dist/antd.css'

import GlobalStyle from './GlobalStyle'

import Header from './Components/Header'
import Modal from './Components/Modal'
import Spinner from './Components/UIComponents/Spinner'

const HomePage = React.lazy(() => import('./Components/pages/HomePage'))
const ErrorPage = React.lazy(() => import('./Components/pages/404'))
const ItemPage = React.lazy(() => import('./Components/pages/ItemPage'))
const MediaPage = React.lazy(() => import('./Components/pages/MediaPage'))

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Modal />
			<Header />
			<React.Suspense fallback={<Spinner />}>
				<Switch>
					<Route exact path={'/'}>
						<HomePage />
					</Route>

					<Route exact path={'/movie'}>
						<MediaPage />
					</Route>
					<Route path={'/movie/:id'}>
						<ItemPage />
					</Route>

					<Route exact path={'/tv'}>
						<MediaPage />
					</Route>
					<Route path={'/tv/:id'}>
						<ItemPage />
					</Route>

					<Route path="*">
						<ErrorPage />
					</Route>
				</Switch>
			</React.Suspense>
		</>
	)
}

export default App
