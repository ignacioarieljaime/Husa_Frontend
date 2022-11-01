import ExtendedWarrantyBanner from 'components/page/ExtendedWarranty/ExtendedWarrantyBanner'
import ExtendedWarrantyFAQ from 'components/page/ExtendedWarranty/ExtendedWarrantyFAQ'
import ExtendedWarrantyFeatureBlocks from 'components/page/ExtendedWarranty/ExtendedWarrantyFeatureBlocks'
import ExtendedWarrantyProductsSlider from 'components/page/ExtendedWarranty/ExtendedWarrantyProductsSlider'
import ExtendedWarrantyTextBlock from 'components/page/ExtendedWarranty/ExtendedWarrantyTextBlock'
import React from 'react'

const Index = () => {
	return (
		<div>
			<ExtendedWarrantyBanner />
			<ExtendedWarrantyProductsSlider />
			<ExtendedWarrantyTextBlock />
			<ExtendedWarrantyFeatureBlocks />
			<ExtendedWarrantyFAQ />
			<ExtendedWarrantyFeatureBlocks />
		</div>
	)
}

export default Index
