import GauranteeBadge from '../../../../public/assets/images/100-day/guarantee.png'
import Day100Tv from '../../../../public/assets/images/100-day/day-100-tv.png'

const Gaurantee = () => {
	return (
		<section>
			<div className='bg-purple py-15'>
				<div className='container'>
					<div className='row align-items-center mb-15'>
						<div className='col-12 my-5 my-lg-0 col-md-6 order-2 order-md-2 order-lg-1 col-lg-4'>
							<div className='warranty-adv'>
								<h2>Shop all eligible models</h2>
								<p>Find the TV that’s right for you.</p>
							</div>
						</div>
						<div className='col-12 my-5 my-lg-0 col-md-6 order-1 order-md-1 order-lg-2 offset-md-3 offset-lg-0 col-lg-4'>
							<div className='text-center'>
								<img
									src={Day100Tv.src}
									alt='2 year badge'
									className='mb-6 d-block d-md-none mx-auto'
									width='80%'
								/>
								<img
									src={GauranteeBadge.src}
									alt='2 year badge'
									className='mb-6 d-none d-md-block mx-auto'
									width='50%'
								/>
							</div>
						</div>
						<div className='col-12 my-5 my-lg-0 col-md-6 order-3  col-lg-4'>
							<div className='warranty-adv'>
								<h2>Register your purchase</h2>
								<p>Register your TV within 14 days.</p>
							</div>
						</div>
					</div>
					<div className='guarantee-details'>
						<p>
							For full program details, visit:{' '}
							<a href='#' className='text-pink'>
								http://hisense-promos.com/noregrets
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Gaurantee
