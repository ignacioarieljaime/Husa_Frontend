import React from 'react'
import Link from 'next/link'

const CESNavigationButton = ({ data: { structure } }) => {
	return (
		<section>
			<div
				className={`ces_navigation_button ${
					structure?.theme?.value === 'light' ? 'bg-white' : 'bg-black'
				}`}>
				<Link href={structure?.link?.value ? structure?.link?.value : '/'}>
					<a className='n-btn outline-white d-block w-fit mx-auto'>
						{structure?.link?.title}
					</a>
				</Link>
			</div>
		</section>
	)
}

export default CESNavigationButton
