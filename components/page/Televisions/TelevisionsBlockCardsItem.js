import Link from 'next/link'
import React from 'react'

const TelevisionsBlockCardsItem = ({ data }) => {
	return (
		<div className='card-item'>
			{data?.image?.src ? (
				<div>
					<img src={data?.image?.src} alt={data?.image?.alt} className='100%' />
				</div>
			) : null}
			<div dangerouslySetInnerHTML={{ __html: data?.title?.value }}></div>
			<div dangerouslySetInnerHTML={{ __html: data?.subtitle?.value }}></div>
			<Link href={data?.link?.value}>
				<a className='n-btn outline-white transparent'>{data?.title?.value}</a>
			</Link>
		</div>
	)
}

export default TelevisionsBlockCardsItem
