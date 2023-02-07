import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { GetProductWithSeriesAndProductIdApi } from 'services/Product'
import { useRouter } from 'next/router'
import Spinner from 'components/common/Spinner'
import { RouteHandler } from 'utils/routeHandler'

const GoogleTvProducts = ({ data }) => {
	const { structure } = data
	let router = useRouter()
	const [products, setProducts] = useState('loading')
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
		getProductWithCategory(structure?.list?.value)
	}, [])

	const getProductWithCategory = async _data => {
		setProducts('loading')

		try {
			let response = await GetProductWithSeriesAndProductIdApi(
				router,
				'series_id=' + JSON.stringify(_data.items.map(item => item.id))
			)
			console.log(response.data.data)
			setProducts(response.data.data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<section>
			<div className='google_tv_products'>
				<h2 className='title' dangerouslySetInnerHTML={{ __html: text }}></h2>
				<div className='products'>
					{products === 'loading' ? (
						<div className='w-100 d-flex justify-content-center'>
							<Spinner size={50} />
						</div>
					) : (
						products.map((item, index) => {
							let product = item?.products[0]?.product
							let seriesTitle = product.customFields?.find(
								item => item.type_name === 'Top Titles'
							)
							let year = item?.products[0]?.product?.customFields
								.find(item => item?.type_name === 'Main Fields')
								?.custom_fields.find(item => item?.name === 'Year')?.value
							return (
								<div
									key={index}
									className='item'
									style={{ width: 100 / structure?.list?.value?.length + '%' }}>
									<img
										src={item?.products[0]?.product?.media?.url}
										alt={item?.products?.name}
										width='100%'
										className='mb-5'
									/>
									<div>
										<h5 className='subtitle'>
											{year === JSON.stringify(new Date().getFullYear())
												? 'ALL NEW ' + year
												: ''}
										</h5>
										<h4 className='title'>
											{
												item?.products[0]?.product?.customFields
													.find(item => item?.type_name === 'Top Titles')
													?.custom_fields.find(
														item => item?.name === 'h2 Title'
													)?.value
											}
										</h4>
										<ul className='sizes'>
											{Array.isArray(products) &&
												item?.products.map(
													(item, index) =>
														item.value && <li key={index}>{item.value}</li>
												)}
										</ul>

										<h6 className='description'>
											{item?.products[0]?.product?.name}
										</h6>
										<Link
											href={
												RouteHandler(item?.products[0]?.product?.id)
													? RouteHandler(item?.products[0]?.product?.id)
													: '/'
											}>
											<a className='n-btn link'>
												Explore the{' '}
												{seriesTitle
													? seriesTitle?.custom_fields.find(
															item => item.name === 'h2 Title'
													  ).value
													: product?.model}
											</a>
										</Link>
									</div>
								</div>
							)
						})
					)}
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
