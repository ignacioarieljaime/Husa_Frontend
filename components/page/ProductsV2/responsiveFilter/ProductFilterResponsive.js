import ResponsiveFilterIcon from 'components/icons/ResponsiveFilterIcon'
import React from 'react'

const ProductFilterResponsive = ({ selectedFilter, allFilters }) => {
	console.log(allFilters)
	return (
		<div>
			<div>
				<button>
					All Filters <ResponsiveFilterIcon />
				</button>
				<button>Clear Filter (0)</button>
			</div>
			<ul>
				{allFilters?.map(filter => (
					<li>
						<button>{filter?.name}</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProductFilterResponsive
