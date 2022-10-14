import WerenchIcon from 'components/icons/WerenchIcon'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faQuestion } from '@fortawesome/free-solid-svg-icons'


function SupportOurSupport() {
	return (
		<section className='border-top border-dark'>
			<div className='supports supports-new row justify-content-center align-items-stretch mx-0'>
				<div className='col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-between align-items-center px-13 py-18'>
					<div className='bg-black p-4 px-6 mb-10'>
						{/* <i className='fa-solid fs-2x text-white fa-clipboard-list'></i> */}
						<FontAwesomeIcon icon={faClipboardList} color={'#fff'} size="2x"/>
					</div>
					<div className='text-center'>
						<h4 className='mb-4'>Register Product</h4>
						<p className='fw-light fs-8 mb-6'>
							Register your product to activate your warranty and ensure you
							receive the latest information about your product.
						</p>
					</div>
					<a href='#' className='btn btn-outline-dark px-4 py-3 rounded-5'>
						REGISTER NOW
					</a>
				</div>
				<div className='col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-between align-items-center px-13 py-18'>
					<div className='bg-black p-4 mb-10'>
						<WerenchIcon />
					</div>
					<div className='text-center'>
						<h4 className='mb-4'>Replacement Parts</h4>
						<p className='fw-light fs-8 mb-6'>
							Find replacement parts for your Hisense product(s).
						</p>
					</div>
					<a href='#' className='btn btn-outline-dark px-4 py-3 rounded-5'>
						SEARCH PARTS
					</a>
				</div>
				<div className='col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-between align-items-center px-13 py-18'>
					<div className='bg-black p-4 px-6 mb-10'>
						{/* <i className='fa-solid fs-2x text-white fa-question'></i> */}
						<FontAwesomeIcon icon={faQuestion} color={'#fff'}  size="2x"/>
					</div>
					<div className='text-center'>
						<h4 className='mb-4'>FAQ</h4>
						<p className='fw-light fs-8 mb-6'>
							Find answers to frequently asked questions.
						</p>
					</div>
					<a href='#' className='btn btn-outline-dark px-4 py-3 rounded-5'>
						LEARN MORE
					</a>
				</div>
			</div>
		</section>
	)
}

export default SupportOurSupport
