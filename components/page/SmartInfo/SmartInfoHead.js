import React from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import Link from 'next/link'

function SmartInfoHead({ data }) {
	let { structure } = data
	return (
		<section>
			<div className='heading smart-tv-header'>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					width='100%'
					height='100%'
				/>
				<div className='heading-text'>
					<article className='article'>
						<h1>{structure?.title?.value}</h1>
						{structure?.link?.value && (
							<Link
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								href={structure?.link?.value}>
								<a className='btn btn-light text'>
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
					</article>
				</div>
			</div>
		</section>
	)
}

export default SmartInfoHead
