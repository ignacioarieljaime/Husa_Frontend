import React, { useEffect, useState } from 'react'

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
						<Link href={structure?.link?.value}>
							<a className='btn btn-light text my-3 my-md-auto'>
								{structure?.link?.title}
							</a>
						</Link>
					</article>
				</div>
			</div>
		</section>
	)
}

export default ULEDHead
