import React from 'react'
import Link from 'next/link'

function SupportNeedMoreWithButton({ data }) {
	let { structure } = data
	return (
		<section>
			<div className='heading support-heading support-new-heading need_more_help_banner'>
				<div className='heading-text'>
					<h4
						className='text-white fs-2hx fw-normal mb-7'
						style={{ color: '#fff' }}>
						{structure?.title?.value}
					</h4>
					{structure?.link?.value && (
						<Link href={structure?.link?.value ? structure?.link?.value : '/'}>
							<a className='n-btn outline-white transparent d-block w-fit mx-auto'>
								{structure?.link?.title}
							</a>
						</Link>
					)}
				</div>
			</div>
		</section>
	)
}

export default SupportNeedMoreWithButton
