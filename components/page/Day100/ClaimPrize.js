import ClaimPrizeLevels from './ClaimPrizeLevels'
import star from 'public/assets/images/100-day/star.png'

const ClaimPrize = () => {
	return (
		<section className='position-relative day-100 '>
			<div className='star'>
				<img src={star.src} alt='star' width='35' />
			</div>
			<div className='bg-eggplant py-15'>
				<div className='container claim-prize'>
					<article className='article text-center'>
						<p className='d-none d-md-block text-white fw-bold fs-5 mb-8'>
							FROM SEPTEMBER 1ST - OCTOBER 31ST,
						</p>
						<h2 className='d-none d-md-block text-white mb-17'>
							BUY A <span className='text-pink'>65" OR LARGER</span> HISENSE
							GOOGLE TV WITH A 100 DAY GUARANTEE{' '}
							<span className='text-pink'>AND</span> GET AWARDED{' '}
							<span className='text-pink'>$100*</span>
						</h2>
						<div className='under-line mb-0 mb-md-13'>
							<p className='bg-eggplant px-3 px-md-7'>HOW IT WORKS</p>
						</div>
					</article>
					<div className='row align-items-stretch'>
						<div className='col-12 col-md-6 my-8 my-xl-0 col-xl-3 '>
							<ClaimPrizeLevels
								level='1'
								description='Buy an eligible 65-inch or larger Hisense Google TV'
								link='#'
								linkTitle='Shop Now'
							/>
						</div>
						<div className='col-12 col-md-6 my-8 my-xl-0 col-xl-3 '>
							<ClaimPrizeLevels
								level='2'
								description='Register your TV within 14 days of purchase*'
								link='#'
								linkTitle='Register Here'
							/>
						</div>
						<div className='col-12 col-md-6 my-8 my-xl-0 col-xl-3'>
							<ClaimPrizeLevels
								level='3'
								description='Enjoy your TV risk-free for 100 days'
							/>
						</div>
						<div className='col-12 col-md-6 my-8 my-xl-0 col-xl-3 '>
							<ClaimPrizeLevels
								level='4'
								description='Claim your $100 giftcard within 100 days'
								link='#'
								linkTitle='Claim Here'
							/>
						</div>
					</div>
					<div className='tiny-banner mt-10'>
						<article className='article text-center'>
							<p>
								*Must register to be eligible for the 100 Day No Regrets
								Guarantee and $100 Lovin’ Hisense Reward.
							</p>
							<p>
								For full program details, visit:{' '}
								<a href='#' className='text-pink text-decoration-none'>
									http://hisense-promos.com/noregrets
								</a>
							</p>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ClaimPrize
