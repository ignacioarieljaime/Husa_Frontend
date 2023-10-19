import React from 'react'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

function SupportNeedMoreWithButton({ data }) {
	let { structure } = data
	return (
		<section id={data.name + data.id}>
			<div className='heading support-heading support-new-heading need_more_help_banner'>
				<div className='heading-text'>
					<h4
						className='text-white fs-2hx fw-normal mb-7'
						style={{ color: '#fff' }}>
						{structure?.title?.value}
					</h4>
					{structure?.link?.value && (
						<Link
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							href={structure?.link?.value ? structure?.link?.value : '/'}>
							<a
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								className='n-btn outline-white medium transparent d-block w-fit mx-auto'>
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
			</div>
		</section>
	)
}

export default SupportNeedMoreWithButton
