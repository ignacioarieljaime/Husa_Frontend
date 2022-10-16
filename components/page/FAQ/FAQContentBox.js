import React from 'react'

function FAQContentBox() {
	return (
		<section>
			<div className='container faq-article px-6 px-md-8 py-6'>
				<article className='article text-left'>
					<p>
						We’ve prepared some FAQs that may help to save you time. Content
						will continue to be added and updated to assist you and support your
						product
					</p>
					<div>
						<h2 className='my-11'>Common Questions:</h2>
						<div className='mb-15'>
							<b>Q. What are the codes to program my remote to the TV?</b>
							<p className='mt-6'>
								A. If you would like to program your other household remote
								controls to your new television, please refer to the User Manual
								supplied by your Cable or Satellite provider. It should include
								instructions on how to program their remote to your television.
							</p>
							<p className='mt-6'>
								A list of codes for the most common Cable and Satellite
								providers are listed below. Use the code that is associated with
								your Cable or Satellite provider (if applicable).
							</p>
							<p className='mt-6'>
								DIRECTV......0178, 10178, 10019, 10748, 11314, 11660, 11710,
								11780, 12049, 10171, 11204, 11326, 11517, 11564, 11641, 11963,
								12002, 12183
							</p>
							<p className='mt-6'>
								Time Warner Cable......386, 0178, 10178, 400, 450, 461, 456,
								0748, 1463, 0463, 10463
							</p>
							<p className='mt-6'>
								Comcast......0178, 10178, 10463, 11463, 10748, 11314, 11660,
								10171, 11204, 11326, 11517, 11641, 11780, 11785, 11892, 11963,
								12002
							</p>
							<p className='mt-6'>
								Cox Communications......0178, 10178, 1326, 1463
							</p>
							<p className='mt-6'>Dish Network......505, 627, 538, 720, 659</p>
							<p className='mt-6'>
								If the code associated with your Cable or Satellite provider is
								not listed, does not work or you cannot locate the instructions
								to program your remote, call your local Cable or Satellite
								providers customer service center.
							</p>
						</div>
						<div>
							<b>Q. I’ve lost my remote. How can I order another one?</b>
							<p className='my-6'>
								Losing your TV remote can be frustrating. However, (depending on
								the model) you may still be able to enjoy the TV by using your
								phone or you can replace the remote altogether. If you want to
								order a replacement remote, then visit
								<a
									href='https://hisense.encompass.com/'
									className='text-primary ms-2'
									target='_blank'>
									https://hisense.encompass.com/
								</a>
							</p>
						</div>
						<div>
							<b>
								Q. How can I dispose an old TV that I’ve had for years and is no
								longer working?
							</b>
							<p className='mt-6'>
								Recycling information is available on our website. For details
								on drop-off locations, please visit
								<a
									href='https://hisense-usa.com/recycling-information/'
									className='text-primary ms-2'
									target='_blank'>
									https://hisense-usa.com/recycling-information/
								</a>
							</p>
						</div>
					</div>
					<div>
						<h2 className='mb-11 mt-17'>Televisions:</h2>
						<div className='mb-15'>
							<a href='' className='text-primary text-decoration-none d-block mb-3'>
								Laser TV
							</a>
							<a href='' className='text-primary text-decoration-none d-block'>
								R7E Series
							</a>
						</div>
					</div>
					<div>
						<h2 className='my-11'>Home Appliance:</h2>
						<div className='mb-15'>
							<a href='' className='text-primary text-decoration-none d-block mb-3'>
								Portables ACs
							</a>
							<a href='' className='text-primary text-decoration-none d-block'>
								Dehumidifires
							</a>
						</div>
					</div>
				</article>
			</div>
		</section>
	)
}

export default FAQContentBox
