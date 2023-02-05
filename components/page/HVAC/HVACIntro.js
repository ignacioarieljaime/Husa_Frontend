import React, { useEffect, useState } from 'react'
import CustomImage from 'components/common/CustomImage'

const HVACIntro = ({ data }) => {
	const { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	})

	return (
		<section>
			<div className='hvac_banner'>
				<div className='content'>
					<CustomImage
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						WrapperMaxWidth={'300px'}
						wrapperWidth={'100%'}
						className='mx-auto'
					/>
					<h1 className='title'>{structure?.title?.value}</h1>
					<div
						className='text'
						dangerouslySetInnerHTML={{ __html: text }}></div>
				</div>
			</div>
		</section>
	)
}

export default HVACIntro
