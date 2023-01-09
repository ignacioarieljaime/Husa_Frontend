import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const CesImagesBlock1 = ({ data }) => {
	const [content, setContent] = useState({ data })

	useEffect(() => {
		setContent(data?.structure)
	}, [])

	return (
		<section className='w-100'>
			<div className='ces_cards px-3 pt-3 pb-12'>
				<div className='custom_container'>
					{content?.blockTitle?.value ? (
						<div className='title'>
							<h2
								dangerouslySetInnerHTML={{
									__html: content?.blockTitle?.value
								}}></h2>
						</div>
					) : null}
					<div className='row justify-content-center align-items-center boxes px-3'>
						<div
							className='box middle-type flex-column d-flex col-12 col-md-6'
							style={{ paddingTop: '40%' }}>
							<div className='box-background'>
								<img
									src={content?.image1?.src}
									alt={content?.image1?.alt}
									width='100%'
									height='100%'
								/>
							</div>
							<div className='box-content'>
								<div className='d-flex flex-column justify-content-between align-items-center w-100'>
									<h3 className='text-white mb-3 mb-md-8 title fs-2'>
										{content?.title1?.value}
									</h3>
									{content?.link1?.value ? (
										<Link href={content?.link1?.value}>
											<a className='outline-white n-btn transparent d-block w-fit '>
												{content?.link1?.title}
											</a>
										</Link>
									) : null}
								</div>
							</div>
						</div>
						<div
							className='box middle-type flex-column d-flex col-12 col-md-6'
							style={{ paddingTop: '40%' }}>
							<div className='box-background'>
								<img
									src={content?.image2?.src}
									alt={content?.image2?.alt}
									width='100%'
									height='100%'
								/>
							</div>
							<div className='box-content'>
								<div className='d-flex flex-column justify-content-between align-items-center w-100'>
									<h3 className='text-white mb-3 mb-md-8 title fs-2'>
										{content?.title2?.value}
									</h3>
									{content?.link2?.value ? (
										<Link href={content?.link2?.value}>
											<a className='n-btn transparent d-block w-fit outline-white '>
												{content?.link2?.title}
											</a>
										</Link>
									) : null}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default CesImagesBlock1
