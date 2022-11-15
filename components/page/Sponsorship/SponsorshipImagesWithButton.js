import React from 'react'
import Link from 'next/link'

function SponsorshipImagesWithButton({ data }) {
	let { structure } = data
	return (
		<section className='sponsor-ship-bg'>
			<div className='container py-20 text-center gradient-texts'>
				<div>
					<img src={structure?.image?.src} alt={structure?.image?.alt} className='mb-12' />
				</div>

				<div>
					<Link href={structure?.link?.value}>
						<a className='btn btn-secondary text-white rounded-5  px-10 py-3'>
							{structure?.link?.title}
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default SponsorshipImagesWithButton
