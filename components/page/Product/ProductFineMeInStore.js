import React from 'react'

// image
import AmazonImage from 'public/assets/images/tv-page/amazon.png'
import BAndHImage from 'public/assets/images/tv-page/B&H.png'
import BestByImage from 'public/assets/images/tv-page/best-buy.png'
import CostcoImage from 'public/assets/images/tv-page/costco.png'
import CrutchfieldImage from 'public/assets/images/tv-page/crutchfield.png'
import CuracaoImage from 'public/assets/images/tv-page/curacao.png'
import ProjectImage from 'public/assets/images/tv-page/project-screen.png'
import ValueImage from 'public/assets/images/tv-page/value-electronics.png'
import WalletsImage from 'public/assets/images/tv-page/wallts.png'
import WWsImage from 'public/assets/images/tv-page/wws.png'

function ProductFineMeInStore({ pim: { data } }) {
	return (
		<div className='p-md-4'>
			<div className='container px-6 px-md-8 py-12'>
				<article className='article text-center'>
					<h2 className='text-black mb-12'>Find Me At A Store</h2>
					<p className='fs-5 fw-normal mb-12'>
						Check with these retailers for product availability.
					</p>
					<div className='row justify-content-evenly align-items-center'>
						<div>
							<img src={AmazonImage.src} alt='featured-image' width='150' />
						</div>
						<div>
							<img src={BAndHImage.src} alt='featured-image' width='150' />
						</div>
						<div>
							<img src={BestByImage.src} alt='featured-image' width='150' />
						</div>
						<div>
							<img src={CostcoImage.src} alt='featured-image' width='150' />
						</div>
						<div>
							<img
								src={CrutchfieldImage.src}
								alt='featured-image'
								width='150'
							/>
						</div>
						<div>
							<img src={CuracaoImage.src} alt='featured-image' width='150' />
						</div>
						<div>
							<img src={ProjectImage.src} alt='featured-image' width='150' />
						</div>
						<div>
							<img src={ValueImage.src} alt='featured-image' width='150' />
						</div>
						<div>
							<img src={WalletsImage.src} alt='featured-image' width='150' />
						</div>
						<div>
							<img src={WWsImage.src} alt='featured-image' width='150' />
						</div>
					</div>
				</article>
			</div>
		</div>
	)
}

export default ProductFineMeInStore
