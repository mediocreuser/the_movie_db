import React, { useEffect } from 'react'
import { fetchMovies } from '../redux/moviesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MoviesPage = () => {
	const dispatch = useDispatch()
	const movies = useSelector(({ movies }) => movies.list)

	useEffect(() => {
		if (!movies.length) {
			dispatch(fetchMovies())
		}
	}, [dispatch, movies])

	console.log(movies)

	return (
		<div className="row">
			<div className="col-lg-3 col-xl-2" style={{ background: 'tomato' }}>
				Filters
			</div>
			<div className="col-lg-9 col-xl-10" style={{ background: 'steelblue' }}>
				<div className="row row-cols-1 row-cols-md-4 g-4">
					{movies &&
						movies.map((movie) => {
							return (
								<div className="col" key={movie.id}>
									<Link
										to={`/movie/${movie.id}`}
										className="card text-decoration-none link-dark"
									>
										<img
											src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
											className="card-img-top"
											alt="..."
											style={{ height: '300px' }}
										/>
										<div className="card-body text-center " style={{ padding: 10 }}>
											<h5
												className="card-title"
												style={{ fontSize: '1rem', fontWeight: 'bold' }}
											>
												{movie.title}
											</h5>
											<p className="card-text link-secondary">{movie.release_date}</p>
										</div>
									</Link>
								</div>
							)
						})}
				</div>
			</div>
		</div>
	)
}

export default MoviesPage

/*
https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg

<img

src="/t/p/w300_and_h450_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg" data-src="/t/p/w300_and_h450_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg"

data-srcset="/t/p/w300_and_h450_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg 1x, /t/p/w600_and_h900_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg 2x"

srcset="/t/p/w300_and_h450_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg 1x, /t/p/w600_and_h900_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg 2x"

>

* * */

/*

            // <Card className={'mb-5'} style={{ width: '23%' }} key={movie.id}>
            // 	<CardImg
            // 		top
            // 		width="100%"
            // 		src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            // 		alt="Card image cap"
            // 	/>
            // 	<CardBody style={{ padding: '.8rem' }}>
            // 		<CardTitle tag="h5" style={{ fontSize: '1em' }}>
            // 			<Link to={'/'}>{movie.title}</Link>
            // 		</CardTitle>
            // </Card>

            */
