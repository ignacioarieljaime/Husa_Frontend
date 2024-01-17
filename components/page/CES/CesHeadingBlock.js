import React, { useEffect, useState } from 'react'

const CesHeadingBlock = ({ data }) => {
	const { structure } = data

	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])

	return (
		<section>
			<div className='py-10 ces_events'>
				<article
					className='article mx-auto px-3'
					style={{ maxWidth: '1000px' }}>
					<div className='text-center'>
						<h2
							dangerouslySetInnerHTML={{
								__html: structure?.title?.value
							}}></h2>
					</div>
					{structure?.description?.value ? (
						<div className='text-center'>
							<div
								className='text-black mb-10'
								style={{ fontSize: '20px' }}
								dangerouslySetInnerHTML={{
									__html: structure?.description?.value
								}}></div>
						</div>
					) : null}
				</article>
			</div>
		</section>
	)
}
export default CesHeadingBlock
