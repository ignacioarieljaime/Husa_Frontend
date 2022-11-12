import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { useState } from 'react'

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
				<h2>{title?.value}</h2>
				<p className='text-black fs-2 fw-normal'>{description?.value}</p>
				<div className='py-9 text-center'>
					<img
						src={image?.src}
						className={'w-100'}
						alt={image?.alt}
						style={{ maxHeight: '300px' }}
					/>
				</div>
				<div className=' align-items-center d-flex flex-wrap gap-2'>
					{list?.value.map((item, index) => (
						<div className={'discover-btn  '}>
							{item?.link?.value.includes('openChannelAdvisor') ? (
								<button
									onClick={() => {
										setChanelAdModelId(item?.link?.value.split(':')[1])
										setChannelAdviserHandler(!channelAdviserHandler)
									}}
									className='btn where-to-buy-btn text-nowrap btn-outline-light'>
									{item?.link?.title}
								</button>
							) : (
								<Link href={item?.link?.value ? item?.link?.value : '/'}>
									<a
										className={`btn ${
											index === 0
												? 'btn-light'
												: 'where-to-buy-btn btn-outline-light'
										} text-nowrap`}>
										{item?.link?.title}
									</a>
								</Link>
							)}
						</div>
					))}
				</div>
			</div>
			{channelAdviserHandler && (
				<ModalChanelAdviser
					condition={channelAdviserHandler}
					handler={setChannelAdviserHandler}
					model={chanelAdModelId}
				/>
			)}
		</>
	)
}

export default ULEDProductItem
