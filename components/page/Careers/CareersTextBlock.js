import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const CareersTextBlock = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section>
			<div id={data?.name + data?.id} className='careers_text_block'>
				<div className='content'>
					<h3
						className='title'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h3>
					{structure?.link?.value && (
						<Link href={structure?.link?.value}>
							<a
								className='n-btn large primary d-block w-fit mx-auto'
								style={{
									lineHeight: '15px',
									fontSize: '22px',
									fontWeight: 500
								}}>
								{structure?.link?.title}
							</a>
						</Link>
					)}
				</div>
			</div>
		</section>
	)
}

export default CareersTextBlock
