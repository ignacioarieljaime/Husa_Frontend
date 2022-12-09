import Spinner from 'components/common/Spinner'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { GetProductWithSeriesAndProductIdApi } from 'services/Product'
import RelatedProductsItem from './RelatedProductsItem'

const RelatedProducts = ({ data }) => {
	let { structure } = data
	const router = useRouter()

	const [series, setSeries] = useState()

	useEffect(() => {
		let seriesId = structure?.list?.value?.items.map(item => item.id)
		getSeries(seriesId)
	}, [])

	const getSeries = async _seriesId => {
		setSeries('loading')
		try {
			let response = await GetProductWithSeriesAndProductIdApi(
				router,
				`series_id=${encodeURIComponent(JSON.stringify(_seriesId))}`
			)
			setSeries(response.data.data)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<section>
			<div className='container p-12 d-none d-md-block'>
				<article
					className='article'
					dangerouslySetInnerHTML={{
						__html: structure?.title?.value
					}}></article>
			</div>
			<div className='related-items'>
				{series === 'loading' ? (
					<Spinner size={35} />
				) : Array.isArray(series) ? (
					series.map((item, index) => (
						<RelatedProductsItem key={index} data={item} />
					))
				) : (
					''
				)}
			</div>
		</section>
	)
}

export default RelatedProducts
