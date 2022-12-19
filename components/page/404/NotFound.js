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
						className={'image'}
						wrapperWidth={'100%'}
						wrapperHeight={'100%'}
					/>
				</div>
				<div className='content'>
					<h1 class='title'>{structure?.title?.value}</h1>
					<article className='article'>
						<div
							className='mb-12 mb-md-0'
							dangerouslySetInnerHTML={{ __html: text }}></div>
						<div className='button_group'>
							{structure?.link1?.value ? (
								<Link href={structure?.link1?.value}>
									<a className='link'>{structure?.link1?.title}</a>
								</Link>
							) : null}{' '}
							<p className='mx-6 mb-0'>OR</p>
							{structure?.link2?.value ? (
								<Link href={structure?.link2?.value}>
									<a className='link'>{structure?.link2?.title}</a>
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
