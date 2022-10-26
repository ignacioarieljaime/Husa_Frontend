import Link from 'next/link'
import React from 'react'

function ProductFeatureWithImageWithBTN({ data }) {
	let { structure } = data
	return (
		<section>
			<div class='p-0 mx-9 '>
				<div
					class={`row description-blocks bg-black align-items-center ${
						structure?.direction?.value === 'rtl' ? 'flex-row-reverse' : ''
					}`}>
					<article class='introduction text-white col-12 col-md-6 order-2 order-md-1'>
						<h2> {structure?.title?.value}</h2>
						<p>{structure?.paragraphOne?.value}</p>
						<p>{structure?.paragraphTwo?.value}</p>
						{structure?.link?.value && (
							<Link href={structure?.link?.value}>
								<a className='white_border_link_btn'>
									{structure?.link?.title}
								</a>
							</Link>
						)}
					</article>
					<img
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						class='p-0 col-12 col-md-6 order-1 order-md-2'
					/>
				</div>
			</div>
		</section>
	)
}

export default ProductFeatureWithImageWithBTN
