import Link from 'next/link'
import React from 'react'
import OpenPageOnNewTab from "public/assets/images/OpenNewPageIcon.png"
const ProductPackageItem = ({ data }) => {
	return (
		<div className='item day-100'>
			<div className='d-flex flex-column h-100 justify-content-between align-items-start'>
				<div className='w-100'>
					<span className='text-primary type'>{data?.label?.value}</span>
					<div className='image_container mb-10 mt-3'>
						<img
							src={data?.image?.src}
							alt={data?.image?.alt}
							className='image'
						/>
					</div>
				</div>
				<div className='item_content'>
					<div className='w-100'>
						<h5 className='title'>{data?.title?.value}</h5>
						<div
							className='item-features'
							dangerouslySetInnerHTML={{ __html: data?.specs.value }}></div>
					</div>
					<div className='text-left mt-0 mt-md-8 w-100'>
						{data?.link?.value ? (
							<Link
								target={data?.link?.target ? data?.link?.target : '_self'}
								href={data?.link?.value}>
								<a className='btn btn-primary rounded-5 px-5 py-2'>
									{data?.link?.title}
									{data?.link?.target === '_blank' && (
										<img
											style={{ marginLeft: '10px' }}
											src={OpenPageOnNewTab.src}
										/>
									)}
								</a>
							</Link>
						) : null}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductPackageItem
