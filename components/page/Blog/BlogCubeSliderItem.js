import React, { useState, useEffect } from 'react'

const BlogCubeSliderItem = ({ data, modalHandler }) => {
	return (
		<>
			<div className='row align-items-center px-10 blog_cube_slider_item'>
				<div className='col-12 col-md-5 order-2 order-md-1 text-center text-md-start'>
					<h5 className='model fw-normal mb-3'>{data?.model?.value}</h5>
					<h6 className='title fw-normal mb-4 text-break'>
						{data?.title?.value}
					</h6>
					<div
						dangerouslySetInnerHTML={{ __html: data?.description?.value }}
						className='text-muted fw-normal mb-5'></div>
					<button
						onClick={() => {
							data?.link?.value.includes('openChannelAdvisor') &&
								modalHandler(data?.link?.value.split(':')[1])
						}}
						className='n-btn outline-black text-uppercase rounded-5 medium'>
						{data?.link?.title}
					</button>
				</div>
				<div className='col-12 col-md-7 order-1 order-md-2 image_container'>
					<img
						src={data?.image?.src}
						alt={data?.image?.alt}
						className='slider-media'
					/>
				</div>
			</div>
		</>
	)
}

export default BlogCubeSliderItem
