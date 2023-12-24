import React, { useState } from 'react'

const ProductFeatureWithParagraph = ({ data }) => {
	const [btnCondition, setBtnCondition] = useState(false)
	const { structure } = data
	return (
		<section id={data.name + data.id}>
			<div className='jarg-section bg-light'>
				<div className='px-lg-20 jarg_container'>
					<div className='row'>
						<div className='col-12'>
							<img
								src={structure.image.src}
								alt={structure.image.alt}
								className='m-auto'
								width='100%'
							/>
							<div className='jarg-switch'>
								<span className='jarg-on active'>JARGON</span>
								<input
									type='checkbox'
									name='jarg-switch'
									className='switch-button'
									id='jarg-switch-paragraph'
									onChange={() => setBtnCondition(!btnCondition)}
								/>
								<label for='jarg-switch-paragraph'></label>
								<span className='jarg-off'>JARGOFF</span>
							</div>
						</div>
						<div className='jarg-text-section mt-5'>
							<span className='jarg-toggle-text'>
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
