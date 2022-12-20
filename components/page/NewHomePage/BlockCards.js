import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BlockCardsItem from './BlockCardsItem'

const BlockCards = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return (
		<section>
			<div className='px-3 px-md-9 my-20'>
				<div className='new-home-page-boxes mb-13'>
					<div
						dangerouslySetInnerHTML={{ __html: text }}
						className='fs-3qx mb-10 header px-0 px-md-6'></div>
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
						<Link href={structure?.link?.value}>
							<a className='n-btn outline-black d-block w-fit mx-auto'>
								{structure?.link?.title}
							</a>
						</Link>
					</div>
				)}
			</div>
		</section>
	)
}

export default BlockCards
