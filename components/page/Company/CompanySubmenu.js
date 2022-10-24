import Link from 'next/link'
import React from 'react'

function CompanySubmenu({ data }) {
	let { structure } = data
	return (
		<div id={data.name + data.id} class='catalog-navbar px-5 bg-black'>
			<nav>
				<ul class='row justify-content-center justify-content-md-end align-items-center p-0 m-0'>
					{structure?.tags?.value.map(item => (
						<li>
							<Link href={item?.target?.value}>
								<a>
									<span class='underline-on-hover'>{item?.title?.value}</span>
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
