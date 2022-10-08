import Badge from 'public/assets/images/100-day/2-year.png'
import DoubleWarrantyText from 'public/assets/images/100-day/double-warranty.png'

const DoubleWarranty = () => {
	return (
		<section>
			<div className='bg-purple py-15'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='d-none d-md-block col-12 my-5 my-lg-0 col-md-6 order-2 order-md-2 order-lg-1 col-lg-4'>
							<div className='warranty-adv'>
								<h2>Shop all eligible models</h2>
								<p>Find the TV that’s right for you.</p>
							</div>
						</div>
						<div className='col-12 my-5 my-lg-0 col-md-6 order-1 order-md-1 order-lg-2 offset-md-3 offset-lg-0 col-lg-4'>
							<div className='text-center'>
								<img
									src={Badge.src}
									alt='2 year badge'
									className='mb-6'
									width='50%'
								/>
								<img
									src={DoubleWarrantyText.src}
									alt='double warranty'
									width='70%'
								/>
							</div>
						</div>
						<div className='d-none d-md-block col-12 my-5 my-lg-0 col-md-6 order-3  col-lg-4'>
							<div className='warranty-adv'>
								<h2>Register your purchase</h2>
								<p>Register your TV within 14 days.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DoubleWarranty
