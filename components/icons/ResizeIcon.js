import React from 'react'

const ResizeIcon = () => {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M3.125 3.125V6.875M3.125 3.125H6.875M3.125 3.125L7.5 7.5M3.125 16.875V13.125M3.125 16.875H6.875M3.125 16.875L7.5 12.5M16.875 3.125H13.125M16.875 3.125V6.875M16.875 3.125L12.5 7.5M16.875 16.875H13.125M16.875 16.875V13.125M16.875 16.875L12.5 12.5'
				stroke='white'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}

export default React.memo(ResizeIcon)
