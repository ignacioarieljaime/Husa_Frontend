import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BlockCardsItem from './BlockCardsItem'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const BlockCards = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section>
			<div className='px-3 mt-0 mb-10 my-md-20'>
				<div className='new-home-page-boxes mb-13'>
					<div
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}
						className='fs-3qx mb-16 header title'></div>
					<div className='boxes'>
						{structure?.list?.value.map((item, index) => (
							<BlockCardsItem
								itemCount={structure?.list?.value.length}
								key={index}
								data={item}
								index={index}
							/>
						))}
					</div>
				</div>
				{structure?.link?.value && (
					<div className='text-center'>
						<Link
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							href={structure?.link?.value}>
							<a
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								className='n-btn outline-black d-block w-fit mx-auto medium'>
								{structure?.link?.title}
								{structure?.link?.target === '_blank' && (
									<img
										style={{ marginLeft: '10px' }}
										src={OpenPageOnNewTab.src}
									/>
								)}
							</a>
						</Link>
					</div>
				)}
			</div>
		</section>
	)
}

export default BlockCards
