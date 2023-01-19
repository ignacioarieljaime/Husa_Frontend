import React, { useState, useEffect } from 'react'
import CustomImage from 'components/common/CustomImage'

const CesPeople = ({ data }) => {
	const [content, setContent] = useState()
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div className='py-10 ces_events ces_people'>
				<article className='small_article'>
					<h2 className='text-center mt-4 mb-17'>{content?.title?.value}</h2>
				</article>
				<div className='row justify-content-center aling-items-center mx-0'>
					<div className='col-12 col-md-6 column px-0'>
						<div className='px-3 mb-14 mb-md-18'>
							<div className='img_container'>
								<CustomImage
									src={content?.image1?.src}
									alt={content?.image1?.alt}
									wrapperWidth={'110%'}
									wrapperHeight={'100%'}
								/>
							</div>
						</div>
						<article
							className=' px-8 article mx-auto px-3 '
							style={{ maxWidth: '1000px' }}>
							<CustomImage
								src={content?.personImage1?.src}
								alt={content?.personImage1?.alt}
								wrapperWidth={'120px'}
								wrapperHeight={'120px'}
							/>
							{content?.text1?.value ? (
								<div
									className='text-black mt-10'
									style={{ fontSize: '20px' }}
									dangerouslySetInnerHTML={{
										__html: content?.text1?.value
									}}></div>
							) : null}
						</article>
					</div>
					<div className='col-12 col-md-6 column px-0'>
						<div className='px-3 mb-14 mb-md-18'>
							<div className='img_container'>
								<CustomImage
									src={content?.image2?.src}
									alt={content?.image2?.alt}
									wrapperWidth={'110%'}
									wrapperHeight={'100%'}
								/>
							</div>
						</div>
						<article
							className='px-8 article mx-auto px-3 divider'
							style={{ maxWidth: '1000px' }}>
							<CustomImage
								src={content?.personImage2?.src}
								alt={content?.personImage2?.alt}
								wrapperWidth={'120px'}
								wrapperHeight={'120px'}
							/>
							{content?.text2?.value ? (
								<div
									className='text-black mt-10'
									style={{ fontSize: '20px' }}
									dangerouslySetInnerHTML={{
										__html: content?.text2?.value
									}}></div>
							) : null}
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CesPeople
