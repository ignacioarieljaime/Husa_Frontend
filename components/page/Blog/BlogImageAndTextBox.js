import React from 'react'

// image
import Dessert from 'public/assets/images/blog/desserts.png'
import Cake from 'public/assets/images/blog/cake.png'

function BlogImageAndTextBox({ data: { structure } }) {
	return (
		<section>
			<div className='container my-20 py-5 py-lg-20'>
				<div className='row justify-content-between align-items-center mt-20'>
					<div className='col-12 col-lg-6 mb-20 mb-lg-0'>
						<div className='row justify-content-between align-items-center'>
							<div className='col-7 mt-10'>
								<img
									src={structure?.image1?.src}
									alt={structure?.image1?.alt}
									className='w-100 rounded-10px'
								/>
							</div>
							<div className='col-5 align-self-start mt-n10'>
								<img
									src={structure?.image2?.src}
									alt={structure?.image2?.alt}
									className='w-100 rounded-10px'
								/>
							</div>
						</div>
					</div>
					<div className='col-12 col-lg-4'>
						<article className='article'>
							<div
								dangerouslySetInnerHTML={{
									__html: structure?.text?.value
								}}></div>
							{/* <h4 className='mb-10 fs-3'>What does feng shui even mean?</h4>
							<div>
								<p className='fs-base fw-normal text-muted'>
									"Feng shui Is the ancient Chinese art of creating an optimum
									environment for Its users," says Cliff. It's about harnessing
									and reacting to Qi, a vital energy force, of our surroundings,
									traditionally thought to Improve wealth, longevity and
									happiness.
								</p>
								<p className='fs-base fw-normal text-muted'>
									"As our home Is our refuge," Cliff adds, "we need to feel as
									comfortable and happy as we can." There's no point in creating
									a space that you don't want to live In and enjoy watching your
									team kill It week to week.
								</p>
							</div> */}
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogImageAndTextBox
