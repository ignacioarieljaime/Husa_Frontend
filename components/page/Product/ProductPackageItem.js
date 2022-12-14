import Link from 'next/link'
import React from 'react'

const ProductPackageItem = ({ data }) => {
	return (
		<div className='item day-100'>
			<div className='d-flex flex-column h-100 justify-content-between align-items-start'>
				<div>
					<span className='text-primary type'>{data?.label?.value}</span>
					<div className='text-center position-relative mb-10'>
						<img src={data?.image?.src} alt={data?.image?.alt} width='90%' />
					</div>
					<div>
						<h5 className='title'>{data?.title?.value}</h5>
						<div
							className='item-features'
							dangerouslySetInnerHTML={{ __html: data?.specs.value }}></div>
					</div>
				</div>
				<div className='text-left mt-8'>
					{data?.link?.value && (
						<Link href={data?.link?.value}>
							<a className='btn btn-primary rounded-5 px-5 py-2'>
								{data?.link?.title}
							</a>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProductPackageItem
