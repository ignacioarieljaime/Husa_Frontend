import React from 'react'
import NewsRoomMainNewsItem from '../NewsRoomMainNewsItem'
import Link from 'next/link'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Spinner from 'components/common/Spinner'

const NewsSingleLatestNews = ({ data, pim, pageId }) => {
	let { structure } = data
	const [news, setNews] = useState()
	const [title, setTitle] = useState()

	useEffect(() => {
		setTitle(structure?.title?.value)
		getNews()
	}, [])

	const getNews = async () => {
		setNews('loading')
		try {
			let response = await axios.get(
				`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/getPosts?type=news&perPage=${
					structure?.count?.value + 1
				}${
					structure?.selectby?.value === 'rel'
						? pim?.tags.map(item => '&tag[]=' + item)
						: ''
				}&exclude[]=${pageId}&page=${1}&brand_id=${
					process.env.NEXT_PUBLIC_BRAND_ID
				}`,
				{
					headers: {
						BrandId: process.env.NEXT_PUBLIC_BRAND_ID
					}
				}
			)

			const sameArticleRemoved = response.data.data.slice(1)

			setNews(sameArticleRemoved)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='single_news_latest_news'>
			<div className='container'>
				<div>
					<h5 dangerouslySetInnerHTML={{ __html: title }}></h5>
					<div
						className='items'
						style={{
							gridTemplateColumns: `repeat(${structure?.count?.value}, 1fr)`
						}}>
						{news === 'loading' ? (
							<Spinner />
						) : structure?.selectby?.value &&
						  structure?.count?.value &&
						  news &&
						  Array.isArray(news) ? (
							news.map(
								(item, index) =>
									index < structure?.count?.value && (
										<React.Fragment key={index}>
											<NewsRoomMainNewsItem
												image={
													item?.meta.find(
														_meta => _meta.name === 'property="og:image"'
													)?.content
												}
												title={item?.title}
												date={item?.published_at}
												subject={item?.tags}
												link={item?.route}
												fetched
												isThree={true}
											/>
										</React.Fragment>
									)
							)
						) : (
							structure?.list?.value?.map((item, index) => (
								<React.Fragment key={index}>
									<NewsRoomMainNewsItem
										image={item?.image?.src}
										title={item?.title?.value}
										date={item?.date?.value}
										subject={item?.tagLink?.title}
										link={item?.link?.value}
										isThree={true}
									/>
								</React.Fragment>
							))
						)}
					</div>
					<Link
						target={structure?.link?.target || '_self'}
						href={structure?.link?.value || '/'}>
						<a target={structure?.link?.target || '_self'}>
							{structure?.link?.title}
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NewsSingleLatestNews
