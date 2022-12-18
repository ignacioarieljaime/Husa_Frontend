import React, { useEffect, useState } from 'react'
import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'

const NotFound = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])

	return (
		<section>
			<div className='not_found'>
				<div className='background'>
					<CustomImage
						src={structure?.image?.src}
						alt={structure?.image?.alt}
					/>
				</div>
				<div className='content'>
					<h1 class='title'>404</h1>
					<article className='article'>
						<div dangerouslySetInnerHTML={{ __html: text }}></div>
						<div className='button_group'>
							{structure?.link1?.value ? (
								<Link href={structure?.link1?.value}>
									<a>{structure?.link1?.title}</a>
								</Link>
							) : null}
							{structure?.link2?.value ? (
								<Link href={structure?.link2?.value}>
									<a>{structure?.link2?.title}</a>
								</Link>
							) : null}
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default NotFound
