import Link from 'next/link'
import React from 'react'

const GoogleTvProducts = ({ data: { structure } }) => {
	return (
		<section>
			<div className='google_tv_products'>
				<article className='article'>
					<div
						className='title'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
				</article>
				<div className='products'>
					{structure?.list?.value.map((item, index) => (
						<div
							key={index}
							className='item'
							style={{ width: 100 / structure?.list?.value?.length + '%' }}>
							<img
								src={item?.image?.src}
								alt={item?.image?.alt}
								width='100%'
								className='mb-5'
							/>
							<h5 className='subtitle'>{item?.subtitle?.value}</h5>
							<h4 className='title'>{item?.title?.value}</h4>
							<ul className='sizes'>
								{item?.sizes?.value.map((size, index) => (
									<li key={index}>{size}"</li>
								))}
							</ul>
							<h6 className='description'>{item?.description?.value}</h6>
							<Link href={item?.link?.value ? item?.link?.value : '/'}>
								<a className='n-btn link'>{item?.link?.title}</a>
							</Link>
						</div>
					))}
				</div>
				<Link href={structure?.link?.value ? structure?.link?.value : '/'}>
					<a className='n-btn black d-block w-fit mx-auto py-4 px-8 mt-15'>
						{structure?.link?.title}
					</a>
				</Link>
			</div>
		</section>
	)
}

export default GoogleTvProducts
