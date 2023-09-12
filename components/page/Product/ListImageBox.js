import React from 'react'
import Link from 'next/link'

function ListImageBox({ data }) {
	let { structure } = data
	return (
		<div
			className='d-flex justify-content-between'
			style={{ padding: '60px 0' }}>
			{structure?.list?.value.map(item =>
				item?.link?.value ? (
					<Link
						target={item?.link?.target ? item?.link?.target : '_self'}
						href={item?.link?.value ? item?.link?.value : '/'}>
						<a
							target={item?.link?.target ? item?.link?.target : '_self'}
							style={{
								width: `calc(${100 / structure?.list?.value.length}% - 25px)`
							}}
							className={'lsit_image_box_item'}>
							<img
								style={{ objectFit: 'cover' }}
								className={'w-100 h-100'}
								src={item?.image?.src}
								alt={item?.image?.alt}
							/>
						</a>
					</Link>
				) : (
					<div
						style={{
							width: `calc(${100 / structure?.list?.value.length}% - 25px)`
						}}
						className={'lsit_image_box_item'}>
						<img
							style={{ objectFit: 'cover' }}
							className={'w-100 h-100'}
							src={item?.image?.src}
							alt={item?.image?.alt}
						/>
					</div>
				)
			)}
		</div>
	)
}

export default ListImageBox
