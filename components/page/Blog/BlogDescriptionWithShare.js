import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faLinkedinIn,
	faTwitter,
	faFacebook
} from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'
function BlogDescriptionWithShare({ data: { structure } }) {
	const icons = {
		link: faLink,
		linkedin: faLinkedinIn,
		facebook: faFacebook,
		twitter: faTwitter
	}
	const copyUrl = () => {
		toast.success('Link copied successfully')
		navigator.clipboard.writeText(window.location.href)
	}
	return (
		<section>
			<div className='blog_text_container py-md-20 my-20'>
				<article className='blog-article'>
					<h3>{structure?.title?.value}</h3>
					<div
						dangerouslySetInnerHTML={{
							__html: structure?.text?.value
						}}></div>
					<span>{structure?.sharingTitle?.value}</span>
					<div className='row mt-7'>
						{structure?.list?.value.map((item, index) =>
							item?.socialMedia?.value !== 'link' ? (
								<a
									href={item?.link?.value}
									key={index}
									className='text-primary-dark'>
									<FontAwesomeIcon
										icon={icons[item?.socialMedia?.value]}
										size={'xl'}
									/>
								</a>
							) : (
								<button
									onClick={copyUrl}
									key={index}
									className='text-primary-dark bg-transparent border-0'>
									<FontAwesomeIcon
										icon={icons[item?.socialMedia?.value]}
										size={'xl'}
									/>
								</button>
							)
						)}
					</div>
				</article>
			</div>
		</section>
	)
}

export default BlogDescriptionWithShare
