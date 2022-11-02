import Link from 'next/link'
import React from 'react'

const BlockSpotlightItem = ({ title, image, description, link, models }) => {
	console.log(link)
	return (
		<div className='spotlight-releases-item'>
			<img src={image?.src} alt={image?.alt} width='100%' className='image' />
			<h5 className='description'>{description}</h5>
			<h3 className='title'>{title}</h3>
			<div className='models'>{models}</div>
			<Link href={link?.value ? link?.value : '/'}>
				<a className='n-btn outline-black transparent'>{link?.title}</a>
			</Link>
		</div>
	)
}

export default BlockSpotlightItem
