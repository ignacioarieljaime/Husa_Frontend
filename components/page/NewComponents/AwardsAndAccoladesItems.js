import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useSwiper } from 'swiper/react'

const AwardsAndAccoladesItems = ({ data, length }) => {
	const swiper = useSwiper()

	useEffect(() => {
		if (swiper)
			swiper.slideTo(
				window.innerWidth >= 768 ? (length % 2 === 0 ? length - 1 : length) : 0,
				1
			)
	}, [length, swiper])
	return (
		<div className='awards_and_accolades__cards_wrapper__card item__3'>
			<img
				src={data?.image?.src}
				alt={data?.title?.value}
				className='awards_and_accolades__cards_wrapper__card__image'
			/>
			<div className='awards_and_accolades__cards_wrapper__card__content'>
				<div className='awards_and_accolades__cards_wrapper__card__content__texts'>
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
				{data?.link?.value && (
					<Link
						href={data?.link?.value}
						target={data?.link?.target ? data.link?.target : '_self'}>
						<a
							className='n-btn small primary-text awards_and_accolades__cards_wrapper__card__content__link'
							target={data?.link?.target ? data.link?.target : '_self'}>
							{data?.link?.title}
							<FontAwesomeIcon icon={faChevronRight} />
						</a>
					</Link>
				)}
			</div>
		</div>
	)
}

export default AwardsAndAccoladesItems
