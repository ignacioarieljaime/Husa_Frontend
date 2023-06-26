import React, { useState, useEffect } from 'react'
import CustomImage from 'components/common/CustomImage'

const CareersBanner = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return (
		<section>
			<div className='careers_banner'>
				<div className='background'>
					<CustomImage
						src={structure?.background?.src}
						alt={structure?.background?.alt}
						wrapperHeight={'100%'}
						wrapperWidth={'100%'}
					/>
				</div>
				<div className='content'>
					<CustomImage
						src={structure?.logo?.src}
						alt={structure?.logo?.alt}
						className='logo'
						wrapperHeight={'100%'}
						wrapperWidth={'100%'}
					/>
					{text ? (
						<h2
							className='title'
							dangerouslySetInnerHTML={{
								__html: text
							}}></h2>
					) : null}
				</div>
			</div>
		</section>
	)
}

export default CareersBanner
