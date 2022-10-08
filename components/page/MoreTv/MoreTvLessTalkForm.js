import React from 'react'

// image
import TvFlipped from 'public/assets/images/more-tv/tv-flipped.png'

function MoreTvLessTalkForm() {
	return (
		<section>
			<div className='blue-bg'>
				<div className='bg-bubble-dim-effect'>
					<div className='container px-md-8 py-20'>
						<div className='row align-items-center'>
							<div className='col-12 col-md-6 pe-lg-10'>
								<h2 className='fs-3qx fw-normal text-white mb-10 mb-md-20'>
									Less Talk.
									<span className='d-block opacity-75'>More Winning.</span>
								</h2>
								<p className='fs-2 text-white fw-normal mb-7'>
									Answer the question and enter the draw to win a Hisense U6H 4K
									ULED TV.
								</p>
								<img
									src={TvFlipped.src}
									alt='featured image'
									width='80%'
									className='d-none d-md-block'
								/>
							</div>
							<div className='col-12 col-md-6 ps-lg-10'>
								<form action=''>
									<p className='fw-normal text-white mb-11'>
										What proportion of the American public believes a brand
										should invest in their products, not pretentious, artsy
										advertisements?
									</p>
									<p className='fw-normal text-white mb-2'>Select answer</p>
									<div className='d-flex justify-content-start align-items-center flex-wrap mb-8'>
										<div className='custom-radio my-2'>
											<input
												type='radio'
												id='8'
												name='proportion'
												className='d-none'
											/>
											<label for='8' className='fw-normal text-white mb-0 ms-1'>
												8/10
											</label>
										</div>
										<div className='custom-radio my-2'>
											<input
												type='radio'
												id='6'
												name='proportion'
												className='d-none'
											/>
											<label for='6' className='fw-normal text-white mb-0 ms-1'>
												6/10
											</label>
										</div>
										<div className='custom-radio my-2'>
											<input
												type='radio'
												id='1'
												name='proportion'
												className='d-none'
											/>
											<label for='1' className='fw-normal text-white mb-0 ms-1'>
												1/10
											</label>
										</div>
									</div>
									<div className='form-group'>
										<input
											className='form-control custom-input'
											type='text'
											placeholder='First Name'
										/>
									</div>
									<div className='form-group'>
										<input
											className='form-control custom-input'
											type='text'
											placeholder='Last Name'
										/>
									</div>
									<div className='form-group'>
										<input
											className='form-control custom-input'
											type='email'
											placeholder='Email'
										/>
									</div>
									<div className='form-group'>
										<input
											className='form-control custom-input'
											type='tel'
											placeholder='Phone Number'
										/>
									</div>
									<div className='d-flex justify-content-start align-items-center mb-10'>
										<div className='custom-checkbox'>
											<input
												type='checkbox'
												id='checkbox'
												name='privacy-policy'
												className='d-none'
												
											/>
											<label
												for='checkbox'
												className='fw-normal text-white mb-0 ms-1'>
												I agree to the
												<a href='#' className='text-white'>
													terms & conditions
												</a>
											</label>
										</div>
									</div>
									<div className='text-end'>
										<button
											type='submit'
											className='btn btn-info-light text-navy text-uppercase rounded-5 px-4'>
											submit
										</button>
									</div>
								</form>
							</div>
							<div className='col-12 d-block d-md-none'>
								<img src={TvFlipped.src} alt='featured image' width='100%' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoreTvLessTalkForm
