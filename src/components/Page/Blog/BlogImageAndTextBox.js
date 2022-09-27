import React from 'react'

// image
import Dessert from './../../../../public/assets/images/blog/desserts.png'
import Cake from './../../../../public/assets/images/blog/cake.png'


function BlogImageAndTextBox() {
	return (
		<section>
			<div class='container my-20 py-5 py-lg-20'>
				<div class='row justify-content-between align-items-center mt-20'>
					<div class='col-12 col-lg-6 mb-20 mb-lg-0'>
						<div class='row justify-content-between align-items-center'>
							<div class='col-7 mt-10'>
								<img
									src={Dessert.src}
									alt='featured image'
									class='w-100 rounded-10px'
								/>
							</div>
							<div class='col-5 align-self-start mt-n10'>
								<img
									src={Cake.src}
									alt='featured image'
									class='w-100 rounded-10px'
								/>
							</div>
						</div>
					</div>
					<div class='col-12 col-lg-4'>
						<article class='article'>
							<h4 class='mb-10 fs-3'>What does feng shui even mean?</h4>
							<div>
								<p class='fs-base fw-normal text-muted'>
									"Feng shui Is the ancient Chinese art of creating an optimum
									environment for Its users," says Cliff. It's about harnessing
									and reacting to Qi, a vital energy force, of our surroundings,
									traditionally thought to Improve wealth, longevity and
									happiness.
								</p>
								<p class='fs-base fw-normal text-muted'>
									"As our home Is our refuge," Cliff adds, "we need to feel as
									comfortable and happy as we can." There's no point in creating
									a space that you don't want to live In and enjoy watching your
									team kill It week to week.
								</p>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogImageAndTextBox
