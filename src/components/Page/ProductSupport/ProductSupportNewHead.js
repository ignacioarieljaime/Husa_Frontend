import DownloadIcon from '@/components/icons/DownloadIcon'
import React from 'react'

// image
import Tv from './../../../../public/assets/images/uled-u6.png'

function ProductSupportNewHead() {
	return (
		<section className='product'>
			<div className='container'>
				<div className='row align-items-stretch'>
					<div className='col-12 col-lg-6 product-gallery mb-12 mb-lg-0 pe-lg-10 text-center'>
						<img src={Tv.src} alt='featured image' width='80%' />
					</div>
					<div className='col-12 col-lg-6'>
						<div className='d-flex flex-column justify-content-evenly align-items-start h-100'>
							<h1 className='fs-2 fw-bold mb-8'>
								HISENSE 14.8-CU.FT. 4 DOOR COUNTER-DEPTH FRENCH DOOR
								REFRIGERATOR SUPPORT
							</h1>
							<p className='text-primary mb-10'>Model: 100L5G-CINE100A</p>
							<p className='fs-7 fw-normal mb-0'>Document Downloads</p>
							<div className='row align-items-center'>
								<div className='col-12 col-sm-6 py-3'>
									<a href='#' className='download-able-item'>
										Documentes Guide
										<DownloadIcon />
									</a>
								</div>
								<div className='col-12 col-sm-6 py-3'>
									<a href='#' className='download-able-item'>
										Documentes Guide
										<DownloadIcon />
									</a>
								</div>
								<div className='col-12 col-sm-6 py-3'>
									<a href='#' className='download-able-item'>
										Documentes Guide
										<DownloadIcon />
									</a>
								</div>
								<div className='col-12 col-sm-6 py-3'>
									<a href='#' className='download-able-item'>
										Documentes Guide
										<DownloadIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductSupportNewHead
