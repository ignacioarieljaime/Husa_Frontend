import CustomImage from 'components/common/CustomImage'
import React from 'react'

function ProductFindMeInStore({ pim, data }) {
	let { structure } = data
	return (
		<div id={data.name + data.id} className='p-md-4'>
			<div className='container px-6 px-md-8 py-12'>
				<article className='large_article text-center'>
					<h2 className='text-black mb-12'>Find Me At A Store</h2>
					<p className='fs-5 fw-normal mb-12'>
						Check with these retailers for product availability.
					</p>
					<div className='row justify-content-evenly align-items-center'>
						{pim?.retailers.map((item, index) => (
							<div key={index}>
								<CustomImage
									src={item.Media?.url}
									alt='featured-image'
									wrapperHeight={'150'}
								/>
							</div>
						))}
					</div>
				</article>
			</div>
		</div>
	)
}

export default ProductFindMeInStore
