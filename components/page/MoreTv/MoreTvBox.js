import React from 'react'
import MoreTVItem from './MoreTvItem'

function MoreTVBox({ data }) {
	const { structure } = data
	return (
		<section>
			<div className='container-fluid py-6'>
				<div className='row'>
					{structure?.list?.value?.map((item, index) => {
						return (
							<MoreTVItem
								comingSoon={item?.comingSoon?.value}
								key={index}
								image={item?.image}
								title={item?.title?.value}
								model={item?.model?.value}
								description={item?.description?.value}
								link={item?.link}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default MoreTVBox
