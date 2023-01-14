import React from 'react'

import Link from 'next/link'

function SmartInfoBetterNewOrOldBox({ data }) {
	let { structure } = data
	return (
		<section id={data?.name + data?.id}>
			<div className='position-relative'>
				<div className='shade mt-n19'></div>
				<article className='article'>
					<div className='container advertise mt-19 px-6 px-md-3'>
						<h2 className='title'>{structure?.title?.value}</h2>
						<div>
							<Link
								href={structure?.link?.value ? structure?.link?.value : '/'}>
								<a className='link'>
									<img
										src={structure?.image?.src}
										width={'100%'}
										height={'100%'}
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
