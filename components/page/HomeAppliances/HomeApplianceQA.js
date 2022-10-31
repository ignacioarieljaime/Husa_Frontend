import React from 'react'
import Link from 'next/link'

const HomeApplianceQA = ({ data: { structure } }) => {
	return (
		<section>
			<div className='black-banner p-md-4'>
				<div className='container px-6 px-md-8 py-20'>
					<article className='article text-center'>
						<h2 className='text-white fs-3x mb-12'>
							{structure?.title?.value}
							<span className='text-primary ms-2'>
								{structure?.coloredTitle?.value}
							</span>
						</h2>
						<div>
							<p
								className='text-white fw-normal m-auto mb-4'
								dangerouslySetInnerHTML={{
									__html: structure?.text?.value
								}}></p>
							<Link href={structure?.link?.value}>
								<a className='btn btn-outline-dark text-muted text-uppercase rounded-5 px-10 my-8 d-block w-fit mx-auto'>
									{structure?.link?.title}
								</a>
							</Link>
							<img
								src={structure?.image.src}
								alt={structure?.image.alt}
								width='90%'
							/>
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default HomeApplianceQA
