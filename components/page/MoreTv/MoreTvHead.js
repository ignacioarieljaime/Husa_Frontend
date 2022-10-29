import React from 'react'

// image
import Image from 'public/assets/images/more-tv/header-television.png'
import Link from 'next/link'

function MoreTVHead({ data }) {
	const { structure } = data
	console.log(structure)
	return (
		<section>
			<div className='blue-bg-more-tv '>
				<div className='container-fluid bg-bubble-effect px-md-8 py-20'>
					<div className='row align-items-center overflow-hidden'>
						<div className='col-12 col-md-6'>
							<h4
								className='header-texts'
								dangerouslySetInnerHTML={{
									__html: structure?.title?.value
								}}></h4>
							<p
								className='fs-5 text-white fw-normal mb-7'
								dangerouslySetInnerHTML={{
									__html: structure?.description?.value
								}}></p>
							{structure?.link?.value && (
								<Link href={structure?.link?.value}>
									<a className='btn btn-glowing rounded-5'>
										{structure?.link?.title}
									</a>
								</Link>
							)}
						</div>
						<div className='col-12 col-md-6'>
							<img
								src={structure?.image?.src}
								alt={structure?.image?.alt}
								width='100%'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoreTVHead
