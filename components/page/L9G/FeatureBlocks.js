import React from 'react'
import FeatureBlocksItem from './FeatureBlocksItem'

const FeatureBlocks = ({ data: { structure } }) => {
	return (
		<section className='l9g'>
			<div className='feature-blocks'>
				{structure?.list?.value.map((item, index) => (
					<FeatureBlocksItem
						key={index}
						title={item?.title?.value}
						description={item?.description?.value}
						videoSrc={item?.video?.src}
					/>
				))}
			</div>
		</section>
	)
}

export default FeatureBlocks
