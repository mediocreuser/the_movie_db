import React, { useEffect, useState } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import { movieAPI } from '../api/api'
import styled from 'styled-components'
import { usePalette } from 'react-palette'
import { rgba } from 'polished'
import CreditsCarousel from '../Components/CreditsCarousel'
import { PlayFill } from 'react-bootstrap-icons'
import ModalVideo from 'react-modal-video'

const MoviePage = () => {
	const id = useParams().id
	const [movie, setMovie] = useState({})
	const [error, setError] = useState('')
	const [modal, setModal] = useState(false)

	const palette = usePalette(
		`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
	).data.darkMuted

	useEffect(() => {
		const fetchData = async (id) => {
			await movieAPI.getDetails(id).then((data) => setMovie(data))
		}

		fetchData(id).catch((error) => setError(error.message))
	}, [id])

	if (error) return <Redirect to="/404" />

	console.log(movie)

	/*

  openModal () { this.setState({isOpen: true}) }

  <ModalVideo
  channel='youtube'
  isOpen={this.state.isOpen}
  videoId='L61p2uyiMSo'
  onClose={() => this.setState({isOpen: false})} />

   <button onClick={this.openModal}>Open</button>
  * */

	return (
		<>
			<Backdrop className="container-fluid" path={movie.backdrop_path} palette={palette}>
				<div className="container" style={{ padding: '30px 0' }}>
					<div className="row">
						<div className="col-4">
							<Poster path={movie.poster_path} />
						</div>
						<div className="col" style={{ color: 'white ' }}>
							<Title>
								<span>{movie.original_title}</span>
								&nbsp;
								<span className="year">({parseInt(movie.release_date)})</span>
							</Title>
							<div className="facts">
								<span className="genres">
									{movie?.genres &&
										movie.genres.map((genre, i) => {
											if (movie.genres.length - 1 === i) {
												return (
													<Link
														key={genre.id}
														to="/genres"
														className="link-light text-decoration-none"
													>
														{genre.name}
													</Link>
												)
											}
											return (
												<Link
													key={genre.id}
													to="/genres"
													className="link-light text-decoration-none"
												>
													{genre.name},{' '}
												</Link>
											)
										})}
								</span>
								<span className="beforeDot">{`${Math.trunc(movie.runtime / 60)}h ${
									movie.runtime % 60
								}m`}</span>
								<Trailer className="beforeDot" onClick={() => setModal(true)}>
									Play Trailer <PlayFill />
								</Trailer>
							</div>
							<div className="header_info">
								<Tagline>{movie.tagline}</Tagline>
								<h3 dir="auto">Overview</h3>
								<div className="overview" dir="auto">
									<p>{movie.overview}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Backdrop>
			<ModalVideo
				channel="youtube"
				isOpen={modal}
				videoId="L61p2uyiMSo"
				onClose={() => setModal(false)}
			/>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-xl-9">
						<h3 className="my-3 text-center">Top Billed Cast</h3>
						{id && <CreditsCarousel id={id} />}
					</div>
					<div className="col-lg-12 col-xl-3" style={{ background: 'steelblue' }}>
						second
					</div>
				</div>
			</div>
		</>
	)
}

export default MoviePage

const Poster = styled.div`
	margin: 0 auto;
	width: 300px;
	height: 450px;

	border-radius: 10px;

	background-image: url(https://image.tmdb.org/t/p/original/${({ path }) => path});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`

const Backdrop = styled.div`
	background-image: linear-gradient(
			to right,
			${({ palette }) => palette} 150px,
			${({ palette }) => rgba(`${palette ?? 'black'}`, 0.84)} 100%
		),
		url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${({ path }) => path});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`

const Title = styled.h1`
	font-size: 2.2rem;
	font-weight: 700;

	.year {
		font-weight: 400;
		opacity: 0.8;
	}
`

const Tagline = styled.h3`
	font-size: 1.1em;
	font-weight: 400;
	font-style: italic;
	opacity: 0.7;
`

const Trailer = styled.span`
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
`
