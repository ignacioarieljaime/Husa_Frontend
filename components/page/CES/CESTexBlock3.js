import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const CESTexBlock3 = ({ data }) => {
	const [content, setContent] = useState({ data })

	useEffect(() => {
		setContent(data?.structure)
	}, [])

	return (
		<section>
			<div className='ces_cards'>
				<div className='custom_container small'>
					<div className='title large text-center'>
						<h2
							dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h2>
					</div>
					<div className='text-center'>
						<div
							className='text-white mb-20'
							style={{ fontSize: '20px' }}
							dangerouslySetInnerHTML={{
								__html: content?.description?.value
							}}></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CESTexBlock3
