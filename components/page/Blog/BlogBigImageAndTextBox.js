import React from 'react'

function BlogBigImageAndTextBox({ data: { structure } }) {
	return (
		<section>
			<div className='row mx-0'>
				<div className='col-12 col-md-6 px-0 header-secondary'>
					<img
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						width='100%'
						height='100%'
					/>
				</div>
				<div className='col-12 col-md-6 bg-light-orange-gradient px-0'>
					<article className='article row justify-content-center align-items-center h-100 mx-0 p-10 p-sm-20 p-md-5 p-lg-20'>
						<div
							className='px-xl-20'
							dangerouslySetInnerHTML={{ __html: structure?.text?.value }}>
							{/* <h4 className='mb-10 fs-4'>
								How to avoid TV glare In really bright rooms?
							</h4>
							<div>
								<p className='fs-base fw-normal text-muted'>
									"The rule Is to never place a TV opposite a window as that
									would pick up reflections; conversely never put It In front a
									window as It would be backlit," warns Cliff. Instead, try to
									keep It at 90-degree angle from the window. This will also
									help keep nosy neighbours from peeking In to see what you're
									watching. No one wants that sort of judgment!
								</p>
							</div> */}
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default BlogBigImageAndTextBox
