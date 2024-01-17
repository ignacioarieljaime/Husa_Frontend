import React, { useEffect, useState } from 'react'

const AboutUsTimeline = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section>
			<div id={data?.name + data?.id} className='aboutus_timeline'>
				<div className='content'>
					<h3
						className='title'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h3>
					<div
						className='text'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				</div>
				<div className='timeline'>
					{structure?.list?.value.map((item, index) => (
						<div key={index} className='time_period'>
							<h5
								className='time'
								dangerouslySetInnerHTML={{ __html: item?.title?.value }}></h5>
							<div className='achivments'>
								{item?.list?.value.map((_item, _index) => (
									<div key={_index} className='achivment_item'>
										<div className='pin'>
											<div className='icon_wrapper'>
												<img
													src={_item?.image?.src}
													alt={_item?.image?.alt}
													className='icon'
												/>
											</div>
											<div className='line'></div>
										</div>
										<h5
											className='description'
											dangerouslySetInnerHTML={{
												__html: _item?.description?.value.includes('&nbsp;')
													? _item?.description?.value.split('&nbsp;').join(' ')
													: _item?.description?.value
											}}></h5>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default AboutUsTimeline
