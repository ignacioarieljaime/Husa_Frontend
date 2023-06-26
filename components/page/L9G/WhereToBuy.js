import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const ModalChanelAdviser = dynamic(() =>
	import('../Product/ModalChanelAdviser')
)

const WhereToBuy = ({ pim, data }) => {
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)

	const dataLayerHandler = () => {
		setChanelAdviserHandler(!chanelAdviserHandler)
		window.dataLayer.push({
			event: 'view_product',
			eventData: {
				product_id: pim?.model,
				category: pim?.Category?.name
			}
		})
	}

	return (
		<div className='vertical-where-to-buy d-none d-md-block'>
			<button
				className={`btn ${
					pim?.buy_status === 'ChannelAdvisor' || pim?.buy_status === 'Internal'
						? ''
						: 'disabled'
				}`}
				onClick={() =>
					pim?.buy_status === 'ChannelAdvisor' || pim?.buy_status === 'Internal'
						? dataLayerHandler()
						: {}
				}>
				{pim?.buy_status === 'ChannelAdvisor' || pim?.buy_status === 'Internal'
					? 'Where To Buy'
					: 'coming soon'}
			</button>
			{pim && (
				<ModalChanelAdviser
					product={pim}
					productId={pim.id}
					type={pim.buy_status}
					condition={chanelAdviserHandler}
					handler={setChanelAdviserHandler}
					model={pim?.model}
				/>
			)}
		</div>
	)
}

export default WhereToBuy
