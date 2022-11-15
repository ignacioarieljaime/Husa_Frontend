import React from 'react'
import ProductSupportFAQItem from './ProductSupportFAQItem'

function ProductSupportFAQ() {

	return (
		<section className='border-bottom border-dark' id='#faqs'>
			<div className='container py-20'>
				<h2 className='mb-15 fs-2'>Laser TV Frequently Asked Questions</h2>
				<div
					className='accordion product-support-accordion accordion-flush form-container mx-auto custom-accordion'
					id='accordionFlushExample'>
					<ProductSupportFAQItem />
					<ProductSupportFAQItem />
					<ProductSupportFAQItem />
					<ProductSupportFAQItem />

				</div>
			</div>
		</section>
	)
}

export default ProductSupportFAQ
