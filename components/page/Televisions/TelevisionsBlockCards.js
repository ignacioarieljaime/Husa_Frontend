import React from 'react'

const TelevisionsBlockCards = ({ data: { structure } }) => {
	structure = {
		title: {
			value: '<h2>Already purchased?</h2>'
		},
		subtitle: {
			value: '<p>Here’s few things that could help you enjoy your new TV.</p>'
		},
		list: {
			value: [{}]
		}
	}

	return (
		<section>
			<div className='televisions-cards'>
				<div className='container'>
					<div
						className='title'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
					<div
						className='subtitle'
						dangerouslySetInnerHTML={{
							__html: structure?.subtitle?.value
						}}></div>
				</div>
			</div>
		</section>
	)
}

export default TelevisionsBlockCards
