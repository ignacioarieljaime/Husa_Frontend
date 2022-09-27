import React from 'react'

// image
import Image from './../../../../public/assets/images/blog/desserts.png'

function BlogBigImageAndTextBox() {
	return (
		<section>
			<div class='row mx-0'>
				<div class='col-12 col-md-6 px-0 header-secondary'>
					<img
						src={Image.src}
						alt='featured image'
						width='100%'
						height='100%'
					/>
				</div>
				<div class='col-12 col-md-6 bg-light-orange-gradient px-0'>
					<article class='article row justify-content-center align-items-center h-100 mx-0 p-10 p-sm-20 p-md-5 p-lg-20'>
						<div class='px-xl-20'>
							<h4 class='mb-10 fs-4'>
								How to avoid TV glare In really bright rooms?
							</h4>
							<div>
								<p class='fs-base fw-normal text-muted'>
									"The rule Is to never place a TV opposite a window as that
									would pick up reflections; conversely never put It In front a
									window as It would be backlit," warns Cliff. Instead, try to
									keep It at 90-degree angle from the window. This will also
									help keep nosy neighbours from peeking In to see what you're
									watching. No one wants that sort of judgment!
								</p>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default BlogBigImageAndTextBox
