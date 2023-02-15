import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Spinner from 'components/common/Spinner'
import { toast } from 'react-toastify'

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
				router.push('/')
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
							<Link href={content?.link?.value ? content?.link?.value : '/'}>
								<a className='n-btn outline-black py-3 px-5 mx-3 my-8 my-sm-4'>
									{content?.link?.title}
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
