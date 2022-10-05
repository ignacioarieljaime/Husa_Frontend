import PC from './../../../public/assets/images/100-day/pc.png'
import EditorsChoice from './../../../public/assets/images/100-day/editors-choice.png'
import NyTimes from './../../../public/assets/images/100-day/ny-times.png'

const FeatureBadges = () => {
	return (
		<section>
			<div className='bg-gradient-blush py-20'>
				<div className='container my-10 feature-badge'>
					<div className='row justify-content-evenly align-items-stretch'>
						<div className='col-12 col-md-6 col-lg-4 text-center d-flex flex-column justify-content-between align-items-center px-8 my-8 my-lg-0'>
							<div className='position-relative mb-10'>
								<span className='double-quote start'>“</span>
								<h3 className='fs-1 fw-bold text-center'>
									The best 4K LCD TV for the money.
								</h3>
								<span className='double-quote end'>“</span>
							</div>
							<img
								src={NyTimes.src}
								alt='featured image'
								width='200'
								className='mb-10'
							/>
						</div>
						<div className='col-12 col-md-6 col-lg-4 text-center d-flex flex-column justify-content-between align-items-center px-8 my-8 my-lg-0'>
							<div className='position-relative mb-10'>
								<span className='double-quote start'>“</span>
								<h3 className='fs-3 fw-bold text-center'>
									More features & better picture quality than you’ll get from
									any other TV in this price range.
								</h3>
								<span className='double-quote end'>“</span>
							</div>
							<img src={PC.src} alt='featured image' width='70' />
						</div>
						<div className='col-12 col-md-6 col-lg-4 text-center d-flex flex-column justify-content-between align-items-center px-8 my-8 my-lg-0'>
							<div className='position-relative mb-10'>
								<span className='double-quote start'>“</span>
								<h3 className='fs-3 fw-bold text-center'>
									For under $1,000, you won't find a better gaming TV than this.
								</h3>
								<span className='double-quote end'>“</span>
							</div>
							<img src={EditorsChoice.src} alt='featured image' width='70' />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FeatureBadges
