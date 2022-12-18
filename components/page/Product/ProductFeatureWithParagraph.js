import React, { useState } from 'react'

const ProductFeatureWithParagraph = ({ data }) => {
	const [btnCondition, setBtnCondition] = useState(false)
	const { structure } = data
	return (
		<section id={data.name + data.id}>
			<div class='jarg-section bg-light'>
				<div class='px-lg-20 jarg_container'>
					<div class='row'>
						<div class='col-12'>
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
									id='jarg-switch-paragraph'
									onChange={() => setBtnCondition(!btnCondition)}
								/>
								<label for='jarg-switch-paragraph'></label>
								<span class='jarg-off'>JARGOFF</span>
							</div>
						</div>
						<div class='jarg-text-section mt-5'>
							<span class='jarg-toggle-text'>
								{btnCondition ? (
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
