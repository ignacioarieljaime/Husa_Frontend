import React, { useEffect, useRef } from 'react'
import CustomImage from 'components/common/CustomImage'
import { useWindowSize } from 'hooks/useWindowSize'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CESArticlesPagination from './CESArticlesPagination'
import moment from 'moment'

const CESArticles = ({ data }) => {
	let { structure } = data
	const [width] = useWindowSize()
	const [content, setContent] = useState(null)
	const [articles, setArticles] = useState([])
	const [pagination, setPagination] = useState()
	const router = useRouter()
	const ref = useRef()

	useEffect(() => {
		setContent(structure)
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
		setPagination({
			current_page: 1,
			last_page: Math.ceil(structure?.list?.value.length / 10),
			per_page: 10
		})
	}, [])

	useEffect(() => {
		setArticles(
			content?.list?.value.filter((_article, index) => {
				return (
					(pagination?.current_page - 1) * 10 <= index &&
					pagination?.current_page * 10 > index
				)
			})
		)
	}, [pagination])

	return (
		<>
			<div
				id={data?.name + data?.id}
				ref={ref}
				className='news_press_archive container px-4'>
				<div>
					<div className='items_box'>
						<h5>{content?.title?.value}</h5>

						<div className='items'>
							{articles?.length
								? articles.map((item, index) => (
										<div key={index}>
											<Link href={item?.link?.value || '/'}>
												<a
													className='d-block h-100'
													style={{ width: width > 600 ? '370px' : '100%' }}>
													<CustomImage
														src={item?.image?.src}
														alt={item?.image?.alt}
														wrapperWidth={width > 600 ? '370px' : '100%'}
														wrapperHeight={'100%'}
													/>
												</a>
											</Link>
											<Link href={item?.link?.value || '/'}>
												<a className='box-group-link'>
													<div className='text_box'>
														<span className='subject'>{item?.tag?.value}</span>

														<h5>
															<Link href={item?.item?.link?.value || '/'}>
																<a>{item?.title?.value}</a>
															</Link>
														</h5>
														<span className='date'>
															{item?.published_at
																? moment(item?.published_at).format(
																		'MMMM DD YYYY'
																  )
																: moment(item?.created_at).format(
																		'MMMM DD YYYY'
																  )}
														</span>
													</div>
												</a>
											</Link>
										</div>
								  ))
								: null}
						</div>

						{pagination && (
							<CESArticlesPagination
								handler={_page =>
									setPagination({ ...pagination, current_page: _page })
								}
								pagination={pagination}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default CESArticles
