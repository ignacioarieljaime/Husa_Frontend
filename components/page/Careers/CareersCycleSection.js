import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const CareersCycleSection = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div id={data?.name + data?.id} className='careers_cycle_section'>
				<div className='content'>
					<h3
						className='title pb-3 pt-6 py-md-7'
						dangerouslySetInnerHTML={{ __html: content?.title1?.value }}></h3>
					<div className='list'>
						{content?.list?.value.map((item, index) => (
							<div key={index} className='item'>
								<div className='image_wrapper'>
									<img
										src={item?.image?.src}
										alt={item?.image?.alt}
										className='image'
									/>
									<img
										src={item?.icon?.src}
										alt={item?.icon?.alt}
										className='icon'
									/>
								</div>
								<div className='text_content'>
									<h4
										className='title'
										dangerouslySetInnerHTML={{
											__html: item?.title?.value
										}}></h4>
									<h6
										className='text'
										dangerouslySetInnerHTML={{
											__html: item?.text?.value
										}}></h6>
								</div>
							</div>
						))}
					</div>
					<div className='second_article'>
						<h3
							className='title'
							dangerouslySetInnerHTML={{ __html: content?.title2?.value }}></h3>
						<h5
							className='text'
							dangerouslySetInnerHTML={{ __html: content?.text?.value }}></h5>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CareersCycleSection
