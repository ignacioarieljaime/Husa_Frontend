import React from 'react'

// image
import TvImage from './../../../../public/assets/images/tv-and-audio/laser-tvs.png'

// component
import TvAndAudioTvShopItem from './TvAndAudioTvShopItem'

function TvAndAudioTvShopBox() {
	return (
		<section>
			<div class='black-banner p-md-4'>
				<div class='container px-6 px-md-8 py-20'>
					<article class='article text-center'>
						<h2 class='text-white mb-10'>Shop Hisense Televisions</h2>
						<div class='row justify-content-evenly align-items-stretch mb-14'>
							<TvAndAudioTvShopItem Image={TvImage} />
							<TvAndAudioTvShopItem Image={TvImage} />
							<TvAndAudioTvShopItem Image={TvImage} />
							<TvAndAudioTvShopItem Image={TvImage} />
						</div>
						<div>
							<button class='btn-primary text-uppercase px-8 py-2 text-white border-0 rounded-5'>
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
