import Link from 'next/link'
import React from 'react'

function LaserFinedWithImage({ data: { structure } }) {
	return (
		<section>
			<div className='black-banner p-md-4'>
				<div className='container px-6 px-md-8 pt-20 pb-12'>
					<article className='article text-center'>
						<h3 className='text-white mb-7'>
							{structure?.title?.value}
							<span className='text-primary'>
								{' '}
								{structure?.coloredTitle?.value}
							</span>
						</h3>
						<div>
							<p className='fw-normal mw-md-50 text-white m-auto'>
								{structure.description.value}
							</p>
						</div>
						<Link href={structure?.linkUrl?.value}>
							<a className='btn btn-outline-light rounded-5 mt-12 px-8'>
								{structure?.linkUrl?.title}
							</a>
						</Link>
					</article>
				</div>
			</div>
		</section>
	)
}

export default LaserFinedWithImage
