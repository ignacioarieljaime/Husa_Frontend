import React, { useEffect, useState } from 'react'
import {
	faAngleDown,
	faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import Link from 'next/link'
import axios from 'axios'
import Spinner from 'components/common/Spinner'
import CustomImage from '../../common/CustomImage'

const SupportNewProducts = ({ data }) => {
	const [categoryId, setCategoryId] = useState()
	const [activeSearchBox, setActiveSearchBox] = useState(false)
	const [searchProductsList, setSearchProductsList] = useState()
	const [searchBoxCondition, setSearchBoxCondition] = useState(false)

	let { structure } = data

	const searchHandler = async _value => {
		setSearchProductsList('loading')
		try {
			let response = await axios.get(
				`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/searchProduct?category_id=${categoryId}&string=${_value}&type=support&status[]=3&status[]=1`
			)
			setSearchProductsList(response.data.data)
		} catch (error) {
			setSearchProductsList([])
			console.log(error)
		}
	}

	const searchActiveHandler = async _categoryId => {
		if (_categoryId !== categoryId) {
			setActiveSearchBox(false)
			setCategoryId(_categoryId)
			setTimeout(() => {
				setActiveSearchBox(true)
			}, 200)

			try {
				let response = await axios.get(
					`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/searchProduct?category_id=${_categoryId}&type=support&status[]=3&status[]=1`
				)
				setSearchProductsList(response.data.data)
			} catch (error) {
				setSearchProductsList([])
				console.log(error)
			}
		}
	}
	return (
		<section>
			<div className='support-products'>
				<h3 className='section-title container-fluid'>
					Select a product category to get started.
				</h3>
				<Swiper
					navigation={true}
					pagination={false}
					spaceBetween={35}
					slidesPerView={'auto'}
					centeredSlides={true}
					grabCursor={true}
					// dir='rtl'
					modules={[Navigation]}
					className='support-products-slider px-12'>
					{structure?.list?.value.map((item, index) => (
						<SwiperSlide key={index} className='slider-item '>
							<div className='d-flex flex-column '>
								<CustomImage
									src={item?.image?.src}
									alt={item?.image?.alt}
									title={item?.image?.title}
									className='slider-image'
									wrapperHeight={'92px'}
								/>
								<button
									onClick={() => {
										searchActiveHandler(item?.category?.value)
									}}
									className={`slider-title n-btn outline-black ${
										item?.category?.value === categoryId && 'bg-dark text-white'
									}`}>
									{item?.link?.title}
								</button>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				{activeSearchBox && (
					<div className='container-fluid d-flex justify-content-center mt-10'>
						<div style={{ width: '320px' }} className='position-relative'>
							<div
								style={{ cursor: 'pointer' }}
								onClick={() => setSearchBoxCondition(!searchBoxCondition)}
								className='drop_down  d-flex justify-content-between border-bottom px-3 pb-3  border-dark'>
								select your model
								<FontAwesomeIcon icon={faAngleDown} />
							</div>
							{searchBoxCondition && (
								<div className='w-100'>
									<input
										type='text'
										className='border-bottom border-gray w-100 mt-2 border-0 py-2 px-3'
										placeholder='search your model'
										onChange={e => searchHandler(e.target.value)}
										onBlur={() =>
											setTimeout(() => {
												setSearchBoxCondition(false)
											}, 500)
										}
									/>
									<ul
										className=' mt-3  d-flex flex-column gap-2 w-100 list bg-white list-unstyled py-4 px-4  overflow-auto'
										style={{ maxHeight: '300px' }}>
										{searchProductsList === 'loading' ? (
											<li className='py-5'>
												<Spinner size={20} />
											</li>
										) : Array.isArray(searchProductsList) &&
										  searchProductsList.length > 0 ? (
											searchProductsList.map((item, index) => (
												<li key={'search-list-' + index}>
													<Link href={item.route}>
														<a className='text-primary decora'>
															{item.product.model}
														</a>
													</Link>
												</li>
											))
										) : (
											<li>its empty</li>
										)}
									</ul>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default SupportNewProducts
