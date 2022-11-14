import React from 'react'

function CommercialIntro({ data: { structure } }) {
	return (
		<section>
			<div className='black-banner px-md-4 pb-md-4 pt-0 pt-md-15'>
				<div className='container px-6 px-md-8 py-20'>
					<article className='article text-center'>
						<h2 className='text-white mb-6'>
							{structure?.title?.value}
							<span className='text-primary d-block d-sm-inline ms-2'>
								{structure?.coloredTitle?.value}
							</span>
						</h2>
						<div>
							<p className='text-white lh-base m-auto'>
								{structure?.paragraph?.value}
							</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default CommercialIntro
