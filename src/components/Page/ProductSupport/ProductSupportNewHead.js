import DownloadIcon from 'components/icons/DownloadIcon'
import React from 'react'

// image
import Tv from './../../../../public/assets/images/uled-u6.png'

function ProductSupportNewHead() {
	return (
		<section class='product'>
			<div class='container'>
				<div class='row align-items-stretch'>
					<div class='col-12 col-lg-6 product-gallery mb-12 mb-lg-0 pe-lg-10 text-center'>
						<img src={Tv.src} alt='featured image' width='80%' />
					</div>
					<div class='col-12 col-lg-6'>
						<div class='d-flex flex-column justify-content-evenly align-items-start h-100'>
							<h1 class='fs-2 fw-bold mb-8'>
								HISENSE 14.8-CU.FT. 4 DOOR COUNTER-DEPTH FRENCH DOOR
								REFRIGERATOR SUPPORT
							</h1>
							<p class='text-primary mb-10'>Model: 100L5G-CINE100A</p>
							<p class='fs-7 fw-normal mb-0'>Document Downloads</p>
							<div class='row align-items-center'>
								<div class='col-12 col-sm-6 py-3'>
									<a href='#' class='download-able-item'>
										Documentes Guide
										<DownloadIcon />
									</a>
								</div>
								<div class='col-12 col-sm-6 py-3'>
									<a href='#' class='download-able-item'>
										Documentes Guide
										<DownloadIcon />
									</a>
								</div>
								<div class='col-12 col-sm-6 py-3'>
									<a href='#' class='download-able-item'>
										Documentes Guide
										<DownloadIcon />
									</a>
								</div>
								<div class='col-12 col-sm-6 py-3'>
									<a href='#' class='download-able-item'>
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
