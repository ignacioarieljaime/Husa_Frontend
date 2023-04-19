import Link from 'next/link'
import React from 'react'
import OpenPageOnNewTab from "public/assets/images/OpenNewPageIcon.png"
function ProductFeatureWithImageWithBTN({ data }) {
	let { structure } = data
	return (
		<section id={data?.name + data?.id}>
			<div class='p-0 mx-md-9 mx-4 '>
				<div
					class={`row description-blocks bg-black align-items-center ${
						structure?.direction?.value === 'rtl' ? 'flex-row-reverse' : ''
					}`}>
					<article class='introduction article text-white col-12 col-md-6 order-2 order-md-1'>
						<h2> {structure?.title?.value}</h2>
						<p>{structure?.paragraphOne?.value}</p>
						<p>{structure?.paragraphTwo?.value}</p>
						{structure?.learn_more?.value && (
							<Link
								target={structure?.learn_more?.target ? structure?.learn_more?.target : '_self'}
								href={structure?.learn_more?.value}>
								<a className='text-white fw-light d-block mb-10'>
									{structure?.learn_more?.title}
									{structure?.learn_more?.target === '_blank' && (
										<img
											style={{ marginLeft: '10px' }}
											src={OpenPageOnNewTab.src}
										/>
									)}
								</a>
							</Link>
						)}
						{structure?.link?.value && (
							<Link
								target={structure?.link?.target ? structure?.link?.target : '_self'}
								href={structure?.link?.value}>
								<a className='text-logo px-4 text-decoration-none'>
									{structure?.link?.title}
									{structure?.link?.target === '_blank' && (
										<img
											style={{ marginLeft: '10px' }}
											src={OpenPageOnNewTab.src}
										/>
									)}
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
