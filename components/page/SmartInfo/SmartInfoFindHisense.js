import Link from 'next/link'
import React from 'react'

function SmartInfoFindHisense({ data }) {
	let { structure } = data
	return (
		<section>
			<div className='container-fluid explore explore-smart-page px-8 py-11 p-md-20'>
				<article className='row py-6'>
					<h2 className='col-12 col-md-6 mb-7 my-md-auto'>
						{structure?.title?.value}
					</h2>
					<div className='col-12 col-md-6 m-0'>
						<p>{structure?.description?.value}</p>
						{structure?.link?.value && (
							<Link href={structure?.link?.value}>
								<a className='btn btn-dark'>{structure?.link?.title}</a>
							</Link>
						)}
					</div>
				</article>
			</div>
		</section>
	)
}

export default SmartInfoFindHisense
