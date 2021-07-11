import { useEffect, useState } from 'react'
import API from '../api/api'
import useMediaType from './useMediaType'

const useDiscover = (params) => {
	const [data, setData] = useState({ data: null, error: null })

	const mediaType = useMediaType()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await API.discover(mediaType, params)
				setData({ data: response, error: null })
			} catch (error) {
				setData({ data: null, error: error })
				console.log(error.message)
			}
		}

		fetchData()
	}, [mediaType, params])

	return data
}

export default useDiscover
