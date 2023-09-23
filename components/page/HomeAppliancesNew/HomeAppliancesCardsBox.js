import { useAspectRatio } from 'hooks/useAspectRatio'
import Link from 'next/link'
import React from 'react'

const HomeAppliancesCardsBox = ({ data }) => {
	const { structure } = data

	const ratio1 = useAspectRatio(structure?.block1?.value?.image?.src)
	const ratio2 = useAspectRatio(structure?.block2?.value?.image?.src)

	// theme
	return (
		<section>
			<div className='ha_cards_box text-center'>
				<div className='cards'>
					<div
						className={`item colorful ${structure?.block1?.value?.theme?.value}`}>
						<div className='content'>
							<h4
								className='title mb-0'
								dangerouslySetInnerHTML={{
									__html: structure?.block1?.value?.title?.value
								}}></h4>
							<img
								src={structure?.block1?.value?.image?.src}
								alt={structure?.block1?.value?.image?.alt}
								width={
									ratio1 > 1
										? ((ratio1 - 0.8) * 100).toFixed(2) + '%'
										: ratio1 <= 1 && ratio1 > 0.6
										? ((ratio1 - 0.45) * 100).toFixed(2) + '%'
										: ((ratio1 - 0.3) * 100).toFixed(2) + '%'
								}
								className='logo'
							/>
							<div>
								<h5
									className='subtitle'
									dangerouslySetInnerHTML={{
										__html: structure?.block1?.value?.text?.value
									}}></h5>

								{structure?.block1?.value?.link?.value && (
									<Link
										target={
											structure?.block1?.value?.link?.target
												? structure?.block1?.value?.link?.target
												: '_self'
										}
										href={
											structure?.block1?.value?.link?.value
												? structure?.block1?.value?.link?.value
												: '/'
										}>
										<a
											target={
												structure?.block1?.value?.link?.target
													? structure?.block1?.value?.link?.target
													: '_self'
											}
											style={{ width: '150px' }}
											className={`text-nowrap n-btn d-block medium mx-auto ${
												structure?.block1?.value?.theme?.value === 'dark'
													? 'black'
													: ' white'
											}`}>
											{structure?.block1?.value?.link?.title}
											{structure?.block1?.value?.link?.target === '_blank' && (
												<img
													style={{ marginLeft: '10px' }}
													src={OpenPageOnNewTab.src}
												/>
											)}
										</a>
									</Link>
								)}
							</div>
						</div>
					</div>
					<div className={`item ${structure?.block2?.value?.theme?.value}`}>
						<img
							src={structure?.block2?.value?.backgroundImage?.src}
							alt={structure?.block2?.value?.backgroundImage?.alt}
							width={'100%'}
							className='image'
						/>
						<div className='content'>
							<h4
								className='title'
								dangerouslySetInnerHTML={{
									__html: structure?.block2?.value?.title?.value
								}}></h4>
							<img
								src={structure?.block2?.value?.image?.src}
								alt={structure?.block2?.value?.image?.alt}
								width={
									ratio2 >= 1 ? '40%' : ((ratio2 - 0.4) * 100).toFixed(2) + '%'
								}
								className='logo'
							/>
							<div>
								<h5
									className='subtitle'
									dangerouslySetInnerHTML={{
										__html: structure?.block2?.value?.text?.value
									}}></h5>
								{structure?.block2?.value?.link?.value && (
									<Link
										target={
											structure?.block2?.value?.link?.target
												? structure?.block2?.value?.link?.target
												: '_self'
										}
										href={
											structure?.block2?.value?.link?.value
												? structure?.block2?.value?.link?.value
												: '/'
										}>
										<a
											target={
												structure?.block2?.value?.link?.target
													? structure?.block2?.value?.link?.target
													: '_self'
											}
											style={{ width: '150px' }}
											className={`text-nowrap n-btn d-block medium mx-auto ${
												structure?.block2?.value?.theme?.value === 'dark'
													? 'black'
													: ' white'
											}`}>
											{structure?.block2?.value?.link?.title}
											{structure?.block2?.value?.link?.target === '_blank' && (
												<img
													style={{ marginLeft: '10px' }}
													src={OpenPageOnNewTab.src}
												/>
											)}
										</a>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeAppliancesCardsBox
