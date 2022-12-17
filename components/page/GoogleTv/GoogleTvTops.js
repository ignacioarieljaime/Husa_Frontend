import React, { useEffect, useState } from 'react'

const GoogleTvTops = ({ data: { structure } }) => {
	const [list, setList] = useState([])
	useEffect(() => {
		setList(structure?.list?.value)
	}, [])
	return (
		<section>
			<div className='google_tv_tops '>
				<div className='row justify-content-evenly align-items-center mx-3'>
					{list.map((item, index) => (
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
							<h5 className='title'>{structure?.title?.value}</h5>
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
