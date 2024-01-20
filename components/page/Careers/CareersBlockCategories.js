import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
const CareersBlockCategories = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section>
			<div id={data?.name + data?.id} className='careers_categories_block'>
				<div className='content'>
					<h3
						className='title'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h3>
					<h5
						className='text'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></h5>
				</div>
				<Splide
					options={{
						type: 'slide',
						pagination: true,
						perPage: 1,
						perMove: 1,
						focus: 'center',
						gap: '32px',
						arrows: false,
						breakpoints: {
							768: {
								gap: '16px'
							}
						}
					}}
					className='slider'>
					{structure?.list?.value.map((item, index) => (
						<SplideSlide key={index} className='item'>
							<img
								src={item?.image?.src}
								alt={item?.image?.alt}
								className='image'
							/>
						</SplideSlide>
					))}
				</Splide>
			</div>
		</section>
	)
}

export default CareersBlockCategories
