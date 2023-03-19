import React, { useState } from 'react'
import ModalChanelAdviser from './ModalChanelAdviser'

const ProductWhereToBuy = ({ pim, data }) => {
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	const { structure } = data
	return (
		<>
			<div id={data.name + data.id} class='buy-green-banner'>
				<article className='article'>
					<h4 className='my-1'>{structure?.title?.value}</h4>
					<h4 className='mt-1'>{structure?.littleTitle?.value}</h4>
				</article>
				<button
					onClick={() => setChanelAdviserHandler(true)}
					disabled={
						pim?.buy_status === 'ChannelAdvisor' ||
						pim?.buy_status === 'Internal'
							? false
							: true
					}
					class='btn btn-turquoise'>
					{structure?.whereToBuy?.title}
				</button>
			</div>
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
		</>
	)
}

export default ProductWhereToBuy
