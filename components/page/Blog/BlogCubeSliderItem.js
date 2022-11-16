import React, { useState } from 'react'
import ModalChanelAdviser from '../Product/ModalChanelAdviser'

const BlogCubeSliderItem = ({ data }) => {
	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)

	return (
		<>
			<div className='row align-items-center px-10'>
				<div className='col-12 col-md-5 order-2 order-md-1 text-center text-md-start'>
					<h5 className='fs-4 fw-normal mb-3'>{data?.model?.value}</h5>
					<h6 className='fs-3qx fw-normal mb-4 text-break'>
						{data?.title?.value}
					</h6>
					<p className='text-muted fw-normal mb-5'>
						{data?.description?.value}
					</p>
					<button
						onClick={() => {}}
						className='btn btn-outline-dark text-uppercase rounded-5 px-5 py-2 fs-8'>
						WHERE TO BUY
					</button>
				</div>
				<div className='col-12 col-md-7 order-1 order-md-2'>
					<img
						src={data?.image?.src}
						alt={data?.image?.alt}
						className='slider-media'
					/>
				</div>
			</div>
			<ModalChanelAdviser
				condition={chanelAdviserHandler}
				handler={setChanelAdviserHandler}
				// model={currentdata.model}
			/>
		</>
	)
}

export default BlogCubeSliderItem
