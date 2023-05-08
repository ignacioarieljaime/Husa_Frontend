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
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const ExtendedWarrantyPaymentStatus = ({
	data: {
		structure: { list, PDF }
	}
}) => {
	const [invoice, setInvoice] = useState()
	const [statusData, setStatusData] = useState()
	const [content, setContent] = useState()
	const [isLoading, setIsLoading] = useState(true)
	const [errorData, setErrorData] = useState()
	const router = useRouter()
	const [paymentMessage, setPaymentMessage] = useState({
		transaction: 'Checking payment',
		pdf: null
	})

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
			if (response?.data?.invoice?.transaction) {
				setPaymentMessage({
					transaction: 'Payment was successful',
					pdf: 'generating PDF'
				})
			}

			if (!response?.data?.invoice?.process?.id) {
				setTimeout(() => {
					getStatus(router?.query?.invoice)
				}, 2000)
				setErrorData(response?.data)
			} else {
				setPaymentMessage({
					transaction: 'Payment was successful',
					pdf: 'generated'
				})
				setStatusData(response?.data)
				setErrorData(response?.data)
				setIsLoading(false)
				setTimeout(() => {
					window.open(response.data?.invoice?.product?.warranty_card, '_blank')
				}, 300)
			}
		} catch (error) {
			setIsLoading(false)
			if (error.response.status === 404) {
				toast.error('Token is invalid', {
					autoClose: false
				})
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
						{/* <div
							dangerouslySetInnerHTML={{
								__html: content?.text?.value
							}}></div> */}
						<div>
							<div>
								payment:{' '}
								<span
									style={{
										color: errorData?.invoice?.transaction ? 'green' : 'red'
									}}>
									{errorData?.invoice?.transaction
										? 'Payment was successful'
										: "Payment wasn't successful"}
								</span>
							</div>
							{errorData?.invoice?.transaction && (
								<div>
									PDF:{' '}
									<span
										style={{
											color: errorData?.invoice?.process ? 'green' : 'red'
										}}>
										{' '}
										{errorData?.invoice?.process
											? 'Your PDF was generated'
											: "Your PDF wasn't generated"}
									</span>
								</div>
							)}
						</div>
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
											<a href={PDF?.src ? PDF?.src : '/'} download>
												Full terms and condition
												<span className='ms-3 ms-md-1'>
													<FontAwesomeIcon icon={faUpRightFromSquare} />
												</span>
											</a>
											{content?.termsLink?.value ? (
												<Link
													target={
														content?.termsLink?.target
															? content?.termsLink?.target
															: '_self'
													}
													href={content?.termsLink?.value}>
													<a
														target={
															content?.termsLink?.target
																? content?.termsLink?.target
																: '_self'
														}>
														{content?.termsLink?.title}
														{content?.termsLink?.target === '_blank' && (
															<img
																style={{ marginLeft: '10px' }}
																src={OpenPageOnNewTab.src}
															/>
														)}
													</a>
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
							<Link
								target={content?.link?.target ? content?.link?.target : '_self'}
								href={content?.link?.value ? content?.link?.value : '/'}>
								<a
									target={
										content?.link?.target ? content?.link?.target : '_self'
									}
									className='n-btn outline-black py-4 mx-3 my-8 my-sm-4'>
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
					<div className='w-100 d-flex  flex-column align-items-center justify-content-center py-20'>
						<Spinner className={'mt-5 mb-5'} size={80} />
						<div className='d-flex  flex-column align-items-center'>
							<div>
								payment:{' '}
								<span
									style={{
										color:
											paymentMessage?.transaction === 'Checking payment'
												? 'black'
												: errorData?.invoice?.transaction
												? 'green'
												: 'red'
									}}>
									{paymentMessage?.transaction}
								</span>
							</div>
							{paymentMessage?.pdf && (
								<div>
									PDF:{' '}
									<span
										style={{
											color:
												paymentMessage?.pdf === 'generating PDF'
													? 'black'
													: errorData?.invoice?.process
													? 'green'
													: 'red'
										}}>
										{paymentMessage?.pdf}
									</span>{' '}
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default ExtendedWarrantyPaymentStatus
