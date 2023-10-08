import React from 'react'

const TransparentPlayButton = ({ color = '#fff' }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='100'
			height='101'
			viewBox='0 0 100 101'
			fill='none'>
			<g clipPath='url(#clip0_5832_4713)'>
				<path
					d='M50 0.966309C22.385 0.966309 0 23.3513 0 50.9663C0 78.5813 22.385 100.966 50 100.966C77.615 100.966 100 78.5813 100 50.9663C100 23.3513 77.615 0.966309 50 0.966309ZM67.0488 51.9005L42.1515 66.2742C41.5074 66.6422 40.7077 66.1822 40.7077 65.4391V36.6917C40.7077 35.9486 41.5074 35.4886 42.1515 35.8566L67.0488 50.2303C67.6928 50.5983 67.6928 51.5254 67.0488 51.8934V51.9005Z'
					fill={color}
					fillOpacity='0.75'
				/>
			</g>
			<defs>
				<clipPath id='clip0_5832_4713'>
					<rect
						width='100'
						height='100'
						fill={color}
						transform='translate(0 0.966309)'
					/>
				</clipPath>
			</defs>
		</svg>
	)
}

export default TransparentPlayButton
