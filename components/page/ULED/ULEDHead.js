import React, { useEffect, useState } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import Link from 'next/link'

function ULEDHead({ data: { structure } }) {
	const [text, setText] = useState()

	useEffect(() => {
		setText(structure?.title?.value)
	})
	return (
		<section>
			<div className='heading uled_head'>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					width='100%'
					height='100%'
				/>
				<div className='heading-text'>
					<article className='article'>
						<h1
							className=''
							dangerouslySetInnerHTML={{
								__html: text
							}}></h1>
						<Link
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							href={structure?.link?.value}>
							<a className='btn btn-light text my-3 my-md-auto'>
								{structure?.link?.title}
								{structure?.link?.target === '_blank' && (
									<img
										style={{ marginLeft: '10px' }}
										src={OpenPageOnNewTab.src}
									/>
								)}
							</a>
						</Link>
					</article>
				</div>
			</div>
		</section>
	)
}

export default ULEDHead
