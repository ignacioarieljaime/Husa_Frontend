import Link from 'next/link'
import React from 'react'

function ProductCategoryBox({ data, pim }) {
	let { structure } = data
	return (
		<div id={data.name + data.id} className='catalog-navbar bg-dark'>
			<nav className=''>
				<ul className='row justify-content-evenly justify-content-md-end align-items-center p-0 m-0'>
					<li className='me-md-auto'>
						<span>{pim?.model}</span>
					</li>
					{structure?.tags?.value.map((item, index) => (
						<li key={`category-item-${index}`}>
							<Link href={item.target.value ? item.target.value : '/'}>
								<a>
									<span className='underline-on-hover'>{item.title.value}</span>
								</a>
							</Link>
						</li>
					))}

					<li>
						<Link
							href={structure?.support?.value ? structure?.support.value : '/'}>
							<a target='_blank'>
								<span className='underline-on-hover'> Support</span>
							</a>
						</Link>
					</li>
					<li>
						<button className='btn-primary' onclick='toggleWhereToBuyDrawer()'>
							{structure?.whereToBuy ? 'Coming Soon' : 'Where To Buy'}
						</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default ProductCategoryBox
