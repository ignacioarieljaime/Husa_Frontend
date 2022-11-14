import React from 'react'

import Link from 'next/link'
function SmartInfoTvsDifferentItem({
	data: { description, image, color, title, link },
	listCount
}) {
	return (
		<div
			style={{ background: color?.value }}
			className={`col-12 col-md-${
				listCount === 4 ? 24 / listCount : 12 / listCount
			} ${
				listCount === 4 && 'col-lg-' + 12 / listCount
			}  platform smart-platform`}>
			<h2 className='text-white'>{title.value}</h2>
			<div className='py-9'>
				<img src={image.src} alt={image.alt} width='100%' height='100%' />
			</div>
			<p>{description.value}</p>
			<Link href={link.value ? link.value : '/'}>
				<a className='btn btn-light'>{link.title}</a>
			</Link>
		</div>
	)
}

export default SmartInfoTvsDifferentItem
