import React, { useEffect, useState } from 'react'

function MoreTVHisensePromise({ data }) {
	const { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.paragraph?.value)
	}, [])
	return (
		<section>
			<div className='blue-bg-more-tv '>
				<div className='container-fluid bg-bubble-effect px-md-8 py-20'>
					<div className='row align-items-end'>
						<div className='col-12 col-md-6 mb-20'>
							<h4 className='fs-3hx fw-normal text-white mb-20'>
								{structure?.title?.value}
							</h4>
							<p
								className='fs-5 text-white fw-normal mb-7'
								dangerouslySetInnerHTML={{
									__html: text
								}}></p>
							<img
								src={structure?.image?.src}
								height={56}
								alt={structure?.image?.alt}
							/>
						</div>
						<div className='col-12 col-md-6'>
							<img
								src={structure?.imagePerson?.src}
								alt={structure?.imagePerson?.alt}
								width='100%'
								className='mb-n20'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoreTVHisensePromise
