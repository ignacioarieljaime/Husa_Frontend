import Link from 'next/link'
import React from 'react'
import TVAndAudioTvShopItem from './TVAndAudioTvShopItem'

import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
function TVAndAudioTvShopBox({ data: { structure } }) {
	return (
		<section>
			<div className='black-banner p-md-4'>
				<div className='px-6 px-md-8 py-15 py-md-20'>
					<article className='article text-center'>
						<h2 className='text-white mb-10'>{structure?.title?.value}</h2>
						<div className='row justify-content-center align-items-stretch mb-14'>
							{structure?.list?.value.map((item, index) => (
								<TVAndAudioTvShopItem data={item} key={index} />
							))}
						</div>
						{structure?.link?.value && (
							<div>
								<Link
									target={
										structure?.link?.target ? structure?.link?.target : '_self'
									}
									href={structure?.link?.value}>
									<a
										target={
											structure?.link?.target
												? structure?.link?.target
												: '_self'
										}
										className='n-btn outline-white transparent text-uppercase py-4 px-9'>
										{structure?.link?.title}
										{structure?.link?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)}
									</a>
								</Link>
							</div>
						)}
					</article>
				</div>
			</div>
		</section>
	)
}

export default TVAndAudioTvShopBox
