import Link from 'next/link'
import React from 'react'
import HomePageMBTextedBoxesItem from './HomePageMBTextedBoxesItem'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const HomePageMBTextedBoxes = ({ data }) => {
	let { structure } = data
	return (
		<section>
			<div className='row justify-content-center align-items-center mx-0 px-3 px-md-9 my-20'>
				{structure?.list?.value.map((item, index) => (
					<HomePageMBTextedBoxesItem
						key={index}
						background={item?.backgroundImage}
						image={item?.image}
						littleTitle={item?.littleTitle?.value}
						title={item?.title?.value}
						link={item?.link}
					/>
				))}
				{structure?.link?.value && (
					<Link
						target={structure?.link?.target ? structure?.link?.target : '_self'}
						href={structure?.link?.value}>
						<a
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							title={item?.url?.title}
							className='n-btn outline-black medium mt-20'>
							{structure?.link?.title}{' '}
							{structure?.link?.target === '_blank' && (
								<img
									style={{ marginLeft: '10px' }}
									src={OpenPageOnNewTab.src}
									alt={item?.url?.title}
								/>
							)}
						</a>
					</Link>
				)}
			</div>
		</section>
	)
}

export default HomePageMBTextedBoxes
