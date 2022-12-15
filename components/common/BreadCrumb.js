import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const BreadCrumb = () => {
	const router = useRouter()
	const [routs] = useState(router.pathname.split('/'))
	const generateRoute = _index => {
		let subRoute = ''
		routs.forEach((element, index) => {
			if (index <= _index && element) {
				subRoute += `/${element}`
			}
		})

		return subRoute
	}

	return (
		<div className='breadcrumb'>
			<Link href={'/'}>
				<a className='breadcrumb-item'>home</a>
			</Link>
			{routs.map((item, index) => (
				<Link href={generateRoute(index)}>
					<a className='breadcrumb-item'>{item}</a>
				</Link>
			))}
		</div>
	)
}

export default BreadCrumb
