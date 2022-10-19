import React from 'react'

function CommercialIntro({ data: { structure } }) {
	return (
		<section>
			<div className='black-banner p-md-4'>
				<div className='container px-6 px-md-8 py-20'>
					<article className='article text-center'>
						<h2 className='text-white mb-6'>
							{structure.title.value}
							<span className='text-primary ms-2'>{structure.coloredTitle.value}</span>
						</h2>
						<div>
							<p className='text-white m-auto'>{structure.paragraph.value}</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default CommercialIntro
