import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const useOutsideClick = (ref, callbackFn) => {
	const [isClickedOutside, setIsClickedOutside] = useState(false)
	useEffect(() => {
		const handleClickOutside = event => {
			if (ref.current && !ref.current.contains(event.target)) {
				callbackFn && callbackFn()
				setIsClickedOutside(true)
			}
		}
		document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [ref])
	return isClickedOutside
}

useOutsideClick.propTypes = {
	ref: PropTypes.func,
	callbackFn: PropTypes.func
}

useOutsideClick.defaultProps = {
	ref: () => {},
	callbackFn: () => {}
}

export default useOutsideClick
