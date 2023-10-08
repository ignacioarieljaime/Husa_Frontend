import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const FlightNightConfirmationLaser = ({ data }) => {
	let { structure } = data
	const [text, setText] = useState(null)

	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<section>
			<div className='flight_night_laser'>
				<CustomImage
					WrapperMaxWidth='100px'
					wrapperClass='mx-auto mb-4'
					wrapperHeight='auto'
					wrapperWidth='100%'
					src={structure?.logoImage?.src}
					alt={structure?.logoImage?.alt}
				/>
				<CustomImage
					WrapperMaxWidth='150px'
					wrapperClass='mx-auto mb-4'
					wrapperHeight='auto'
					wrapperWidth='100%'
					src={structure?.modelImage?.src}
					alt={structure?.modelImage?.alt}
				/>
				<div dangerouslySetInnerHTML={{ __html: text }} className='text'></div>
				<div className='image_wrapper'>
					<div className='image_container'>
						<CustomImage
							wrapperHeight='100%'
							wrapperWidth='100%'
							wrapperClass='image'
							src={structure?.image?.src}
							alt={structure?.image?.alt}
						/>
					</div>
				</div>
				<Link
					target={structure?.link?.target ? structure?.link?.target : '_self'}
					href={structure?.link?.value ? structure?.link?.value : '/'}>
					<a
						target={structure?.link?.target ? structure?.link?.target : '_self'}
						className='n-btn outline-white transparent d-block w-fit mx-auto mt-4 medium'>
						{structure?.link?.title}
						{structure?.link?.target === '_blank' && (
							<img style={{ marginLeft: '10px' }} src={OpenPageOnNewTab.src} />
						)}
					</a>
				</Link>
			</div>
		</section>
	)
}

export default FlightNightConfirmationLaser
