import React, { useEffect, useState } from 'react'

const GoogleTvFeatureBlocksType1 = ({ data }) => {
	let { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section className='google_tv_feature_blocks'>
			<div className='custom_container'>
				<div className='row justify-content-center align-items-stretch'>
					<div className='col-12 col-md-6 py-3'>
						<div className='block_1'>
							<div className='content'>
								<div
									className='title mb-10'
									dangerouslySetInnerHTML={{
										__html: structure?.block1?.value?.text?.value
									}}></div>
								<img
									src={structure?.block1?.value?.image?.src}
									alt={structure?.block1?.value?.image?.alt}
									width='100%'
									className='mb-md-5'
								/>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-6 py-3'>
						<div className='block_2'>
							<div className='content'>
								<div
									className='title mb-10'
									dangerouslySetInnerHTML={{
										__html: structure?.block2?.value?.text?.value
									}}></div>
								<div className='d-flex justify-content-center align-items-center w-100'>
									<img
										src={structure?.block2?.value?.image?.src}
										alt={structure?.block2?.value?.image?.alt}
										width='100%'
									/>
								</div>
								<div
									className='subtitle mt-12 mt-md-0'
									dangerouslySetInnerHTML={{
										__html: structure?.block2?.value?.subtitle?.value
									}}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default GoogleTvFeatureBlocksType1
