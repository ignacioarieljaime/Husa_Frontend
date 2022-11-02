import React from 'react'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AdobeAcrobat from 'components/icons/AdobeAcrobat'
import Download from 'components/icons/Download'
import Link from 'next/link'

const ExtendedWarrantyPaymentStatus = ({ data }) => {
	const structure = {
		image: {
			src: '',
			alt: ''
		},
		totalStatus: {
			value: 'Congratulations'
		},
		text: {
			value:
				'You have successfully bought an extended warranty for your Hisense product! A copy has been sent to the provided email.'
		},
		link: {
			title: 'Return to Home',
			value: '/'
		},
		title: { value: '47-Decibel Top Control 24" Built-In Dishwasher' },
		model: { value: 'HUI6220XCUS' },
		productImage: {
			src: 'https://assets.hisense-usa.com/assets/GalleryImages/Product/278/e7a660ef50/Artboard-1__ScaleMaxWidthWzY0MF0.png'
		},
		plan: {
			duration: '2 Years'
		},
		serialNumber: {
			value: '45225412254516'
		},
		paymentCode: {
			value: '452254122'
		}
	}

	return (
		<section>
			<div className='extended-warranty-payment-status'>
				<div className='status-container'>
					<img
						className='status-image'
						src={structure?.image?.src}
						alt={structure?.image?.alt}
					/>
					<h2 className='status-title'>{structure?.totalStatus?.value}</h2>
					<p
						className='status-text'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></p>
					<div className='custom-card'>
						<div className='row align-items-stretch mx-0'>
							<div className='col-12 col-md-6 product'>
								<div className='image'>
									<img
										src={structure?.productImage?.src}
										alt={structure?.productImage?.alt}
										width='100%'
									/>
								</div>
								<div className='text-center text-md-start'>
									<div className='n-btn primary w-fit mx-auto mx-md-0 p-4 mb-4 mb-md-8'>
										{structure?.plan?.duration}
									</div>
									<div className='model'>{structure?.model?.value}</div>
									<div className='title '>{structure?.title?.value}</div>
								</div>
							</div>
							<div className='col-12 col-md-6 details'>
								<div>
									Serial Number<span>{structure?.serialNumber?.value}</span>
								</div>
								<div>
									Payment Code<span>{structure?.paymentCode?.value}</span>
								</div>
								<div className=''>
									Downlaod Extended Warranty Card{' '}
									<div className='ms-3 ms-md-1'>
										<FontAwesomeIcon icon={faUpRightFromSquare} />
									</div>
									<div className='ms-4 ms-md-7'>
										<AdobeAcrobat />
									</div>
									<div className='ms-3'>
										<Download />
									</div>
								</div>
							</div>
						</div>
					</div>
					<Link href={structure?.link?.value}>
						<a className='n-btn outline-black py-4'>{structure?.link?.title}</a>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default ExtendedWarrantyPaymentStatus
