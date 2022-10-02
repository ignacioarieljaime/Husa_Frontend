import React from 'react'

function Logo({ color = '#fff', width = '135', height = '21' }) {
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 135 21`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_2_10)'>
				<path
					d='M47.4331 11.7297C50.3796 13.0351 53.4224 14.2838 52.9602 17.1216C52.4595 20.2054 47.8567 20.7919 44.0821 20.7919H43.177C37.9965 20.6595 35.3967 20.2432 35.3967 20.2432L35.6085 16.8946C35.6085 16.8946 39.1906 17.5378 42.58 17.6514C44.5058 17.7081 45.9117 17.6135 45.9502 16.9514C45.9887 16.3649 45.0258 16.0622 42.9844 15.2676L41.1934 14.5676C39.0365 13.6973 35.5122 12.4297 35.6856 9.51622C35.8589 6.67838 39.3446 5.78919 41.4245 5.50541C42.6378 5.33514 43.9088 5.27838 45.6806 5.2973C49.5707 5.33514 52.8446 6.03514 52.8446 6.03514L52.5365 9.15676C52.5365 9.15676 49.07 8.41892 45.5843 8.41892C43.3696 8.41892 42.6185 8.66486 42.503 9.04324C42.2911 9.70541 43.5236 10.1784 45.1413 10.8027L47.4331 11.7297ZM60.6634 14.3595V14.4162C60.6634 15.4378 61.5878 17.6324 66.1713 17.8027H66.4794C69.7726 17.8027 72.7961 17.1595 73.2968 17.0649C73.1235 18.1243 72.9117 19.5054 72.7961 20.1676C71.7754 20.4514 69.4067 21 65.6898 21C55.5985 21 54.366 16.2703 54.6356 13.073C54.9245 9.55405 58.3717 5.2973 65.2469 5.35405C65.9017 5.35405 66.5179 5.41081 67.0764 5.48649C68.6171 5.71351 75.1649 7.13243 73.8553 14.3784L60.6634 14.3595ZM68.6941 11.5027C68.6941 11.5027 68.9445 8.32432 65.0928 8.28649C62.4545 8.30541 61.2027 9.91351 60.9138 11.5027H68.6941ZM121.654 14.3595V14.4162C121.654 15.4378 122.579 17.6324 127.162 17.8027H127.47C130.763 17.8027 133.787 17.1595 134.288 17.0649C134.114 18.1243 133.902 19.5054 133.787 20.1676C132.766 20.4514 130.378 21 126.681 21C116.589 21 115.357 16.2703 115.626 13.073C115.915 9.55405 119.343 5.2973 126.218 5.35405C126.873 5.35405 127.489 5.41081 128.048 5.48649C129.589 5.71351 136.117 7.13243 134.827 14.3784L121.654 14.3595ZM129.685 11.5027C129.685 11.5027 129.935 8.32432 126.084 8.28649C123.445 8.30541 122.193 9.91351 121.905 11.5027H129.685ZM88.5493 10.7838C88.376 13.4514 87.9138 20.6595 87.9138 20.6595H93.9609L94.6156 10.6324C94.9045 6.07297 91.6306 5.73243 89.4545 5.52432C89.3004 5.50541 88.1642 5.41081 86.585 5.41081C86.1806 5.41081 85.7376 5.41081 85.2947 5.42973C81.5393 5.56216 76.7633 6.11081 76.7633 6.11081L75.8196 20.6405H81.8475L82.5793 8.85405C82.5793 8.85405 84.7362 8.55135 86.4309 8.62703C87.0087 8.64595 88.6841 8.62703 88.5493 10.7838ZM32.5272 0H27.5008L27.1927 3.95405H33.6635C33.6635 3.95405 33.8368 1.7027 33.856 1.32432C33.9331 0.435135 33.5672 0 32.5272 0V0ZM108.501 11.7297L106.19 10.7838C104.572 10.1405 103.34 9.66757 103.551 9.00541C103.667 8.64595 104.418 8.4 106.633 8.38108C110.118 8.38108 113.585 9.11892 113.585 9.11892L113.893 5.9973C113.893 5.9973 110.619 5.31622 106.729 5.25946C104.957 5.24054 103.686 5.2973 102.473 5.46757C100.412 5.75135 96.9074 6.64054 96.7341 9.47838C96.5607 12.373 100.085 13.6405 102.242 14.5297L104.033 15.2297C106.074 16.0243 107.037 16.327 106.999 16.9135C106.96 17.5568 105.554 17.6703 103.628 17.6135C100.239 17.5 96.657 16.8568 96.657 16.8568L96.4452 20.2054C96.4452 20.2054 99.045 20.6027 104.225 20.7541C104.534 20.7541 104.842 20.773 105.131 20.773C108.905 20.773 113.508 20.1865 114.009 17.1027C114.452 14.2838 111.447 13.0351 108.501 11.7297ZM17.7947 0L17.2169 7.22703H7.74191L8.22337 1.32432C8.24263 0.0567568 7.14491 0 6.60568 0H1.7141L0.0771484 20.6784H6.70197L7.43378 11.5216H16.9088L16.177 20.6784H22.7826L24.4003 0H17.7947ZM27.0579 5.63784L25.8831 20.6784H32.3539L33.5479 5.63784H27.0579Z'
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id='clip0_2_10'>
					<rect width='135' height='21' fill={color} />
				</clipPath>
			</defs>
		</svg>
	)
}

export default React.memo(Logo)
