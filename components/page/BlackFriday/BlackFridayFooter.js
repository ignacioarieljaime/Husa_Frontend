import Link from 'next/link'
import React from 'react'

const BlackFridayFooter = ({ data: { structure } }) => {
	return (
		<footer>
			<div className='black_friday_footer'>
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
				<span>{structure?.rightText?.value}</span>
			</div>
		</footer>
	)
}

export default BlackFridayFooter
