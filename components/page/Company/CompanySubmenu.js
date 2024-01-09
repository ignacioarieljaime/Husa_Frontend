import Link from 'next/link'
import React from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

function CompanySubmenu({ data }) {
	let { structure } = data
	return (
		<div id={data.name + data.id} className='catalog-navbar px-5 bg-black'>
			<nav>
				<ul className='row justify-content-center justify-content-md-end text-center align-items-center p-0 m-0'>
					{structure?.tags?.value.map(item => (
						<li className='py-3 px-5'>
							<Link
								target={item?.title?.target ? item?.title?.target : '_self'}
								href={item?.target?.value}>
								<a target={item?.title?.target ? item?.title?.target : '_self'}>
									<span className='underline-on-hover'>
										{item?.title?.value}
										{item?.title?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)}
									</span>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default CompanySubmenu
