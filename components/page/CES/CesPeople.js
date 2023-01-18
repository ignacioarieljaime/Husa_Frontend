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
				<div className='row justify-content-center aling-items-center mx-0'>
					<article
						className='col-12 col-md-6 px-3 px-md-7 article mx-auto px-3 '
						style={{ maxWidth: '1000px' }}>
						<CustomImage
							src={content?.image1?.src}
							alt={content?.image1?.alt}
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
					<article
						className='col-12 col-md-6 px-3 px-md-7 article mx-auto px-3 divider'
						style={{ maxWidth: '1000px' }}>
						<CustomImage
							src={content?.image2?.src}
							alt={content?.image2?.alt}
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
		</section>
	)
}

export default CesPeople
