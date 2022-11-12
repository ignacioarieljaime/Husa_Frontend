import React from 'react'

const TelevisionsBlockHero = ({ data: { structure } }) => {
	structure = {
		image: {
			src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/458eb01487/Soundbar-Main__ScaleMaxWidthWzMwNDhd.jpg-wlpjvr.jpg',
			alt: 'Hero'
		},
		title: {
			value: '<h1>Less talk, <span>more TV.</span></h1>'
		}
	}

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
