import Link from 'next/link'
import React from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const BlackFridayNavigation = ({ data: { structure } }) => {
	return (
		<section>
			<div className='black_friday_navigation'>
				<ul>
					{structure?.list?.value.map((item, index) => (
						<li key={index}>
							{item?.link?.value ? (
								<Link
									target={item?.link?.target ? item?.link?.target : '_self'}
									href={item?.link?.value}>
									<a target={item?.link?.target ? item?.link?.target : '_self'}>
										<span className='underline-on-hover'>
											{item?.link?.title}
										</span>
										{item?.link?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)}
									</a>
								</Link>
							) : null}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default BlackFridayNavigation
