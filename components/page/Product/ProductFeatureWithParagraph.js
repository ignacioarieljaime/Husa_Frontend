import React, { useState } from 'react'

const ProductFeatureWithParagraph = ({ data }) => {
	const [detailCondition, setDetailCondition] = useState(false)
	const { structure } = data
	return (
		<section id={data.name + data.id}>
			<div class='jarg-section bg-light'>
				<div class='container px-lg-20'>
					<div class='row'>
						<div>
							<img
								src={structure.image.src}
								alt={structure.image.alt}
								class='m-auto'
								width='100%'
							/>
							<div class='jarg-switch'>
								<span class='jarg-on active'>JARGON</span>
								<input
									type='checkbox'
									name='jarg-switch'
									class='switch-button'
									id='jarg-switch'
									onChange={() => setDetailCondition(!detailCondition)}
								/>
								<label for='jarg-switch'></label>
								<span class='jarg-off'>JARGOFF</span>
							</div>
						</div>
						<div class='jarg-text-section mt-5'>
							<span class='jarg-toggle-text'>
								{detailCondition ? (
									<>{structure.paragraphOn.value}</>
								) : (
									<>{structure.paragraphOff.value}</>
								)}
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductFeatureWithParagraph
