import HeaderBannerPng from 'public/assets/images/100-day/header-banner.png'
import HeaderBannerSmallPng from 'public/assets/images/100-day/header-banner-small.png'
import Logo from 'components/icons/Logo'
import GoogleTv from 'public/assets/images/100-day/googletv.png'

function HeaderBanner() {
	return (
		<section className='day-100'>
			<div className='header-secondary'>
				<img
					src={HeaderBannerPng.src}
					alt='banner'
					width='100%'
					height='100%'
					className='d-none d-md-block'
				/>
				<img
					src={HeaderBannerSmallPng.src}
					alt='banner'
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
		</section>
	)
}

export default HeaderBanner
