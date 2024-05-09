import CustomImage from 'components/common/CustomImage'
import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const NewsRoomMainNewsItem = ({
	isFirst,
	isThree,
	subject,
	title,
	date,
	image,
	link,
	target,
	fetched
}) => {
	const [customData, setCustomDate] = useState('')
	useEffect(() => {
		if (date && (fetched || date.includes('T')))
			setCustomDate(
				moment(date).format('MMMM DD YYYY')
/* 				moment(date).format('MMMM DD YYYY').split(' ')[0] +
					' ' +
					moment(date).format('MMMM DD YYYY').split(' ')[1] +
					', ' +
					moment(date).format('MMMM DD YYYY').split(' ')[2]
 */			)
		else setCustomDate(date)
	}, [date])

	return (
		<>
			<Link href={link || '/'} target={target || '_self'}>
				<a
					className={`news_room_main_news_item box-group-link ${
						isThree && 'three_item'
					} ${isFirst ? 'horizontal' : 'vertical'}`}>
					<div>
						<Link href={link || '/'} target={target || '_self'}>
							<a className='image_wrapper_link' target={target || '_self'}>
								<CustomImage
									src={image}
									className='image'
									wrapperWidth={'100%'}
									wrapperHeight={isThree ? '173px' : isFirst ? '100%' : '268px'}
								/>
							</a>
						</Link>
						<div className='text'>
							<span className='subject'>
								{Array.isArray(subject) ? subject.join(' ') : subject}
							</span>

							<h2>
								<Link href={link || '/'} target={target || '_self'}>
									<a target={target || '_self'}>{title}</a>
								</Link>
							</h2>

							<span className='date'>{customData}</span>
						</div>
					</div>
				</a>
			</Link>
		</>
	)
}

export default NewsRoomMainNewsItem
