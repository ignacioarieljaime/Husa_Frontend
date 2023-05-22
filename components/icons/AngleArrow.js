import React from 'react'

const AngleArrow = () => {
	return (
		<svg
			width='18'
			height='10'
			viewBox='0 0 18 10'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_1107_882)'>
				<path
					d='M9.6355 9.94204L17.9421 1.63541C18.0378 1.53972 18.0089 1.35503 17.8798 1.22597L16.7806 0.126727C16.6493 -0.0045588 16.4646 -0.0334863 16.3689 0.0621969L9.46194 6.96918L2.5416 0.0488459C2.45259 -0.0401617 2.2768 -0.00455863 2.14551 0.126728L1.04627 1.22597C0.914982 1.35726 0.881605 1.53305 0.968388 1.62205L9.22606 9.87973C9.35735 10.011 9.53982 10.0377 9.6355 9.94204Z'
					fill='white'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1107_882'>
					<rect
						width='10'
						height='17.0806'
						fill='white'
						transform='translate(18) rotate(90)'
					/>
				</clipPath>
			</defs>
		</svg>
	)
}

export default React.memo(AngleArrow)
