import React from 'react'

// image
import TvImage from 'public/assets/images/tv-and-audio/laser-tvs.png'

// component
import TvAndAudioTvShopItem from './TvAndAudioTvShopItem'

function TvAndAudioTvShopBox() {
	return (
		<section>
			<div className='black-banner p-md-4'>
				<div className='container px-6 px-md-8 py-20'>
					<article className='article text-center'>
						<h2 className='text-white mb-10'>Shop Hisense Televisions</h2>
						<div className='row justify-content-evenly align-items-stretch mb-14'>
							<TvAndAudioTvShopItem Image={TvImage} />
							<TvAndAudioTvShopItem Image={TvImage} />
							<TvAndAudioTvShopItem Image={TvImage} />
							<TvAndAudioTvShopItem Image={TvImage} />
						</div>
						<div>
							<button className='btn-primary text-uppercase px-8 py-2 text-white border-0 rounded-5'>
								shop all tvs
							</button>
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default TvAndAudioTvShopBox
