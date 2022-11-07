import React from 'react'
import ExtendedWarrantyFeatureBlocksItem from './ExtendedWarrantyFeatureBlocksItem'

const ExtendedWarrantyFeatureBlocks = ({ data: { structure } }) => {
	return (
		<section>
			<div
				className='home-page-mb-discovery py-20'
				style={{ backgroundColor: structure?.backgroundColor?.value }}>
				<h2 className='fs-2hx mb-17'>{structure?.title?.value}</h2>
				<div className='row justify-content-evenly align-items-center mx-0'>
					{structure?.list?.value.map((item, index) => (
						<ExtendedWarrantyFeatureBlocksItem
							key={index}
							image={item?.image}
							link={item?.link}
							text={item?.text?.value}
							width={100 / structure?.list?.value?.length}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default ExtendedWarrantyFeatureBlocks
