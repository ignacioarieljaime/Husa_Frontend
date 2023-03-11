import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const FlightNightConfirmationDiscovery = ({ data }) => {
	let { structure } = data
	const [text, setText] = useState(null)

	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return (
		<section>
			<div className='flight_night_discovery'>
				<h3
					dangerouslySetInnerHTML={{ __html: text }}
					className='title px-4 px-sm-0'></h3>
				<div className='discover'>
					{structure?.list?.value?.map(item => (
						<div className='item'>
							<CustomImage
								wrapperWidth='100%'
								WrapperMaxWidth='125px'
								wrapperMaxHeight='auto'
								wrapperClass='mx-auto mt-4'
								src={item?.image?.src}
								alt={item?.image?.alt}
							/>
							<div className='mt-4'>
								<h4
									dangerouslySetInnerHTML={{ __html: item?.title?.value }}
									className='item_title'></h4>

								<a
									target={'_blank'}
									href={item?.link?.value ? item?.link?.value : '/'}
									className='n-btn outline-black d-block w-fit mx-auto p-4'>
									{item?.link?.title}
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default FlightNightConfirmationDiscovery
