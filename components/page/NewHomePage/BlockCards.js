import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BlockCardsItem from './BlockCardsItem'
import OpenPageOnNewTab from "public/assets/images/OpenNewPageIcon.png"

const BlockCards = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return (
		<section>
			<div className='px-3 my-20'>
				<div className='new-home-page-boxes mb-13'>
					<div
						dangerouslySetInnerHTML={{ __html: text }}
						className='fs-3qx mb-10 header px-0 px-md-10'></div>
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
							<a className='n-btn outline-black d-block w-fit mx-auto'>
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
