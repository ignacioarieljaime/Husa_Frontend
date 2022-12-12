import CustomImage from 'components/common/CustomImage'
import React from 'react'

const AndroidTv = ({ data: { structure } }) => {
	return (
		<section className='l9g'>
			<div className='container-fluid py-10 py-md-20'>
				<div
					className='px-4 px-md-20 aos-init aos-animate'
					data-aos='fade'
					data-aos-delay='0'
					data-aos-duration='1000'>
					<h2
						className='fs-5 l9g_big_title fs-md-2hx fw-bold mb-5'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h2>
				</div>
				<div className='row align-items-start px-1 px-md-17'>
					{structure?.list?.value.map((item, index) => (
						<div className='col-12 col-md-6' key={index}>
							<article className=' text-start'>
								<CustomImage
									src={item?.image?.src}
									alt={item?.image?.alt}
									wrapperWidth='100%'
									wrapperClass='my-4 my-md-19'
								/>
								<div>
									<h3
										className='fs-5 fs-md-1 mb-3'
										data-aos='fade-zoom-in'
										data-aos-duration='1000'
										data-aos-delay='450'>
										{item?.title?.value}
									</h3>
									<div
										className='fs-9 fs-md-2 lh-base fw-light m-auto mb-4'
										dangerouslySetInnerHTML={{
											__html: item?.text?.value
										}}></div>
								</div>
							</article>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default AndroidTv
