import React, { useEffect, useState } from 'react'

const GoogleTvFeatureBlocksType2 = ({ data }) => {
	let { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section className='google_tv_feature_blocks'>
			<div className='custom_container'>
				<div className='row justify-content-center align-items-stretch'>
					<div className='col-12 py-3'>
						<div className='block_3'>
							<div className='content'>
								<img
									src={structure?.block1?.value?.icon?.src}
									alt={structure?.block1?.value?.icon?.alt}
									width='150'
									className='mb-4'
								/>
								<div
									dangerouslySetInnerHTML={{
										__html: structure?.block1?.value?.subtitle?.value
									}}
									className='subtitle'></div>
								<div className='title'>
									{structure?.block1?.value?.title?.value}
								</div>
								<div className='images'>
									<img
										src={structure?.block1?.value?.image?.src}
										alt={structure?.block1?.value?.image?.alt}
										width={'100%'}
									/>
								</div>
								<div
									className='text'
									dangerouslySetInnerHTML={{
										__html: structure?.block1?.value?.text?.value
									}}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default GoogleTvFeatureBlocksType2
