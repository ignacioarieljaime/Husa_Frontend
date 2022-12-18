import React from 'react'

// image
import Image from 'public/assets/images/4k-uled/heading.jpg'
import Link from 'next/link'

function ULEDHead({ data: { structure } }) {
	return (
		<section>
			<div className='heading'>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					width='100%'
					height='100%'
				/>
				<div className='heading-text'>
					<h1 className='mw-50 mx-auto'>{structure?.title?.value}</h1>
					<Link href={structure?.link?.value}>
						<a className='btn btn-light text'>{structure?.link?.title}</a>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default ULEDHead
