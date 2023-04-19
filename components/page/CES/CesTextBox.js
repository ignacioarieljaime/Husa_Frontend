import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const CesTextBox = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<section>
			<div className='ces_text_box pt-20'>
				<h2 className='title'>{structure?.title?.value}</h2>
				<div
					className='subtitle'
					dangerouslySetInnerHTML={{ __html: text }}></div>
				{structure?.link?.value ? (
					<Link
						target={structure?.link?.target ? structure?.link?.target : '_self'}
						href={structure?.link?.value}>
						<a className='n-btn outline-black d-block w-fit mx-auto'>
							{structure?.link?.title}
							{structure?.link?.target === '_blank' && (
								<img
									style={{ marginLeft: '10px' }}
									src={OpenPageOnNewTab.src}
								/>
							)}
						</a>
					</Link>
				) : null}
			</div>
		</section>
	)
}

export default CesTextBox
