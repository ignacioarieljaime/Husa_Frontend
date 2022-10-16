import React from 'react'

const AndroidTv = () => {
	return (
		<section className='l9g'>
			<div className='container-fluid py-10 py-md-20'>
				<div
					className='px-4 px-md-20 aos-init aos-animate'
					data-aos='fade'
					data-aos-delay='0'
					data-aos-duration='1000'>
					<h2 className='fs-5 fs-md-2hx fw-bold mb-5'>
						Android TV.<span className='d-block'>A Smart TV Platform.</span>
					</h2>
				</div>
				<div className='row align-items-start px-1 px-md-17'>
					<div className='col-12 col-md-6'>
						<article className='article text-start'>
							<img
								src='https://assets.hisense-usa.com/resources/themes/default/images/products/lg9/section-11-android.jpg'
								alt='featured image'
								width='100%'
								className='my-4 my-md-19'
							/>
							<div>
								<h3 className='fs-5 fs-md-2qx mb-3'>Android TV</h3>
								<p className='fs-9 fs-md-2 lh-1 fw-light m-auto mb-4'>
									Bring great content to the biggest screen in your home. With a
									super clean and "easy to use" interface, you can install apps
									from the Google Play Store, stream content from your favorite
									streaming services, and even use Chromecast to mirror your
									phone or tablet directly to the big screen.
								</p>
							</div>
						</article>
					</div>
					<div className='col-12 col-md-6'>
						<article className='article text-start'>
							<img
								src='https://assets.hisense-usa.com/resources/themes/default/images/products/lg9/section-11-google.jpg'
								alt='featured image'
								width='100%'
								className='my-4 my-md-19'
							/>
							<div>
								<h3 className='fs-5 fs-md-2qx mb-3'>Works with Hey Google</h3>
								<p className='fs-9 fs-md-2 lh-1 fw-light m-auto mb-4'>
									The elegant voice remote works with Hey Google so you can use
									your voice to quickly navigate to your favorite content,
									change the volume, search YouTube, and many other shortcuts so
									you spend less time button mashing and more time enjoying your
									content.
								</p>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AndroidTv
