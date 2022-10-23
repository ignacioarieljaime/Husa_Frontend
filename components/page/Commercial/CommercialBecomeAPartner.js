import React from 'react'

function CommercialBecomeAPartner({ data }) {
	let { structure } = data
	return (
		<section>
			<div className='contact-banner container py-9'>
				<article className='article text-center'>
					<h2 className='mb-6'>{structure?.title?.value}</h2>
					<div>
						<p className='m-auto'>
							Contact us at:
							<a
								href={`mailto:${structure?.email?.value}`}
								className='text-primary ms-2'>
								{structure?.email?.value}
							</a>
						</p>
					</div>
				</article>
			</div>
		</section>
	)
}

export default CommercialBecomeAPartner
