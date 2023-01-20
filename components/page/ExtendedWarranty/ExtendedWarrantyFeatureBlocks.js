import React from 'react'
import ExtendedWarrantyFeatureBlocksItem from './ExtendedWarrantyFeatureBlocksItem'

const ExtendedWarrantyFeatureBlocks = ({ data: { structure } }) => {
	return (
		<section>
			<div
				className='home-page-mb-discovery py-20'
				style={{
					backgroundColor: structure?.backgroundColor?.value
						? structure?.backgroundColor?.value
						: '#F0F2F2'
				}}>
				{structure?.title?.value ? (
					<h2 className='fs-2hx mb-17'>{structure?.title?.value}</h2>
				) : null}
				<div className='row justify-content-evenly align-items-stretch mx-3'>
					{structure?.list?.value.map((item, index) => (
						<ExtendedWarrantyFeatureBlocksItem
							key={index}
							image={item?.image}
							link={item?.link}
							text={item?.text?.value}
							light={structure?.backgroundColor?.value !== null}
							width={100 / structure?.list?.value?.length}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default ExtendedWarrantyFeatureBlocks
