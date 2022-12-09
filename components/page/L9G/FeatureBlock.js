import React from 'react'
import FeatureBlocksItem from './FeatureBlocksItem'

const FeatureBlock = ({ data: { structure } }) => {
	return (
		<section className='l9g'>
			<div className='feature-blocks'>
				<FeatureBlocksItem
					direction={structure?.direction?.value}
					title={structure?.title?.value}
					text={structure?.text?.value}
					videoSrc={structure?.video?.value}
				/>
			</div>
		</section>
	)
}

export default FeatureBlock
