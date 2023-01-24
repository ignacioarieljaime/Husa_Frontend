import Link from 'next/link'
import React from 'react'

const BlackFridayNavigation = ({ data: { structure } }) => {
	return (
		<section>
			<div className='black_friday_navigation'>
				<ul>
					{structure?.list?.value.map((item, index) => (
						<li key={index}>
							{item?.link?.value ? (
								<Link href={item?.link?.value}>
									<a>
										<span className='underline-on-hover'>
											{item?.link?.title}
										</span>
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
