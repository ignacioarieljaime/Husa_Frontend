import CustomImage from 'components/common/CustomImage'
import React, { useEffect, useState } from 'react'

const FlightNightConfirmationSocialMedia = ({ data }) => {
	let { structure } = data
	const [text, setText] = useState(null)
	const [subtitle, setSubtitle] = useState(null)
	const [bottomText, setBottomText] = useState(null)

	useEffect(() => {
		setText(structure?.title?.value)
		setSubtitle(structure?.subtitle?.value)
		setBottomText(structure?.text?.value)
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
							<button className='n-btn primary p-4'>
								Follow Us
								<CustomImage
									wrapperClass='d-inline-block'
									WrapperMaxWidth='20px'
									WrapperMaxHeight='20px'
									src={structure?.image2?.src}
									alt={structure?.image2?.alt}
								/>
							</button>
							<div className='caption'>
								<p>{structure?.caption2?.title}</p>
							</div>
						</div>
						<div className='col-12 col-sm-6 text-center mb-8'>
							<CustomImage
								wrapperClass='mx-auto'
								WrapperMaxWidth='75px'
								src={structure?.image1?.src}
								alt={structure?.image1?.alt}
							/>
							<div className='caption'>
								<p>{structure?.caption1?.title}</p>
							</div>
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
