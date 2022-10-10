import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv } from '@fortawesome/free-solid-svg-icons'

// component
import PDPProductInfoSlider from './PDPProductInfoSlider'

function PDPProductInfoSliderAndText() {
	return (
		<section className='product'>
			<div className='container'>
				<div className='row align-items-stretch'>
					<PDPProductInfoSlider />
					<div className='col-12 col-md-4 product-info my-auto'>
						<p className='fs-4 my-0'>75” 4K ULED™</p>
						<p className='fs-4 mt-0'>Hisense Android Smart TV (2021)</p>
						<h1 className='fs-3x mb-4'>U6H Series</h1>
						<div></div>
						<div className='border-top border-bottom py-6'>
							<p className='fs-5 mb-1 mt-0'>Model: 75 U6G</p>
							<div className='model-toggle mb-0'>
								<i className='fa-sharp fa-xl fa-solid fa-tv'></i>
								<FontAwesomeIcon icon={faTv} size={'xl'} />
								<a href='#' className='text-black text-decoration-none'>
									75"
								</a>
								<a href='#' className='text-black text-decoration-none'>
									65"
								</a>
								<a href='#' className='text-black text-decoration-none'>
									55"
								</a>
								<a href='#' className='text-black text-decoration-none'>
									50"
								</a>
							</div>
						</div>
						<div className='product-rating'></div>
						<button
							className='btn btn-dark px-6 py-3'
							onclick='toggleWhereToBuyDrawer()'>
							Where To Buy
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PDPProductInfoSliderAndText
