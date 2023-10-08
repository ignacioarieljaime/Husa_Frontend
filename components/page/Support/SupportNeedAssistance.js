import React from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import Link from 'next/link'

function SupportNeedAssistance({ data }) {
	let { structure } = data
	return (
		<section id={data.name + data.id}>
			<div className='support_contact'>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					className='background'
				/>
				<div className='content'>
					<h4 className='title' style={{ color: '#fff' }}>
						{structure?.title?.value}
					</h4>
					<Link
						target={structure?.link?.target ? structure?.link?.target : '_self'}
						href={structure?.link?.value ? structure?.link?.value : '/'}>
						<a
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							className='n-btn outline-white bg-transparent rounded-5 medium d-block mx-auto w-fit'>
							{structure?.link?.title}
							{structure?.link?.target === '_blank' && (
								<img
									style={{ marginLeft: '10px' }}
									src={OpenPageOnNewTab.src}
								/>
							)}
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default SupportNeedAssistance
