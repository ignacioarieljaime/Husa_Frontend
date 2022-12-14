import React from 'react'

const GoogleTvFeatureBlocks = ({ data }) => {
	let { structure } = data
	return (
		<section>
			<div className='google_tv_feature_blocks'>
				<div className='custom_container'>
					<div className={`google-tv-text-box transparent`}>
						<article className='article'>
							<div
								dangerouslySetInnerHTML={{
									__html: structure?.text?.value
								}}></div>
						</article>
					</div>
					<div className='image'>
						<img src={structure?.image?.src} alt={structure?.image?.alt} />
					</div>
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
									<div className='d-flex justify-content-center align-items-center'>
										<img
											src={structure?.block2?.value?.icon1?.src}
											alt={structure?.block2?.value?.icon1?.alt}
											width='10%'
											className='me-3'
										/>
										<img
											src={structure?.block2?.value?.icon2?.src}
											alt={structure?.block2?.value?.icon2?.alt}
											width='10%'
											className='ms-3'
										/>
									</div>
									<div className='d-flex justify-content-center align-items-center flex-wrap flex-md-nowrap mb-7'>
										<img
											src={structure?.block2?.value?.image1?.src}
											alt={structure?.block2?.value?.image1?.alt}
											className='full-size-sm'
										/>
										<img
											src={structure?.block2?.value?.image2?.src}
											alt={structure?.block2?.value?.image2?.alt}
											className='full-size-sm'
										/>
									</div>
									<div
										className='subtitle'
										dangerouslySetInnerHTML={{
											__html: structure?.block2?.value?.subtitle?.value
										}}></div>
								</div>
							</div>
						</div>
						<div className='col-12 py-3'>
							<div className='block_3'>
								<div className='content'>
									<img
										src={structure?.block3?.value?.icon?.src}
										alt={structure?.block3?.value?.icon?.alt}
										width='50'
									/>
									<div
										dangerouslySetInnerHTML={{
											__html: structure?.block3?.value?.subtitle?.value
										}}
										className='subtitle'></div>
									<div className='title'>
										{structure?.block3?.value?.title?.value}
									</div>
									<div className='images'>
										{structure?.block3?.value?.list?.value.map(
											(item, index) => (
												<img
													key={index}
													src={item.image?.src}
													alt={item.image?.alt}
													width={
														100 / structure?.block3?.value?.list?.value.length +
														'%'
													}
												/>
											)
										)}
									</div>
									<div
										className='text'
										dangerouslySetInnerHTML={{
											__html: structure?.block3?.value?.text?.value
										}}></div>
								</div>
							</div>
						</div>
						<div className='col-12 col-md-6 py-3'>
							<div className='block_4'>
								<div className='content'>
									<div className='title'>
										{structure?.block4?.value?.title?.value}
									</div>
									<div className='subtitle mb-10'>
										{structure?.block4?.value?.subtitle?.value}
									</div>
									<img
										src={structure?.block4?.value?.image?.src}
										alt={structure?.block4?.value?.image?.alt}
										width='100%'
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
										'url(' +
										structure?.block5?.value?.backgroundImage?.src +
										')'
								}}>
								<div className='content'>
									<div
										className='title'
										dangerouslySetInnerHTML={{
											__html: structure?.block5?.value?.text?.value
										}}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default GoogleTvFeatureBlocks
