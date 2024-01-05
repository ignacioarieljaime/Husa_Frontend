import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BlockCardsItem from './BlockCardsItem'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const BlockCards = ({ data: { structure } }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(structure)
	}, [])
	return (
		<section>
			<div className='px-3 mt-0 mb-10 my-md-20'>
				<div className='new-home-page-boxes mb-13'>
					<div
						dangerouslySetInnerHTML={{ __html: content?.title?.value }}
						className='fs-3qx mb-16 header title'></div>
					<div className='boxes'>
						{content?.list?.value.map((item, index) => (
							<BlockCardsItem
								itemCount={content?.list?.value.length}
								key={index}
								data={item}
								index={index}
							/>
						))}
					</div>
				</div>
				{content?.link?.value && (
					<div className='text-center'>
						<Link
							target={content?.link?.target ? content?.link?.target : '_self'}
							href={content?.link?.value}>
							<a
								target={content?.link?.target ? content?.link?.target : '_self'}
								className='n-btn outline-black d-block w-fit mx-auto medium'>
								{content?.link?.title}
								{content?.link?.target === '_blank' && (
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
