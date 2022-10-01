import { faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import TvImage from './../../../../public/assets/images/pdp/U6GR-front-shadow.png'
function PDPChooseULEDTvItem() {
	return (
		<div className='col-12 col-md-4 my-5 my-md-0'>
			<div className='suggested-products'>
				<img src={TvImage.src} alt='featured image' />
				<div>
					<div className='px-3 mt-5'>
						<h4 className='fs-m5'>U6G</h4>
						<p className='mb-3'>4K ULED™</p>
						<p className='mb-3'>Hisense Android Smart TV (2021)</p>
						<div className='model-toggle mb-0'>
							<FontAwesomeIcon icon={faTv} size='xl' />
							<a href='#' className='text-black text-decoration-none ms-3'>
								75"
							</a>
						</div>
					</div>
					<button className='btn btn-black w-100 px-5 py-3 mt-4'>
						Where to Buy
					</button>
				</div>
			</div>
		</div>
	)
}

export default PDPChooseULEDTvItem
