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
		setInvoice(router.query.invoice)
	}, [])

	useEffect(() => {
		if (list) {
			if (statusData?.invoice?.transaction) setContent(list.value[0])
			else setContent(list.value[1])
		}
	}, [list, statusData])

	useEffect(() => {
		if (invoice) getStatus(invoice)
	}, [invoice])

	const getStatus = async _invoice => {
		try {
			let response = await GetPaymenStatus(_invoice)
			setStatusData(response?.data)
		} catch (error) {
			if (error.response.status === 404) {
				toast.error('Token is invalid', {
					autoClose: false
				})
			} else {
				toast.error('Something went wrong')
			}
			console.log(error)
		}
		setIsLoading(false)
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
											<span>
												{
													JSON.parse(statusData?.invoice?.product)
														?.serial_number
												}
											</span>
										</div>
										<div>
											Payment Code
											<span>
												{statusData?.invoice?.transaction?.trace_code}
											</span>
										</div>
										<div className=''>
											<a
												href='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
												target='_blank'>
												Downlaod Extended Warranty Card{' '}
											</a>
											<div className='ms-3 ms-md-1'>
												<FontAwesomeIcon icon={faUpRightFromSquare} />
											</div>
											<div className='ms-4 ms-md-7'>
												<AdobeAcrobat />
											</div>
											<div className='ms-3'>
												<a
													href='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
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
						{!statusData?.invoice?.transaction ? (
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
