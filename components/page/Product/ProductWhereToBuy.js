import React, { useState } from 'react'
import ModalChanelAdviser from './ModalChanelAdviser'

const ProductWhereToBuy = ({ pim, data }) => {
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	const { structure } = data
	return (
		<>
			<div id={data.name + data.id} className='product_wtb'>
				<div className='box'>
					<h4 className='title'>{structure?.title?.value}</h4>
					<h4 className='subtitle'>{structure?.littleTitle?.value}</h4>
				</div>
				<button
					onClick={() => setChanelAdviserHandler(true)}
					disabled={
						pim?.buy_status === 'ChannelAdvisor' ||
						pim?.buy_status === 'Internal'
							? false
							: true
					}
					className='n-btn white'
					style={{
						padding: '14px 16px 15px'
					}}>
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
