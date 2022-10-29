import star from 'public/assets/images/100-day/star.png'
import Logo from 'components/icons/Logo'
import GoogleTv from 'public/assets/images/100-day/googletv.png'

function HeaderBanner({ data }) {
	let { structure } = data
	return (
		<section className='day-100 '>
			<div className='header-secondary'>
				<img
					src={structure?.desktop?.src}
					alt={structure?.desktop?.alt}
					width='100%'
					height='100%'
					className='d-none d-md-block'
				/>
				<img
					src={structure?.mobile?.src}
					alt={structure?.mobile?.alt}
					width='100%'
					height='100%'
					className='d-block d-md-none'
				/>
				<div className='row align-items-center justify-content-center py-3 d-block d-md-none logos'>
					<Logo />
					<img
						src={GoogleTv.src}
						width='150'
						height='20'
						className='border-start border-2 border-secondary'
					/>
				</div>
			</div>
			<div className='bg-eggplant position-relative py-15'>
				<div className='star'>
					<img src={star.src} alt='star' width='35' />
				</div>
				<div className='container  claim-prize'>
					<article
						className='article text-center text-white'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}>
						{/* <p className='d-none d-md-block text-white fw-bold fs-5 mb-8'>
							FROM SEPTEMBER 1ST - OCTOBER 31ST,
						</p>
						<h2 className='d-none d-md-block text-white mb-17'>
							BUY A <span className='text-pink'>65" OR LARGER</span> HISENSE
							GOOGLE TV WITH A 100 DAY GUARANTEE{' '}
							<span className='text-pink'>AND</span> GET AWARDED{' '}
							<span className='text-pink'>$100*</span>
						</h2> */}
					</article>
				</div>{' '}
			</div>
		</section>
	)
}

export default HeaderBanner
