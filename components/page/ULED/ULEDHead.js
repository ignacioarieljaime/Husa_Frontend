import React from 'react'

// image
import Image from 'public/assets/images/4k-uled/heading.jpg'
import Link from 'next/link'

function ULEDHead({ data: { structure } }) {
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
						<h1 className=''>{structure?.title?.value}</h1>
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
