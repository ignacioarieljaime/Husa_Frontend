import React from 'react'

const MenuWhite = ({ color = '#fff' }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='20'
			height='12'
			viewBox='0 0 20 12'
			fill='none'>
			<g clip-path='url(#clip0_6688_735)'>
				<path
					d='M19.598 4.7019H0.402C0.18 4.7019 0 4.83769 0 5.00591V6.42257C0 6.59079 0.18 6.72658 0.402 6.72658H19.598C19.82 6.72658 20 6.59079 20 6.42257V5.00591C20 4.83769 19.82 4.7019 19.598 4.7019Z'
					fill={color}
				/>
				<path
					d='M19.598 9.40186H0.402C0.18 9.40186 0 9.53764 0 9.70586V11.1225C0 11.2907 0.18 11.4265 0.402 11.4265H19.598C19.82 11.4265 20 11.2907 20 11.1225V9.70586C20 9.53764 19.82 9.40186 19.598 9.40186Z'
					fill={color}
				/>
				<path
					d='M19.598 0H0.402C0.18 0 0 0.135789 0 0.304005V1.72067C0 1.88889 0.18 2.02468 0.402 2.02468H19.598C19.82 2.02468 20 1.88889 20 1.72067V0.304005C20 0.135789 19.82 0 19.598 0Z'
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id='clip0_6688_735'>
					<rect width='20' height='11.4286' fill={color} />
				</clipPath>
			</defs>
		</svg>
	)
}

export default MenuWhite
