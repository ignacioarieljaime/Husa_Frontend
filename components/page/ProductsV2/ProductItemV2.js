import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { RouteHandler } from 'utils/routeHandler'
import { useDispatch } from 'react-redux'
import ModalChanelAdviser from '../Product/ModalChanelAdviser'
import { addNewCompare } from 'redux/slices/compare'
import CustomImage from 'components/common/CustomImage'

const ProductItemV2 = ({ data }) => {
	let { media, name, model, id } = data
	const [currentItem, setCurrentItem] = useState(
		data.id === 0 ? data.products.product : data.products[0].product
	)
	let seriesTitle = data?.products[0]?.product?.customFields
		?.find(item => item.type_name === 'Top Titles')
		?.custom_fields.find(item => item.name === 'h2 Title')
	const dispatch = useDispatch()
	const [url, setUrl] = useState()

	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	const [screenSize, setScreenSize] = useState(null)
	useEffect(() => {
		if (Array.isArray(data?.products)) {
			let addSizeToItem = data?.products.map(item => ({
				...item,
				size: item?.value ? Number(item?.value.replaceAll('"', '')) : 0
			}))
			setScreenSize(addSizeToItem.sort((a, b) => a.size - b.size))
		}
	}, [])

	useEffect(() => {
		setUrl(RouteHandler(currentItem.id, 'product'))
	}, [currentItem])
	return (
		<>
			{' '}
			<div className='product-item-v2 px-5 py-8'>
				<div className='text-center mb-10 w-100'>
					<CustomImage
						wrapperWidth={'100%'}
						wrapperHeight={'182px'}
						style={{ maxHeight: '182px' }}
						src={currentItem?.media?.url}
						alt={name}
					/>
				</div>
				<div className='product-item-v2-content flex-grow-1 d-flex flex-column justify-content-between'>
					<div>
						<div className='mb-3'>{currentItem?.model}</div>
						<p className='mb-7'>{currentItem.name}</p>
					</div>

					{screenSize && (
						<div className='d-flex justify-content-center flex-wrap gap-2 align-items-center mb-8'>
							{screenSize.map(
								(item, index) =>
									item.value && (
										<button
											key={'type-item-' + index}
											onClick={() => setCurrentItem(item.product)}
											className={`n-btn outline-black ${
												item.product.id === currentItem.id
													? ' product-mini-link-active'
													: ''
											}`}>
											{item.value}
										</button>
									)
							)}
						</div>
					)}

					<div>
						<div className='d-flex flex-wrap justify-content-center  gap-2 align-items-center mb-10'>
							<Link href={url ? url : '/'}>
								<a className='n-btn outline-black  '>View Product</a>
							</Link>
							<button
								disabled={
									currentItem?.buy_status === 'ChannelAdvisor' ||
									currentItem?.buy_status === 'Internal'
										? false
										: true
								}
								onClick={() =>
									currentItem?.buy_status === 'ChannelAdvisor' ||
									currentItem?.buy_status === 'Internal'
										? setChanelAdviserHandler(!chanelAdviserHandler)
										: {}
								}
								style={currentItem?.retailer ? { cursor: 'pointer' } : {}}
								className={`n-btn ${
									currentItem?.buy_status === 'ChannelAdvisor' ||
									currentItem?.buy_status === 'Internal'
										? 'primary-text '
										: 'disabled_btn'
								}`}>
								{currentItem?.buy_status === 'ChannelAdvisor' ||
								currentItem?.buy_status === 'Internal'
									? 'Where To Buy'
									: 'coming soon'}
								<span>
									<FontAwesomeIcon
										icon={faChevronRight}
										size={'sm'}
										className='ms-2'
									/>
								</span>
							</button>
						</div>
						<div className='text-center'>
							<button
								onClick={() => dispatch(addNewCompare(currentItem))}
								className='n-btn grey-text compare-btn ps-6 rounded-0'>
								Add To Compare
							</button>
						</div>
					</div>
				</div>
				<ModalChanelAdviser
					productId={currentItem.id}
					type={currentItem.buy_status}
					condition={chanelAdviserHandler}
					handler={setChanelAdviserHandler}
					model={currentItem.model}
				/>
			</div>
		</>
	)
}

export default ProductItemV2
