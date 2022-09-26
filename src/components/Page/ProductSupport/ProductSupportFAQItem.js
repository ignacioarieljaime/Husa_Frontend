import React, { useState } from 'react'

function ProductSupportFAQItem() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div class='accordion-item'>
			<h2 class='accordion-header' id='flush-headingOne'>
				<button
					onClick={() => setIsOpen(state => !state)}
					class={`accordion-button ${!isOpen && 'collapsed'}`}
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#flush-collapseOne'
					aria-expanded='false'
					aria-controls='flush-collapseOne'>
					Lorem Ipsum?
				</button>
			</h2>
			<div
				id='flush-collapseOne'
				class={`accordion-collapse collapse  ${isOpen ? 'show' : 'collapsed'}`}
				aria-labelledby='flush-headingOne'
				data-bs-parent='#accordionFlushExample'>
				<div class='accordion-body'>
					Placeholder content for this accordion, which is intended to
					demonstrate the <code>.accordion-flush</code> class. This is the first
					item's accordion body.
				</div>
			</div>
		</div>
	)
}

export default ProductSupportFAQItem
