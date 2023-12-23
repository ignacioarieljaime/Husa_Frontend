import React from 'react'
import NewsRoomMainNewsItem from '../NewsRoomMainNewsItem'
import Link from 'next/link'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Spinner from 'components/common/Spinner'

const NewsSingleLatestNews = ({ data, pim }) => {
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
					(structure?.count?.value + 1)
				}${
					structure?.selectby?.value === 'rel'
						? pim?.tags.map(item => '&tag[]=' + item)
						: ''
				}&exclude[]=${pim?.id}&page=${1}&brand_id=${
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

	// function sortNews(_news, method) {
	// 	const filteredNews = _news.filter(news => news?.id !== pim?.id)

	// 	if (method === 'rel') {
	// 		setNews(
	// 			filteredNews.filter(_item => {
	// 				console.log(_item.tags)
	// 				console.log(pim?.tags)
	// 				return _item.tags.some(_tag => pim?.tags.includes(_tag))
	// 			})
	// 		)
	// 	} else {
	// 		filteredNews.sort((a, b) => {
	// 			return new Date(b.published_at) - new Date(a.published_at)
	// 		})
	// 		setNews(filteredNews)
	// 	}
	// }

	return (
		<div className='single_news_latest_news'>
			<div className='container'>
				<div>
					<h5 dangerouslySetInnerHTML={{ __html: title }}></h5>
					<div className='items'>
						{news === 'loading' ? (
							<Spinner />
						) : structure?.selectby?.value &&
						  structure?.count?.value &&
						  news &&
						  Array.isArray(news) ? (
							news.map(
								(item, index) =>
									index < structure?.count?.value && (
										<>
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
										</>
									)
							)
						) : (
							structure?.list?.value?.map((item, index) => (
								<>
									<NewsRoomMainNewsItem
										image={item?.image?.src}
										title={item?.title?.value}
										date={item?.date?.value}
										subject={item?.tagLink?.title}
										link={item?.link?.value}
										isThree={true}
									/>
								</>
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
