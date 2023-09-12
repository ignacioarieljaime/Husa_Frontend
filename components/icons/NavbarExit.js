import React from 'react'

const NavbarExit = ({ color = '#00AAA6' }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'>
			<path
				d='M6 18L18 6M6 6L18 18'
				stroke={color}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}

export default NavbarExit
