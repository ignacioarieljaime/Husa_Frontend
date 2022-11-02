import Link from 'next/link'
import React from 'react'
import BlockCardsItem from './BlockCardsItem'

const BlockCards = ({ data: { structure } }) => {
	return (
		<section>
			<div className='px-3 px-md-9 my-20'>
				<div className='new-home-page-boxes mb-13'>
					<h2 className='fs-3qx mb-10 header'>{structure?.title?.value}</h2>
					{structure?.list?.value.map((item, index) => (
						<BlockCardsItem
							key={index}
							background={item?.backgroundImage}
							image={item?.image}
							littleTitle={item?.littleTitle?.value}
							title={item?.title?.value}
							link={item?.link}
							fullSize={item?.fullSize?.value}
						/>
					))}
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
