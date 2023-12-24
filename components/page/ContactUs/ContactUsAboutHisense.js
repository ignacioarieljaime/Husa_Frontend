import React, { useEffect, useState } from 'react'

import Image from 'public/assets/images/4k-uled/heading.jpg'

function ContactUsAboutHisense({ data }) {
	let { structure } = data
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section className=''>
			<div className='row mx-0'>
				<div className='col-12 col-md-6 px-0 bg-black'>
					<article className='article row justify-content-center align-items-center h-100 mx-0 p-10 p-sm-20 p-md-5 p-lg-20'>
						<div className='px-xl-20'>
							<h4 className='mb-10 fs-2hx text-white'>
								{content?.title?.value}
							</h4>
							<div className='pb-8'>
								<div
									dangerouslySetInnerHTML={{ __html: content?.text?.value }}
									className='fs-base fw-normal text-white mb-0'></div>
							</div>
							<div
								dangerouslySetInnerHTML={{ __html: content?.address?.value }}
								className='p-0 list-unstyled pt-8 border-primary border-top text-white fs-base fw-normal'></div>
						</div>
					</article>
				</div>
				<div className='col-12 col-md-6 px-0 header-secondary'>
					<img
						src={content?.image?.src}
						alt={content?.image?.alt}
						width='100%'
						height='100%'
					/>
				</div>
			</div>
		</section>
	)
}

export default ContactUsAboutHisense
