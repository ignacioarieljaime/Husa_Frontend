import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const FlightNightConfirmationSocialMedia = ({ data }) => {
	let { structure } = data
	const [text, setText] = useState(null)
	const [subtitle, setSubtitle] = useState(null)
	const [bottomText, setBottomText] = useState(null)
	const [captionOne, setCaptionOne] = useState(null)
	const [captionTwo, setCaptionTwo] = useState(null)

	useEffect(() => {
		setText(structure?.title?.value)
		setSubtitle(structure?.subtitle?.value)
		setBottomText(structure?.text?.value)
		setCaptionOne(structure?.caption1?.value)
		setCaptionTwo(structure?.caption2?.value)
	}, [])

	return (
		<section>
			<div className='flight_night_social_media'>
				<h2 dangerouslySetInnerHTML={{ __html: text }} className='title'></h2>
				<div className='line top'></div>
				<div>
					<div
						dangerouslySetInnerHTML={{ __html: subtitle }}
						className='subtitle'></div>
					<div className='row mx-0 justify-content-center align-items-start'>
						<div className='col-12 col-sm-6 text-center mb-8'>
							<Link
								href={structure?.link?.value ? structure?.link?.value : '/'}>
								<a className='n-btn primary p-4 gap-2 d-inline-flex m-auto'>
									{structure?.link?.title}
									<CustomImage
										wrapperClass='d-inline-block'
										WrapperMaxWidth='20px'
										WrapperMaxHeight='20px'
										wrapperWidth='20px'
										wrapperHeight='20px'
										src={structure?.image2?.src}
										alt={structure?.image2?.alt}
									/>
								</a>
							</Link>
							<div
								dangerouslySetInnerHTML={{ __html: captionTwo }}
								className='caption'></div>
						</div>
						<div className='col-12 col-sm-6 text-center mb-8'>
							<CustomImage
								wrapperClass='mx-auto'
								WrapperMaxWidth='75px'
								src={structure?.image1?.src}
								alt={structure?.image1?.alt}
							/>
							<div
								dangerouslySetInnerHTML={{ __html: captionOne }}
								className='caption'></div>
						</div>
					</div>
				</div>
				<div className='line bottom'></div>
				<div
					dangerouslySetInnerHTML={{ __html: bottomText }}
					className='text'></div>
			</div>
		</section>
	)
}

export default FlightNightConfirmationSocialMedia
