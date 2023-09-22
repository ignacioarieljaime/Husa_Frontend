import React from 'react'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const CesNavigationButton = ({ data: { structure } }) => {
	return (
		<section>
			<div
				className={`ces_navigation_button ${
					structure?.theme?.value === 'light' ? 'bg-white' : 'bg-black'
				}`}>
				{structure?.link?.value && (
					<Link
						target={structure?.link?.target ? structure?.link?.target : '_self'}
						href={structure?.link?.value ? structure?.link?.value : '/'}>
						<a
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							className='n-btn outline-white d-block medium w-fit mx-auto'>
							{structure?.link?.title}
							{structure?.link?.target === '_blank' && (
								<img
									style={{ marginLeft: '10px' }}
									src={OpenPageOnNewTab.src}
								/>
							)}
						</a>
					</Link>
				)}
			</div>
		</section>
	)
}

export default CesNavigationButton
