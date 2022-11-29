import React from 'react'

function LaserTitleAndSubtitleBox({ data: { structure } }) {
	return (
		<section>
			<div
				className={`${
					structure?.theme?.value === 'dark' ? 'black-banner' : ''
				}`}>
				<div className={`tiny-banner p-md-4`}>
					<div className='container px-6 px-md-8 py-20'>
						<article className='article text-center'>
							<h4
								className={`${
									structure?.theme?.value === 'dark' ? 'text-white' : ''
								} fs-2 fw-normal mb-12`}>
								{structure.title.value}
							</h4>
							<div>
								<p
									className={`${
										structure?.theme?.value === 'dark' ? 'text-white' : ''
									} fw-normal m-auto`}>
									{structure.description.value}
								</p>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default LaserTitleAndSubtitleBox
