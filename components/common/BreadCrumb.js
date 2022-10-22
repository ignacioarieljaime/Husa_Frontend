import React from 'react'
import Link from 'next/link'

const BreadCrumb = ({ list }) => {
	return (
		<div className='breadcrumb'>
			{list.value.map((item, index) => (
				<Link href={item.value}>
					<a className='breadcrumb-item'>{item.title}</a>
				</Link>
			))}
		</div>
	)
}

export default BreadCrumb
