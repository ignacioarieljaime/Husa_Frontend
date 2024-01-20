import CustomImage from 'components/common/CustomImage'
import React, { useEffect, useState } from 'react'

const LaserTvInstallationDescription = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section className='laser_installation_description'>
			<div className='content'>
				<h3
					className='title'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h3>
				<div className='d-flex justify-content-center align-items.center flex-wrap'>
					{structure?.list?.value.map((item, index) => (
						<div className='item' key={index}>
							<CustomImage
								src={item?.image?.src}
								alt={item?.image?.alt}
								wrapperClass='image'
							/>
						</div>
					))}
				</div>
				<div
					className='text'
					dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
			</div>
		</section>
	)
}

export default LaserTvInstallationDescription
