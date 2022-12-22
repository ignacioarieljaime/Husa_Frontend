import React, { useEffect, useState } from 'react'
import HomeAppliancePromoProductsItem from './HomeAppliancePromoProductsItem'

const HomeAppliancePromoProducts = ({ data }) => {
	const [content, setContent] = useState({})
	useEffect(() => {
		setContent(data?.structure)
	}, [])

	return (
		<section>
			<div className='home_appliances_promo_products'>
				<article className='article'>
					<div
						dangerouslySetInnerHTML={{ __html: content?.title?.value }}></div>
				</article>
				<div className='products row justify-content-center mx-0'>
					{content?.list?.value.map((item, index) => (
						<div key={index} className='col-12 col-sm-6 col-lg-4'>
							<HomeAppliancePromoProductsItem data={item} />
						</div>
					))}
				</div>
				<div
					className='note'
					dangerouslySetInnerHTML={{ __html: content?.text?.value }}></div>
			</div>
		</section>
	)
}

export default HomeAppliancePromoProducts
