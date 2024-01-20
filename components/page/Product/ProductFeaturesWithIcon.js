import React, { useState, useEffect } from 'react'

const ProductFeatureWithParagraph = ({ data }) => {
	const [detailCondition, setDetailCondition] = useState(false)
	const { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.paragraph?.value)
	}, [])
	return (
		<>
			<section id={data.name + data.id}>
				<div className='jarg-section pt-0'>
					<div className='container-fluid px-lg-20'>
						<div className='row'>
							<div className='col-12'>
								<img
									src={structure.image.src}
									alt={structure.image.alt}
									className='m-auto'
									width='100%'
								/>
								{structure?.button?.value === 'active' && (
									<div className='jarg-switch'>
										<span className='jarg-on active'>JARGON</span>
										<input
											type='checkbox'
											name='jarg-switch'
											className='switch-button'
											id='jarg-switch'
											onChange={() => setDetailCondition(!detailCondition)}
										/>
										<label for='jarg-switch'></label>
										<span className='jarg-off'>JARGOFF</span>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='container-fluid px-lg-20'>
					<article className='row article align-items-center mx-0 w-100 mb-15'>
						<h2 className='col-12 col-md-6 mb-7 my-md-auto'>
							{structure?.blackTitle?.value}
							<span className='d-block text-secondary'>
								{structure?.coloredTitle?.value}
							</span>
						</h2>
						<p
							className='col-12 col-md-6 m-0 fw-light'
							dangerouslySetInnerHTML={{
								__html: text
							}}></p>
					</article>
					{structure?.button?.value === 'active' && (
						<>
							<div
								className={`row align-items-start justify-content-evenly flex-wrap jarg-flex mb-10 ${
									detailCondition ? 'd-none' : ''
								} `}>
								{structure?.listOff?.value.map((item, index) => (
									<div key={`list-off-${index}`} className='p-5'>
										<div className='p-2 rounded-4 bg-light-2'>
											<img
												src={item?.image?.src}
												alt={item?.image?.alt}
												width='120'
											/>
										</div>
										<div className='jarg-text-section mt-5'>
											<span className='jarg-toggle-text'>
												{item?.paragraph?.value}
											</span>
										</div>
									</div>
								))}
							</div>
							<div
								className={`row align-items-start justify-content-evenly flex-wrap jarg-flex mt-15 mb-10 ${
									!detailCondition ? 'd-none' : ''
								} `}>
								{structure?.listOn?.value.map((item, index) => (
									<div key={`list-on-${index}`} className='p-5'>
										<div className='p-2 rounded-4 bg-light-2'>
											<img
												src={item?.image?.src}
												alt={item?.image?.alt}
												width='120'
											/>
										</div>
										<div className='jarg-text-section mt-5'>
											<span className='jarg-toggle-text'>
												{item?.paragraph?.value}
											</span>
										</div>
									</div>
								))}
							</div>
						</>
					)}
				</div>
			</section>
		</>
	)
}

export default ProductFeatureWithParagraph
