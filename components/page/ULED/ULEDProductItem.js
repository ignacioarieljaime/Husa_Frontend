import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const ModalChanelAdviser = dynamic(() =>
	import('../Product/ModalChanelAdviser')
)

function ULEDProductItem({ data, itemLength }) {
	let { title, description, image, list } = data
	const [channelAdviserHandler, setChannelAdviserHandler] = useState(false)
	const [chanelAdModelId, setChanelAdModelId] = useState()
	return (
		<>
			<div
				style={{ width: `${100 / itemLength}%` }}
				className='platform platform-uled platform-uled-item'>
				<h2 className='text-light'>{title?.value}</h2>
				<h3 className='text-black fs-2 fw-normal'>{description?.value}</h3>
				<div className='py-9 text-center'>
					<img
						src={image?.src}
						className={'w-100'}
						alt={image?.alt}
						// style={{ maxHeight: '300px' }}
					/>
				</div>
				<div className=' align-items-center d-flex flex-wrap gap-2'>
					{list?.value.map((item, index) => (
						<div key={index} className={'discover-btn  '}>
							{item?.link?.value &&
							item?.link?.value.includes('openChannelAdvisor') ? (
								<button
									onClick={() => {
										setChanelAdModelId(item?.link?.value.split(':')[1])
										setChannelAdviserHandler(!channelAdviserHandler)
									}}
									className='btn where-to-buy-btn text-nowrap btn-outline-light'>
									{item?.link?.title}
								</button>
							) : (
								<Link
									target={item?.link?.target ? item?.link?.target : '_self'}
									href={item?.link?.value ? item?.link?.value : '/'}>
									<a
										target={item?.link?.target ? item?.link?.target : '_self'}
										className={`btn ${
											index === 0
												? 'btn-light px-4'
												: 'where-to-buy-btn btn-outline-light'
										} text-nowrap`}
										style={{
											minWidth: ' 80px',
											padding: ' 9.5px 16px 6.5px',
											fontSize: ' 14px',
											lineHeight: ' 17px'
										}}>
										{item?.link?.title}

										{item?.link?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)}
									</a>
								</Link>
							)}
						</div>
					))}
				</div>
				<ModalChanelAdviser
					product={data}
					condition={channelAdviserHandler}
					handler={setChannelAdviserHandler}
					model={chanelAdModelId}
				/>
			</div>
		</>
	)
}

export default ULEDProductItem
