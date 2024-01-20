import React, { useEffect, useState } from 'react'

const GoogleTvFeatureBlocksType3 = ({ data }) => {
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
						<div className='block_4'>
							<div className='content'>
								<div className='title'>
									{structure?.block1?.value?.title?.value}
								</div>
								<div className='subtitle mb-10'>
									{structure?.block1?.value?.subtitle?.value}
								</div>
								<img
									src={structure?.block1?.value?.image?.src}
									alt={structure?.block1?.value?.image?.alt}
									width='40%'
									height='80%'
								/>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-6 py-3'>
						<div
							className='block_5'
							style={{
								backgroundImage:
									'url(' + structure?.block2?.value?.backgroundImage?.src + ')'
							}}>
							<div className='content'>
								<div
									className='title'
									dangerouslySetInnerHTML={{
										__html: structure?.block2?.value?.text?.value
									}}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default GoogleTvFeatureBlocksType3
