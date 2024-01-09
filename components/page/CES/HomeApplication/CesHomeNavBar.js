import React, { useEffect, useRef, useState } from 'react'

function CESHomeNavBar() {
	const [fix, setFix] = useState(false)
	const menu = useRef()

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (menu?.current?.offsetTop <= window.scrollY + 64) {
				setFix(true)
			} else {
				setFix(false)
			}
		})
	}, [])

	return (
		<div
			style={fix ? { height: '64px' } : {}}
			ref={menu}
			className='catalog-navbar bg-white'>
			<nav className=''>
				<ul className='row justify-content-evenly justify-content-md-end align-items-center p-0 m-0'>
					<li className='me-md-auto'>
						<span className='text-secondary'>CES 2022 </span>
					</li>
					<li>
						<a href='#'>
							<span className='underline-on-hover text-primary'>
								PRODUCT LINEUP
							</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span className='underline-on-hover text-secondary'>ULED</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span className='underline-on-hover text-secondary'>LASER</span>
						</a>
					</li>
					<li className='px-3'>
						<a href='#' target='_blank'>
							<span className='underline-on-hover text-primary'>
								HOME APPLIANCES
							</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default CESHomeNavBar
