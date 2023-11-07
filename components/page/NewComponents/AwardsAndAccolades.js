import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import Swiper from 'swiper'

export default function AwardsAndAccolades({ data, pim }) {
	const ref = useRef(null)
	const router = useRouter()
	const [content, setContent] = useState({})
	useEffect(() => {
		setContent(data?.structure)
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
	}, [])

	return (
		<section>
			<div
				id={data?.name + data?.id}
				className='awards_and_accolades'
				ref={ref}>
				<h3
					className='awards_and_accolades__title'
					dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h3>
				{content?.list?.value && content?.list?.value.length <= 4 ? (
					<div className='awards_and_accolades__cards_wrapper'>
						{content?.list?.value.map((item, index) => (
							<div
								className='awards_and_accolades__cards_wrapper__card'
								key={index}>
								<div className='awards_and_accolades__cards_wrapper__card__image'>
									<img src={item?.image?.value} alt={item?.title?.value} />
								</div>
								<div className='awards_and_accolades__cards_wrapper__card__content'>
									<h4
										className='awards_and_accolades__cards_wrapper__card__title'
										dangerouslySetInnerHTML={{
											__html: item?.title?.value
										}}></h4>
									<p
										className='awards_and_accolades__cards_wrapper__card__text'
										dangerouslySetInnerHTML={{ __html: item?.text?.value }}></p>
								</div>
							</div>
						))}
					</div>
				) : (
					<Swiper></Swiper>
				)}
			</div>
		</section>
	)
}
