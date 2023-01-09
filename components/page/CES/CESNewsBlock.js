import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const CESNewsBlock = ({ data }) => {
	const [content, setContent] = useState({ data })

	useEffect(() => {
		setContent(data?.structure)
	}, [])

	return (
		<section>
			<div className='ces_news_container py-13'>
				<h2
					className='text-center mb-15'
					dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h2>
				<div className='row align-items-center'>
					<div className='col-12 col-md-7 mb-6 mb-md-0'>
						<h4 className='fs-4 fw-bolder-700 mb-5 text-black'>
							{content?.subtitle?.value}
						</h4>
						{content?.list?.value.map(
							(item, index) =>
								item?.link?.value && (
									<Link key='index' href={item?.link?.value}>
										<a className='ces_links'>{item?.link?.title}</a>
									</Link>
								)
						)}
					</div>
					<div className='col-12 col-md-5'>
						<div className='ces_contact_box'>
							<h4 className='title'>{content?.contact?.value} :</h4>
							<p className='fs-6 fw-light mb-0 text-black'>
								{content?.secondLink?.value ? (
									<Link href={content?.secondLink?.value}>
										<a className='me-1 link'>{content?.secondLink?.title}</a>
									</Link>
								) : null}
								{content?.text?.value}
							</p>
							<p className='fs-6 fw-light mb-0 text-black text-break'>
								{content?.email?.value}
							</p>
							<h4 className='title'>{content?.companyTitle?.value}</h4>
							<p className='address'>{content?.address?.value}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CESNewsBlock
