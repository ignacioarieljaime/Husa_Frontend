import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { useState } from 'react'

const ModalChanelAdviser = dynamic(() =>
	import('../Product/ModalChanelAdviser')
)

function ULEDProductItem({ data }) {
	let { title, description, image, whereToBuy, linkUrl, linkTitle, model } =
		data
	const [channelAdviserHandler, setChannelAdviserHandler] = useState(false)
	return (
		<>
			<div className='col-12 col-lg-4 platform platform-uled platform-uled-item'>
				<h2>{title?.value}</h2>
				<p className='text-black fs-2 fw-normal'>{description?.value}</p>
				<div className='py-9 text-center'>
					<img src={image?.src} alt={image?.alt} height='300px' />
				</div>
				<div className='row align-items-center'>
					<div className='col-12 col-sm-3 discover-btn col-lg-6 col-xl-4  gap-3 mb-5 mb-sm-0'>
						<Link href={linkUrl?.value ? linkUrl?.value : ''}>
							<a className='btn btn-light text-nowrap'>{linkTitle?.value}</a>
						</Link>
					</div>
					{whereToBuy.value && (
						<div className='col-12 col-sm-6 col-lg-6 col-xl-8  '>
							<button
								onClick={() =>
									whereToBuy.value &&
									setChannelAdviserHandler(!channelAdviserHandler)
								}
								className='btn where-to-buy-btn btn-outline-light'>
								{whereToBuy?.title}
							</button>
						</div>
					)}
				</div>
			</div>
			{channelAdviserHandler && (
				<ModalChanelAdviser
					condition={channelAdviserHandler}
					handler={setChannelAdviserHandler}
					model={model?.value}
				/>
			)}
		</>
	)
}

export default ULEDProductItem
