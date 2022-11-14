import React from 'react'

const TelevisionsBlockHero = ({ data: { structure } }) => {
	return (
		<section>
			<div className='televisions-hero'>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					className='image'
				/>
				<div className='content'>
					<div
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
				</div>
			</div>
		</section>
	)
}

export default TelevisionsBlockHero
