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
				<div class='jarg-section pt-0'>
					<div class='container-fluid px-lg-20'>
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
										id='jarg-switch'
										onChange={() => setDetailCondition(!detailCondition)}
									/>
									<label for='jarg-switch'></label>
									<span class='jarg-off'>JARGOFF</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class='container-fluid px-lg-20'>
					<article class='row article align-items-center mx-0 w-100'>
						<h2 class='col-12 col-md-6 mb-7 my-md-auto'>
							{structure?.blackTitle?.value}
							<span class='d-block text-secondary'>
								{structure?.coloredTitle?.value}
							</span>
						</h2>
						<p
							class='col-12 col-md-6 m-0 fw-light'
							dangerouslySetInnerHTML={{
								__html: text
							}}></p>
					</article>
					<div
						class={`row align-items-start justify-content-evenly flex-wrap jarg-flex mt-15 mb-10 ${
							detailCondition ? 'd-none' : ''
						} `}>
						{structure?.listOff?.value.map((item, index) => (
							<div key={`list-off-${index}`} class='p-5'>
								<div class='p-2 rounded-4 bg-light-2'>
									<img
										src={item?.image?.src}
										alt={item?.image?.alt}
										width='120'
									/>
								</div>
								<div class='jarg-text-section mt-5'>
									<span class='jarg-toggle-text'>{item?.paragraph?.value}</span>
								</div>
							</div>
						))}
					</div>
					<div
						class={`row align-items-start justify-content-evenly flex-wrap jarg-flex mt-15 mb-10 ${
							!detailCondition ? 'd-none' : ''
						} `}>
						{structure?.listOn?.value.map((item, index) => (
							<div key={`list-on-${index}`} class='p-5'>
								<div class='p-2 rounded-4 bg-light-2'>
									<img
										src={item?.image?.src}
										alt={item?.image?.alt}
										width='120'
									/>
								</div>
								<div class='jarg-text-section mt-5'>
									<span class='jarg-toggle-text'>{item?.paragraph?.value}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default ProductFeatureWithParagraph
