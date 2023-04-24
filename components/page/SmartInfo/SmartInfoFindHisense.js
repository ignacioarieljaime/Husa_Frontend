import Link from 'next/link'
import React from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
function SmartInfoFindHisense({ data }) {
	let { structure } = data
	return (
		<section id={data?.name + data?.id}>
			<div className='container-fluid explore explore-smart-page px-7 py-0 p-md-20'>
				<article className='article row py-6'>
					<h2 className='col-12 col-md-6 mb-7 my-md-auto text-black'>
						{structure?.title?.value}
					</h2>
					<div className='col-12 col-md-6 m-0'>
						<p className='mb-2'>{structure?.description?.value}</p>
						{structure?.link?.value && (
							<Link
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								href={structure?.link?.value}>
								<a
									target={
										structure?.link?.target ? structure?.link?.target : '_self'
									}
									className='btn btn-dark fs-md-base fs-8'>
									{structure?.link?.title}
									{structure?.link?.target === '_blank' && (
										<img
											style={{ marginLeft: '10px' }}
											src={OpenPageOnNewTab.src}
										/>
									)}
								</a>
							</Link>
						)}
					</div>
				</article>
			</div>
		</section>
	)
}

export default SmartInfoFindHisense
