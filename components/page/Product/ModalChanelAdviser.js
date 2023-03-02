import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GoToPageIcon from 'components/icons/GoToPageIcon'
import useOutsideClick from 'hooks/useOutsideClick'
import Link from 'next/link'
import React, { useRef } from 'react'
import ChannelAdvisorDynamicRetailer from './ChannelAdvisorDynamicRetailer'
import CustomChannelAdvisor from './CustomChannelAdvisor'

function ModalChanelAdviser({ productId, condition, handler, model, type }) {
	const modalOverView = useRef()
	const outside = useOutsideClick(modalOverView)
	return (
		<div className={`channerl-advisor-drawer ${condition ? 'open' : ''}`}>
			<div
				onClick={() => outside && handler(false)}
				id='where-to-buy-drawer-backdrop'
				className={`backdrop`}></div>
			<div
				ref={modalOverView}
				id='where-to-buy-drawer'
				className={`where-to-buy-drawer fixed-top`}>
				<button className='btn close-btn' onClick={() => handler(false)}>
					<FontAwesomeIcon size='xl' icon={faXmark} />
				</button>
				{/* <div>
						<img
							src='/static/images/hisense-u8-uled-4k/related-product-item-2.png'
							alt='featured image'
							width='90%'
						/>
						<div class='product-details'>
							<span class='model'>Model: 75U9DG</span>
							<strong class='name'>U9DG Dual Cell Android TV</strong>
						</div>
						<div>
							<a href='#' class='btn btn-primary mt-6 mb-3'>
								75"
							</a>
						</div>
						<div class='authorized-dealer'>
							<span>Hisense Authorized Dealers</span>
							<button
								class='btn modal-btn'
								type='button'
								data-toggle='modal'
								data-target='#authorized-dealers-modal'>
								Why Buy from an Authorized Dealer?
								<i class='ms-2 fa-solid fa-up-right-from-square'></i>
							</button>
						</div>
					</div>
					<div>
						<div class='row justify-content-between align-items-center mx-0 bottom-border py-3'>
							<a href='#'>
								<img
									src='/static/images/hisense-u8-uled-4k/best-buy.png'
									alt='best buy'
								/>
							</a>
							<a href='#' class='btn dealer-link'>
								SHOP NOW
							</a>
						</div>
						<div class='row justify-content-between align-items-center mx-0 py-3'>
							<a href='#'>
								<img
									src='/static/images/hisense-u8-uled-4k/value-electronics.png'
									alt='value electronics'
								/>
							</a>
							<a href='#' class='btn dealer-link'>
								SHOP NOW
							</a>
						</div>
					</div> */}
				{type === 'ChannelAdvisor' ? (
					<>
						<ChannelAdvisorDynamicRetailer condition={condition} model={model} />
						{/* <iframe
						width={'100%'}
						style={{ height: '83vh' }}
						height={'83vh'}
						src={`https://where-to-buy.co/widgets/core/BuyOnlineBuyLocalV2/index.html?pid=12040849&model=${model}`}
						frameBorder='0'></iframe> */}
					</>
				) : (
					<>
						<CustomChannelAdvisor id={productId} />
						<div className='link_box'>
							<h5>Hisense Authorized Dealers</h5>
							<Link href={'/authorized-retailers'}>
								<a>
									Why Buy from an Authorized Dealer? <GoToPageIcon />
								</a>
							</Link>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default ModalChanelAdviser
