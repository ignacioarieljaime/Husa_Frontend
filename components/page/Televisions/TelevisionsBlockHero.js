import React, { useEffect, useState } from 'react'

const TelevisionsBlockHero = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	return (
		<section>
			<div className='televisions-hero'>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					className='image'
				/>
				<div className='content'>
					<div dangerouslySetInnerHTML={{ __html: text }}></div>
				</div>
			</div>
		</section>
	)
}

export default TelevisionsBlockHero
