import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const ModalChanelAdviser = dynamic(() =>
	import('../Product/ModalChanelAdviser')
)

const WhereToBuy = ({ pim, data }) => {
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)

	return (
		<div className='vertical-where-to-buy d-none d-md-block'>
			<button
				className='btn'
				onClick={() =>
					pim?.buy_status === 'ChannelAdvisor'
						? setChanelAdviserHandler(!chanelAdviserHandler)
						: {}
				}>
				{pim?.buy_status === 'ChannelAdvisor' ? 'Where To Buy' : 'coming soon'}
			</button>
			<ModalChanelAdviser
				product={pim}
				condition={chanelAdviserHandler}
				handler={setChanelAdviserHandler}
				model={pim?.model}
			/>
		</div>
	)
}

export default WhereToBuy
