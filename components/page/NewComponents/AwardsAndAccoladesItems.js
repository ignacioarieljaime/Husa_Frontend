import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import QuoteIcon from 'components/icons/QuoteIcon'
import PlayIcon from 'components/icons/PlayIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const AwardsAndAccoladesItems = ({
	data,
	activateLightBox,
	isLightBoxValid,
	length
}) => {
	const swiper = useSwiper()

	useEffect(() => {
		if (swiper)
			swiper.slideTo(
				window.innerWidth >= 768 ? (length % 2 === 0 ? length - 1 : length) : 0,
				1
			)
	}, [length, swiper])

	const ModuleContentDiv = ({ children }) => {
		return (
			<div
			className={`awards_and_accolades__cards_wrapper__card item__3 carousel_slider_item ${
				data?.link?.value && '_has_link'
			} ${isLightBoxValid ? 'cursor-pointer' : ''}`}
			onClick={() => isLightBoxValid && activateLightBox()}
			>
				{children}
			</div>
		);
	};

	const ModuleContentLink = ({ children }) => {
		return (
			<Link
			href={data?.link?.value}
			target={data?.link?.target ? data.link?.target : '_self'}
			>
				<a
					className={`awards_and_accolades__cards_wrapper__card item__3 carousel_slider_item ${
						data?.link?.value && '_has_link'
					}`}
					target={data?.link?.target ? data.link?.target : '_self'}>
					{children}
				</a>
			</Link>
		);
	};

	const ModuleInnerContent = () => {
		return (
			<>
				<img
					src={data?.image?.src}
					className='awards_and_accolades__cards_wrapper__card__image'
				/>
				<div className='awards_and_accolades__cards_wrapper__card__content'>
					<div className='awards_and_accolades__cards_wrapper__card__content__texts'>
						<span className='awards_and_accolades__cards_wrapper__card__content__texts__quote'>
							<QuoteIcon />
						</span>
						<h4
							className='awards_and_accolades__cards_wrapper__card__content__texts__title'
							dangerouslySetInnerHTML={{
								__html: data?.title?.value
							}}></h4>
						<h6
							className='awards_and_accolades__cards_wrapper__card__content__texts__subtilte'
							dangerouslySetInnerHTML={{
								__html: data?.subtitle?.value
							}}></h6>
					</div>
					{isLightBoxValid ? (
						<button
							onClick={() => activateLightBox()}
							className='n-btn small primary-text btn-outline awards_and_accolades__cards_wrapper__card__content__link'>
							{data?.link?.title}{' '}
							{!!data?.lightBoxObject?.value?.video?.value && <PlayIcon />}
						</button>
					) : (
						data?.link?.value && (
							<Link
								href={data?.link?.value}
								target={data?.link?.target ? data.link?.target : '_self'}>
								<a
									className='n-btn small primary-text btn-outline awards_and_accolades__cards_wrapper__card__content__link'
									target={data?.link?.target ? data.link?.target : '_self'}>
									{data?.link?.title}
									{/* update for IMD - 923 */}
									<FontAwesomeIcon icon={faChevronRight} size='xs' />
									{/*  */}
								</a>
							</Link>
						)
					)}
				</div>
			</>
		);
	};

	if (isLightBoxValid) {
		return (
			<ModuleContentDiv>
				<ModuleInnerContent />
			</ModuleContentDiv>
		)
	} else {
		return (
			<ModuleContentLink>
				<ModuleInnerContent />
			</ModuleContentLink>
		)
	}
}

export default AwardsAndAccoladesItems
