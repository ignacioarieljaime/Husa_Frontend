import React, { useEffect, useState } from 'react'

function AuthorizedRetailersFeatures({ data }) {
	let { structure } = data
	const [list, setList] = useState([])
	useEffect(() => {
		setList(structure?.list?.value)
	}, [])
	return (
		<section>
			<div className='container'>
				<div className='grid-container'>
					{list.map((item, index) => (
						<div key={'retailer-feature-' + index} className='grid-item'>
							<img src={item?.image?.src} alt={item?.image?.alt} width='100%' />
							<div
								dangerouslySetInnerHTML={{ __html: item?.text?.value }}></div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default AuthorizedRetailersFeatures
