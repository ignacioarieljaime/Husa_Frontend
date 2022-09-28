import React from 'react'

// image
import HeaderTv from './../../../../public/assets/images/more-tv/header-television.png'
import halfTv from './../../../../public/assets/images/more-tv/half-tv.png'
import Quantum from './../../../../public/assets/images/more-tv/quantum-item.png'
import Dolby from './../../../../public/assets/images/more-tv/dolby-item.png'
import GoogleTv from './../../../../public/assets/images/more-tv/google-tv-item.png'
import FullArray from './../../../../public/assets/images/more-tv/full-array-item.png'
import VariableMotion from './../../../../public/assets/images/more-tv/variable-motion-item.png'

function MoreTvLessTalk() {
	return (
		<section>
			<div className='container-fluid my-20 pt-md-20 overflow-hidden'>
				<div className='row'>
					<div className='col-12 col-md-6 mb-8'>
						<h2 className='fs-4hx fw-normal mb-16'>
							<span className='d-block'>
								Why <span className='text-navy'>less talk</span>
							</span>
							means more TV.
						</h2>
						<h3 className='fs-2 fw-normal'>
							We let our technology do the talking, not our ads.
						</h3>
					</div>
					<div className='col-12 col-md-6 mb-15 mb-md-0 position-relative'>
						<img
							src={HeaderTv.src}
							alt='featured image'
							className='d-block d-md-none w-100'
						/>
						<img
							src={halfTv.src}
							alt='featured image'
							className='big-tv d-none d-md-block'
						/>
					</div>
					<div className='col-12 col-md-7 col-xl-6'>
						<div className='tech-items aos-init' data-aos='slide-right'>
							<div>
								<img src={Quantum.src} alt='featured image' className='w-sm-100' />
							</div>
							<h4>One billion+ colors, we’ve counted</h4>
						</div>
						<div className='tech-items aos-init' data-aos='slide-right'>
							<div>
								<img src={Dolby.src} alt='featured image' className='w-sm-100' />
							</div>
							<h4>Blockbuster audio in your very own home</h4>
						</div>
						<div className='tech-items aos-init' data-aos='slide-right'>
							<div>
								<img src={GoogleTv.src} alt='featured image' className='w-sm-100' />
							</div>
							<h4>
								The smartest, smoothest way to navigate your favorite shows
							</h4>
						</div>
						<div className='tech-items aos-init' data-aos='slide-right'>
							<div>
								<img
									src={FullArray.src}
									alt='featured image'
									className='w-sm-100'
								/>
							</div>
							<h4>
								Contrast managed in real time to give you brighter brights and
								darker darks
							</h4>
						</div>
						<div className='tech-items aos-init' data-aos='slide-right'>
							<div>
								<img
									src={VariableMotion}
									alt='featured image'
									className='w-sm-100'
								/>
							</div>
							<h4>
								Refreshing the picture hundreds of times a second to give you a
								picture as smooth as butter
							</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoreTvLessTalk
