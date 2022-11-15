import React, { useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const ExtendedWarrantyBanner = ({ data: { structure } }) => {
	const [searchTerm, setSearchTerm] = useState('')

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
					<div
						className='text-white mb-4 mb-md-10'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
					{structure?.showSearch?.value && (
						<form>
							<div className='support-products-searchbox'>
								<input
									type='text'
									placeholder='start typing your model number'
									value={searchTerm}
									onChange={e => setSearchTerm(e.target.value)}
								/>
								<Link href={'/ewp-model-selection-page?search=' + searchTerm}>
									<a className='text-white'>
										<FontAwesomeIcon icon={faMagnifyingGlass} />
									</a>
								</Link>
							</div>
						</form>
					)}
				</div>
			</div>
		</section>
	)
}

export default ExtendedWarrantyBanner
