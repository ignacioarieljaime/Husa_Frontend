import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const useOutsideClick = ref => {
	const [isClickedOutside, setIsClickedOutside] = useState(false)
	useEffect(() => {
		const handleClickOutside = event => {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsClickedOutside(true)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [ref])
	return isClickedOutside
}

useOutsideClick.propTypes = {
	ref: PropTypes.func
}

useOutsideClick.defaultProps = {
	ref: () => {}
}

export default useOutsideClick
