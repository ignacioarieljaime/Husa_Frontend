import React from 'react'

const GoogleTvTops = ({ data: { structure } }) => {
	return (
		<section>
			<div className='google_tv_tops '>
				<div className='row justify-content-evenly align-items-center mx-3'>
					{structure?.list?.value.map((item, index) => (
						<div
							key={index}
							className={'google_tv_tops_item py-10 px-6 px-md-13 py-md-15'}
							style={{ width: 100 / structure?.list?.value?.length + '%' }}>
							<img
								height={'100px'}
								src={item?.image?.src}
								alt={item?.image?.alt}
								className='mb-3'
							/>
							<div
								dangerouslySetInnerHTML={{ __html: item?.text?.value }}
								className='fs-base mb-9'></div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default GoogleTvTops
