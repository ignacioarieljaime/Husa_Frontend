import React from 'react'
import ExtendedWarrantyFeatureBlocksItem from './ExtendedWarrantyFeatureBlocksItem'
import { useWindowSize } from 'hooks/useWindowSize'

const ExtendedWarrantyFeatureBlocks = ({ data }) => {
	const { structure } = data
	const [width] = useWindowSize()
	return (
		<section>
			<div
				className={`home-page-mb-discovery  ${
					structure?.template?.value === 'v2' ? 'version_2' : 'py-20'
				}`}
				style={{
					backgroundColor:
						structure?.backgroundColor?.value &&
						structure?.template?.value === 'v1'
							? structure?.backgroundColor?.value
							: 'transparent'
				}}>
				{structure?.title?.value ? (
					<h3 className='title'>{structure?.title?.value}</h3>
				) : null}
				<div
					className={`${
						structure?.template?.value === 'v2'
							? 'items_wrapper'
							: 'row justify-content-evenly align-items-stretch mx-3'
					}`}
					style={
						structure?.template?.value === 'v2'
							? width > 1200
								? {
										gridTemplateColumns: `repeat(${structure?.list?.value.length},1fr)`
								  }
								: width > 575
								? {
										gridTemplateColumns: `repeat(2,1fr)`
								  }
								: {
										gridTemplateColumns: `repeat(1,1fr)`
								  }
							: null
					}>
					{structure?.list?.value.map((item, index) => (
						<ExtendedWarrantyFeatureBlocksItem
							key={index}
							image={item?.image}
							link={item?.link}
							text={item?.text?.value}
							bgColor={structure?.backgroundColor?.value}
							template={structure?.template?.value}
							col={
								width > 1200
									? `${index + 1}/${index + 2}`
									: width > 575
									? structure?.list?.value[index + 1]
										? index % 2 === 0
											? '1/2'
											: '2/3'
										: '1/3'
									: '1/2'
							}
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
