import React from 'react'
import TelevisionsBlockSpotlightItem from './TelevisionsBlockSpotlightItem'

const TelevisionsBlockSpotlight = ({ data: { structure } }) => {
	return (
		<section>
			<div className='televisions-spotlight '>
				<div className='container'>
					<div
						className='text-content'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
					<div className='row justify-content-center align-content-stretch items'>
						{structure?.list?.value.map((item, index) => (
							<TelevisionsBlockSpotlightItem data={item} key={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TelevisionsBlockSpotlight
