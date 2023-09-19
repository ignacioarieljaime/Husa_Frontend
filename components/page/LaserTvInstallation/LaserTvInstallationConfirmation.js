import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Spinner from 'components/common/Spinner'
import { toast } from 'react-toastify'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

const LaserTvInstallationConfirmation = ({ data }) => {
	const [content, setContent] = useState()
	const [isLoading, setIsLoading] = useState(true)
	const router = useRouter()

	useEffect(() => {
		setContent(data?.structure)
		if (router?.query?.token) {
			setIsLoading(false)
			return
		} else {
			toast.error('Token not found')
			setTimeout(() => {
				router.push('404')
			}, 3000)
		}
	}, [])

	return (
		<section>
			<div
				className='extended-warranty-payment-status'
				style={{ maxWidth: '800px' }}>
				{!isLoading ? (
					<div className='status-container'>
						{content?.image?.src ? (
							<img
								className='status-image'
								src={content?.image?.src}
								alt={content?.image?.alt}
							/>
						) : null}
						<h2 className='title'>{content?.title?.value}</h2>
						<div
							dangerouslySetInnerHTML={{
								__html: content?.text?.value
							}}></div>
						{content?.link?.title && (
							<Link
								target={content?.link?.target ? content?.link?.target : '_self'}
								href={content?.link?.value ? content?.link?.value : '/'}>
								<a
									target={
										content?.link?.target ? content?.link?.target : '_self'
									}
									className='n-btn outline-black medium mx-3 my-8 my-sm-4'>
									{content?.link?.title}
									{content?.link?.target === '_blank' && (
										<img
											style={{ marginLeft: '10px' }}
											src={OpenPageOnNewTab.src}
										/>
									)}
								</a>
							</Link>
						)}
					</div>
				) : (
					<div className='w-100 d-flex justify-content-center py-20'>
						<Spinner className={'mt-5'} size={80} />
					</div>
				)}
			</div>
		</section>
	)
}

export default LaserTvInstallationConfirmation
