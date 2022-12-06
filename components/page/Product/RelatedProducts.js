import React from 'react'
import RelatedProductsItem from './RelatedProductsItem'

const RelatedProducts = ({ data: { structure } }) => {
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
				{structure?.list?.value.map((item, index) => (
					<RelatedProductsItem key={index} data={item} />
				))}
			</div>
		</section>
	)
}

export default RelatedProducts
