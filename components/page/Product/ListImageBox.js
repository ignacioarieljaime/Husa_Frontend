import React from 'react'
import Link from 'next/link'

function ListImageBox({ data }) {
	let { structure } = data
	return (
		<div
			className='d-flex justify-content-between'
			style={{ padding: '60px 0' }}>
			{structure?.list?.value.map(item => (
				<Link href={item?.link?.value ? item?.link?.value : '/'}>
					<a style={{
						width: `calc(${100 / structure?.list?.value.length}% - 25px)`
					}} className={"lsit_image_box_item"}><img
						style={{ objectFit: 'cover' }}
						className={'w-100 h-100'}
						src={item?.image?.src}
						alt={item?.image?.alt}
					/></a>
				</Link>
			))}
		</div>
	)
}

export default ListImageBox
