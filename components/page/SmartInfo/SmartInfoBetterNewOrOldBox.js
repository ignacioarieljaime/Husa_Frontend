import React from 'react'

import Link from 'next/link'

function SmartInfoBetterNewOrOldBox({ data }) {
	let { structure } = data
	return (
		<section>
			<div className='position-relative'>
				<div className='shade mt-n19'></div>
				<article className='article'>
					<div className='container advertise mt-19 px-6 px-md-3'>
						<h2>{structure?.title?.value}</h2>
						<div>
							<Link
								href={structure?.link?.value ? structure?.link?.value : '/'}>
								<a>
									<img
										src={structure?.image?.src}
										width={'640px'}
										height={'640px'}
										alt={structure?.image?.alt}
									/>
								</a>
							</Link>
						</div>
						{structure?.link?.value && (
							<Link
								href={structure?.link?.value ? structure?.link?.value : '/'}>
								<a className='btn btn-dark fs-md-base fs-8'>
									{structure?.link?.title}
								</a>
							</Link>
						)}
					</div>
				</article>
			</div>
		</section>
	)
}

export default SmartInfoBetterNewOrOldBox
