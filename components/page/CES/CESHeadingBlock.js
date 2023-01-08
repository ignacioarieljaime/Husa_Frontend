import React, { useEffect, useState } from 'react'

const CESHeadingBlock = ({ data }) => {
	const [content, setContent] = useState({ data })
	useEffect(() => {
		setContent(data?.structure)
	}, [])

	return (
		<section>
			<div className='py-10 ces_events'>
				<article
					className='article mx-auto px-3'
					style={{ maxWidth: '1000px' }}>
					<div className='text-center'>
						<h2
							dangerouslySetInnerHTML={{
								__html: content?.title?.value
							}}></h2>
					</div>
					{content?.description?.value ? (
						<div className='text-center'>
							<div
								className='text-black mb-10'
								style={{ fontSize: '20px' }}
								dangerouslySetInnerHTML={{
									__html: content?.description?.value
								}}></div>
						</div>
					) : null}
				</article>
			</div>
		</section>
	)
}

export default CESHeadingBlock
