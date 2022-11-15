import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const BreadCrumb = () => {
	const router = useRouter()

	return (
		<div className='breadcrumb'>
			<Link href={'/'}>
				<a className='breadcrumb-item'>home</a>
			</Link>
			{router.pathname.split('/').map(item => (
				<Link href={`/${item}`}>
					<a className='breadcrumb-item'>{item}</a>
				</Link>
			))}
		</div>
	)
}

export default BreadCrumb
