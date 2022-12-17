import React, { useEffect, useState } from 'react'
import TelevisionsBlockSpotlightItem from './TelevisionsBlockSpotlightItem'

const TelevisionsBlockSpotlight = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<section>
			<div className='televisions-spotlight '>
				<div className='container'>
					<div
						className='text-content'
						dangerouslySetInnerHTML={{ __html: text }}></div>
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
