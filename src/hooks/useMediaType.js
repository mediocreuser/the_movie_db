import { useLocation } from 'react-router-dom'

// const useMediaType = () => useLocation().pathname.replace('/', '')
const useMediaType = () => useLocation().pathname.split('/')[1]
export default useMediaType
