import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const CESTexBlock2 = ({ data }) => {
	const [content, setContent] = useState({ data })

	useEffect(() => {
		setContent(data?.structure)
	}, [])

	return (
		<section>
			<div className='ces_cards'>
				<div className='custom_container text-center'>
					<div className='title large'>
						<h2
							dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h2>
					</div>
					<div className='row align-items-start flex-wrap flex-md-nowrap'>
						<div className='col-12 col-md-7 text-start mb-10 mb-md-0'>
							<h3 className='fs-1 fw-bolder-700 text-white mb-10	'>
								<span className='fs-2qx'>{content?.subtitle?.value}</span>
							</h3>
							<div
								className='text-white mb-20'
								dangerouslySetInnerHTML={{
									__html: content?.description?.value
								}}></div>
							{content?.link?.value ? (
								<Link href={content?.link?.value}>
									<a style={{ color: 'rgb(0, 204, 204)', fontSize: '18px' }}>
										{content?.link?.title}
									</a>
								</Link>
							) : null}
						</div>
						<div className='col-12 col-md-5 text-start'>
							<h5 className='text-white fs-2 mb-10'>
								<span style={{ fontSize: '18px' }}>
									{content?.specs?.value}
								</span>
							</h5>
							<ul style={{ lineHeight: '27px' }}>
								{content?.list?.value.map((item, index) => (
									<li key={index} className='text-white'>
										{item?.title?.value}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CESTexBlock2
