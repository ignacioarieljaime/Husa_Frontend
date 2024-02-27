import React from 'react'
import ExtendedWarrantyFeatureBlocksItem from './ExtendedWarrantyFeatureBlocksItem'

const ExtendedWarrantyFeatureBlocks = ({ data: { structure } }) => {
	console.log({structure})
	const backgroundColorHandler = () => {
		if (structure?.backgroundColor?.value) return structure?.backgroundColor?.value
		return '#F0F2F2'
	}
	return (
		<section>
			<div
				className='home-page-mb-discovery py-20 bg-white'
				// style={{
				// 	backgroundColor: structure?.backgroundColor?.value
				// 		? structure?.backgroundColor?.value
				// 		: '#F0F2F2'
				// }}
				>
				{structure?.title?.value ? (
					<h2 className='fs-2hx support-cards-title'>{structure?.title?.value}</h2>
				) : null}
				<div className='row align-items-stretch support-flex-container'>
					{structure?.list?.value.map((item, index) => (
						<ExtendedWarrantyFeatureBlocksItem
							key={index}
							image={item?.image}
							link={item?.link}
							text={item?.text?.value}
							light={structure?.backgroundColor?.value !== null}
							width={100 / structure?.list?.value?.length}
							backgroundColor={backgroundColorHandler()}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default ExtendedWarrantyFeatureBlocks
