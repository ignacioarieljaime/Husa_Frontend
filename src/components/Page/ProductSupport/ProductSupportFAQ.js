import React from 'react'
import ProductSupportFAQItem from './ProductSupportFAQItem'

function ProductSupportFAQ() {

	return (
		<section class='border-bottom border-dark' id='#faqs'>
			<div class='container py-20'>
				<h2 class='mb-15 fs-2'>Laser TV Frequently Asked Questions</h2>
				<div
					class='accordion accordion-flush form-container mx-auto custom-accordion'
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
