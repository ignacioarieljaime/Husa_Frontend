import React, { useEffect, useState } from 'react'
import ModalChanelAdviser from './ModalChanelAdviser'

const ProductWhereToBuy = ({ pim, data }) => {
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	const { structure } = data

	useEffect(() => {
		window?.PriceSpider.rebind()
	}, [])

	return (
		<>
			<div id={data.name + data.id} className='product_wtb'>
				<div className='box'>
					<h4 className='title'>{structure?.title?.value}</h4>
					<h4 className='subtitle'>{structure?.littleTitle?.value}</h4>
				</div>
				{pim?.buy_status === 'ChannelAdvisor' ? (
					<section className='text-center w-full d-flex justify-content-center align-items-center'>
						<div
							style={{
								margin: '0 auto'
							}}
							className='ps-widget w-full mx-auto text-center'
							ps-sku={pim?.model}></div>
					</section>
				) : (
					<button
						onClick={() => setChanelAdviserHandler(true)}
						disabled={
							pim?.buy_status === 'ChannelAdvisor' ||
							pim?.buy_status === 'Internal'
								? false
								: true
						}
						className='n-btn medium white'
						style={{
							padding: '14px 16px 15px'
						}}>
						{structure?.whereToBuy?.title}
					</button>
				)}
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
