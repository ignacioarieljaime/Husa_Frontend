import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'
import CustomImage from 'components/common/CustomImage'
import { useRouter } from 'next/router'
import { GetProductWithSeriesAndProductIdApi } from 'services/Product'
import { Spinner } from 'react-bootstrap'
import ProductPackagesSliderItem from './ProductPackagesSliderItem'

const ProductPackagesSlider = ({ data }) => {
	const { structure } = data
	// const [product, setProduct] = useState([])
	// const [series, setSeries] = useState()

	// const router = useRouter()

	// useEffect(() => {
	// 	let seriesId = structure?.list?.value?.items.map(item => item.id)
	// 	getSeries(seriesId)
	// }, [])

	// const getSeries = async _seriesId => {
	// 	setSeries('loading')
	// 	try {
	// 		let response = await GetProductWithSeriesAndProductIdApi(
	// 			router,
	// 			`series_id=${encodeURIComponent(JSON.stringify(_seriesId))}`
	// 		)
	// 		setSeries(response.data.data)
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	// useEffect(() => {
	// 	const temp = product
	// 	if (Array.isArray(series))
	// 		series.forEach(item => {
	// 			const { products } = item
	// 			if (Array.isArray(products))
	// 				products.forEach(element => {
	// 					if (element?.product?.category?.name === 'Kitchen Suites') {
	// 						temp.push(element)
	// 					}
	// 				})
	// 			else {
	// 				if (products?.product?.category?.name === 'Kitchen Suites') {
	// 					temp.push(products)
	// 				}
	// 			}
	// 		})
	// 	setProduct(temp)
	// }, [series])

	return (
		<section id={data?.name + data?.id} className='package_types_slider'>
			<article className='article'>
				{/* <h2>{structure?.title?.value}</h2> */}
				<h2>Kitchen Appliance Packages</h2>
			</article>
			<div>
				<Swiper
					spaceBetween={28}
					modules={[Pagination]}
					pagination={true}
					centeredSlides={true}
					grabCursor={true}
					draggable={true}
					slidesPerView={'auto'}>
					{structure?.list?.value?.items.map((item, index) => (
						<SwiperSlide
							aria-hidden='true'
							className='item'
							key={index}
							tabIndex={'-1'}
							aria-label={`slide-${index + 1}`}>
							<ProductPackagesSliderItem data={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default ProductPackagesSlider
