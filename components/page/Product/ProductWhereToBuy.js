import React, { useState } from 'react'
import ModalChanelAdviser from './ModalChanelAdviser'

const ProductWhereToBuy = ({ pim, data }) => {
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	const { structure } = data
	return (
		<>
			<div id={data.name + data.id} class='buy-green-banner'>
				<article className='article'>
					<h2 className='my-1'>{structure?.title?.value}</h2>
					<h2 className='mt-1'>{structure?.littleTitle?.value}</h2>
				</article>
				<button
					onClick={() => setChanelAdviserHandler(true)}
					disabled={pim?.buy_status === 'ChannelAdvisor' ? false : true}
					class='btn btn-turquoise'>
					{structure?.whereToBuy?.title}
				</button>
			</div>
			<ModalChanelAdviser
				condition={chanelAdviserHandler}
				handler={setChanelAdviserHandler}
				model={pim?.model}
			/>
		</>
	)
}

export default ProductWhereToBuy
