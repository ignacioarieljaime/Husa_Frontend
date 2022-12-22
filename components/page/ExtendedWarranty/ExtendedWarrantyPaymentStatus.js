import React, { useEffect, useState } from 'react'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AdobeAcrobat from 'components/icons/AdobeAcrobat'
import Download from 'components/icons/Download'
import { GetPaymenStatus, GetPaymentUrl } from 'services/ExtendedWarranty'

import Link from 'next/link'
import { useRouter } from 'next/router'
import Spinner from 'components/common/Spinner'
import { toast } from 'react-toastify'

const ExtendedWarrantyPaymentStatus = ({
	data: {
		structure: { list }
	}
}) => {
	const [invoice, setInvoice] = useState()
	const [statusData, setStatusData] = useState()
	const [content, setContent] = useState()
	const [isLoading, setIsLoading] = useState(true)
	const router = useRouter()

	useEffect(() => {
		if (router?.query?.stat !== 'ok' || !router?.query?.stat) {
			setIsLoading(false)
			return
		} else {
			if (router?.query?.invoice) {
				setInvoice(router?.query?.invoice)
				getStatus(router?.query?.invoice)
			} else {
				setIsLoading(false)
				toast.error('Token not found')
			}
		}
	}, [])

	useEffect(() => {
		if (list) {
			if (statusData?.invoice?.transaction) setContent(list.value[0])
			else setContent(list.value[1])
		}
	}, [list, statusData])

	const getStatus = async _invoice => {
		try {
			let response = await GetPaymenStatus(_invoice)
			if (!response?.data?.invoice?.process?.id) {
				getStatus(router?.query?.invoice)
			} else {
				setStatusData(response?.data)
				setIsLoading(false)
			}
		} catch (error) {
			setIsLoading(false)
			if (error.response.status === 404) {
				toast.error('Token is invalid', {
					autoClose: false
				})
			} else {
				toast.error('Something went wrong')
			}
			console.log(error)
		}
	}

	const retryPayment = async _invoice => {
		let response = await GetPaymentUrl(_invoice)
		router.push(response?.data?.url)
	}
	return (
		<section>
			<div className='extended-warranty-payment-status'>
				{!isLoading ? (
					<div className='status-container'>
						<img
							className='status-image'
							src={content?.image?.src}
							alt={content?.image?.alt}
						/>
						<div
							dangerouslySetInnerHTML={{
								__html: content?.text?.value
							}}></div>
						{statusData?.invoice?.transaction ? (
							<div className='custom-card'>
								<div className='row align-items-stretch mx-0'>
									<div className='col-12 col-md-5 product'>
										<div className='image'>
											<img
												src={statusData?.product?.image}
												alt={statusData?.product?.name}
												width='100%'
											/>
										</div>
										<div className='text-center text-md-start'>
											<div className='n-btn primary simple w-fit mx-auto mx-md-0 p-4 mb-4 mb-md-8'>
												{statusData?.invoice?.plan?.duration} Years
											</div>
											<div className='model'>{statusData?.product?.model}</div>
											<div className='title '>{statusData?.product?.name}</div>
										</div>
									</div>
									<div className='col-12 col-md-7 details'>
										<div>
											Serial Number
											<span>{statusData?.invoice?.product?.serial_number}</span>
										</div>
										<div>
											Payment Code
											<span>
												{statusData?.invoice?.transaction?.trace_code}
											</span>
										</div>
										<div className=''>
											<a href={'/'} download>
												Full terms and condition
												<span className='ms-3 ms-md-1'>
													<FontAwesomeIcon icon={faUpRightFromSquare} />
												</span>
											</a>
											{content?.termsLink?.value ? (
												<Link href={content?.termsLink?.value}>
													<a target='_blank'>{content?.termsLink?.title}</a>
												</Link>
											) : null}

											<div className='ms-4 ms-md-7'>
												<AdobeAcrobat />
											</div>
											<div className='ms-3'>
												<a
													href={statusData?.invoice?.product?.warranty_card}
													download={
														statusData?.product?.name +
														'- extended warranty card'
													}
													target='_blank'>
													<Download />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						) : null}
						{content?.link?.title && (
							<Link href={content?.link?.value ? content?.link?.value : '/'}>
								<a className='n-btn outline-black py-4 mx-3 my-8 my-sm-4'>
									{content?.link?.title}
								</a>
							</Link>
						)}
						{!router?.query?.stat ||
						router?.query?.stat !== 'ok' ||
						!statusData?.invoice?.transaction ? (
							<button
								className='n-btn outline-black py-4 mx-3 my-8 my-sm-4'
								onClick={() => retryPayment(invoice)}>
								Retry
							</button>
						) : null}
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

export default ExtendedWarrantyPaymentStatus
