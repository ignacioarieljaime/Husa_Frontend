import React, { useState } from 'react'
const ModalChanelAdviser = dynamic(() => import('./ModalChanelAdviser'))

const WhereToBuy = ({ pim, data }) => {
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)

	return (
		<div className='vertical-where-to-buy'>
			<button
				className='btn btn-primary rounded-0 px-6 py-3'
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
