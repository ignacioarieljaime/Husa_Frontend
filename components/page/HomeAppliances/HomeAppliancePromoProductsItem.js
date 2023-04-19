import React from 'react'
import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'

const HomeAppliancePromoProductsItem = ({ data }) => {
	return (
		<figure className='item'>
			{data?.link?.value && (
				<Link
					target={data?.link?.target ? data?.link?.target : '_self'}
					href={data?.link?.value}>
					<a className='image_container'>
						<CustomImage
							src={data?.image?.src}
							alt={data?.image?.alt}
							className='image'
						/>
					</a>
				</Link>
			)}
			<figcaption className='content'>
				<article className='article'>
					<p className='title'>{data?.title?.value}</p>
					<div
						className='mt-16 mb-3'
						dangerouslySetInnerHTML={{ __html: data.text?.value }}></div>
				</article>
				{data?.link?.value && (
					<Link
						target={data?.link?.target ? data?.link?.target : '_self'}
						href={data?.link?.value}>
						<a className='d-block w-fit mx-auto mt-6'>
							<CustomImage
								src={data?.retailer?.src}
								alt={data?.retailer?.alt}
								wrapperWidth={'auto'}
								wrapperHeight={'50px'}
							/>
						</a>
					</Link>
				)}
			</figcaption>
		</figure>
	)
}

export default HomeAppliancePromoProductsItem
