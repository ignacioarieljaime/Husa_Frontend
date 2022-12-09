import Link from 'next/link'
import React from 'react'
import BlockCardsItem from './BlockCardsItem'

const BlockCards = ({ data: { structure } }) => {
	return (
		<section>
			<div className='px-3 px-md-9 my-20'>
				<div className='new-home-page-boxes mb-13'>
					<div
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}
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
							<a className='n-btn outline-black'>{structure?.link?.title}</a>
						</Link>
					</div>
				)}
			</div>
		</section>
	)
}

export default BlockCards
