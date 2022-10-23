import Link from 'next/link'
import React from 'react'
import HomePageMBTextedBoxesItem from './HomePageMBTextedBoxesItem'

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
					<Link href={structure?.link?.value}>
						<a className='n-btn outline-black mt-20'>
							{structure?.link?.title}
						</a>
					</Link>
				)}
			</div>
		</section>
	)
}

export default HomePageMBTextedBoxes
