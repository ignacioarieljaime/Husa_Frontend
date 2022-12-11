import React from 'react'

function HamburgerMenuIcon({ color }) {
	return (
		<svg
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			width='32'
			height='32'
			viewBox='0 0 32 32'
			className='hamburger-menu'
			aria-hidden='true'>
			<path
				className='bar bar-top'
				fill={color}
				d='M3.969 15.094h24v2h-24v-2z'></path>
			<path
				className='bar bar-middle'
				fill={color}
				d='M3.969 15.094h24v2h-24v-2z'></path>
			<path
				className='bar bar-bottom'
				fill={color}
				d='M3.969 15.094h24v2h-24v-2z'></path>
		</svg>
	)
}

export default React.memo(HamburgerMenuIcon)
