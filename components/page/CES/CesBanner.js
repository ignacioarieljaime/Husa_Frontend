import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import CustomImage from 'components/common/CustomImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const CesBanner = ({ data: { structure } }) => {
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])

	return (
		<section>
			<div className='ces_banner'>
				<div className='image_container'>
					<CustomImage
						src={structure?.image?.src}
						alt={structure?.image?.alt}
					/>
					<CustomImage
						src={structure?.image?.src}
						alt={structure?.image?.alt}
					/>
				</div>
				<h1 className='title'>{structure?.title?.value}</h1>
				<div
					className='subtitle'
					dangerouslySetInnerHTML={{ __html: text }}></div>
				{structure?.link?.value && (
					<Link href={structure?.link?.value}>
						<a className='link'>
							{structure?.link?.title}
							<FontAwesomeIcon icon={faPlayCircle} />
						</a>
					</Link>
				)}
			</div>
		</section>
	)
}

export default CesBanner
