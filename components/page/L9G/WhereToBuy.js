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
					pim?.retailers.length !== 0
						? setChanelAdviserHandler(!chanelAdviserHandler)
						: {}
				}>
				{pim?.retailers.length !== 0 ? 'Where To Buy' : 'coming soon'}
			</button>
			{chanelAdviserHandler && (
				<ModalChanelAdviser
					condition={chanelAdviserHandler}
					handler={setChanelAdviserHandler}
					model={pim?.model}
				/>
			)}
		</div>
	)
}

export default WhereToBuy
