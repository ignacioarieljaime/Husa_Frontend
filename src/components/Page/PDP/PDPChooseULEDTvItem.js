import { faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import TvImage from './../../../../public/assets/images/pdp/U6GR-front-shadow.png'
function PDPChooseULEDTvItem() {
	return (
		<div class='col-12 col-md-4 my-5 my-md-0'>
			<div class='suggested-products'>
				<img src={TvImage.src} alt='featured image' />
				<div>
					<div class='px-3 mt-5'>
						<h4 class='fs-m5'>U6G</h4>
						<p class='mb-3'>4K ULED™</p>
						<p class='mb-3'>Hisense Android Smart TV (2021)</p>
						<div class='model-toggle mb-0'>
							<FontAwesomeIcon icon={faTv} size='xl' />
							<a href='#' class='text-black text-decoration-none ms-3'>
								75"
							</a>
						</div>
					</div>
					<button class='btn btn-black w-100 px-5 py-3 mt-4'>
						Where to Buy
					</button>
				</div>
			</div>
		</div>
	)
}

export default PDPChooseULEDTvItem
