import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function ProductsItem({ data }) {
	return (
		<>
			<div className='item bottom-border-sm col-12 col-md-6 col-xl-4 col-xxl-3'>
				{data.isNew?.value && <span className='new_product'>New</span>}
				<Link href={data.link.value}>
					<img src={data.image?.src} height={280} alt='featured image' />
				</Link>
				{data && <h3 className='serie'>{data?.serie?.value}</h3>}
				<p className='title'>{data.title?.value}</p>
				<div className='types-list'>
					{data.models.value.map((item, index) => (
						<Link key={index} href={item.link.value}>
							<a className='title'>{item.link?.title}</a>
						</Link>
					))}
				</div>
				<ul className='models-list'>
					{data.types.value.map((item, index) => (
						<li key={index}>
							<span className='title'>{item.title?.value}</span>
							{item.models.value.map((model, index) => (
								<Link href={model.value}>
									<a className='model'>{model.title}</a>
								</Link>
							))}
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default ProductsItem
