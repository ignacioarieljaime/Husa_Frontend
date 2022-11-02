import React, { useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ewpBanner from 'public/assets/images/ewp-banner.png'

const ExtendedWarrantyBanner = ({ data }) => {
	const [searchTerm, setSearchTerm] = useState('')

	const structure = {
		image: {
			src: ewpBanner.src
		},
		title: {
			value: 'Hisense Extended Service Plan'
		}
	}

	return (
		<section>
			<div className='heading extended-warrant-banner'>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					width={'100%'}
					style={{ height: '100%' }}
					className={'img-fluid'}
				/>
				<div className='heading-text'>
					<h1 className='fs-1 fs-md-3x fw-normal text-white mb-4 mb-md-10'>
						{structure?.title?.value}
					</h1>
					<p className='fs-8 fs-md-base fw-normal text-white mb-12 mb-md-16'>
						Enjoy a longer warranty on the Hisense products you love.
					</p>
					<form>
						<div className='support-products-searchbox'>
							<input
								type='text'
								placeholder='start typing your model number'
								value={searchTerm}
								onChange={e => setSearchTerm(e.target.value)}
							/>
							<button>
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ExtendedWarrantyBanner
