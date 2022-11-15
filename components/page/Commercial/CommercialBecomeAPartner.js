import React from 'react'

function CommercialBecomeAPartner({ data }) {
	let { structure } = data
	return (
		<section>
			<div className='contact-banner container py-9'>
				<article className='article text-center'>
					<h2 className='mb-6'>{structure?.title?.value}</h2>
					<div className='m-auto fs-4'>
						Contact us at:{' '}
						<a
							href={`mailto:${structure?.email?.value}`}
							className='text-primary'>
							{structure?.email?.value}
						</a>
					</div>
				</article>
			</div>
		</section>
	)
}

export default CommercialBecomeAPartner
