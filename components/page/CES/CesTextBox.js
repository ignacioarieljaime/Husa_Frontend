import Link from 'next/link'
import React from 'react'

const CesTextBox = ({ data: { structure } }) => {
	return (
		<section>
			<div className='ces_text_box'>
				<h2 className='title'>{structure?.title?.value}</h2>
				<div
					className='subtitle'
					dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				{structure?.link?.value ? (
					<Link href={structure?.link?.value}>
						<a className='n-btn outline-black d-block w-fit mx-auto'>
							{structure?.link?.title}
						</a>
					</Link>
				) : null}
			</div>
		</section>
	)
}

export default CesTextBox
