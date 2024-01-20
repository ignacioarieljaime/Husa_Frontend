import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const CesTexBlock3 = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])

	return (
		<section>
			<div className='ces_cards'>
				<div className='custom_container small'>
					<div className='title large text-center'>
						<div
							dangerouslySetInnerHTML={{
								__html: structure?.title?.value
							}}></div>
					</div>
					<div className='text-center'>
						<div
							className='text-white mb-20'
							style={{ fontSize: '20px' }}
							dangerouslySetInnerHTML={{
								__html: structure?.description?.value
							}}></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CesTexBlock3
