import React, { useEffect, useState } from 'react'
import UHDNewsItem from './UHDNewsItem'

function UHDNewsBox({ data: { structure } }) {
	const [list, setList] = useState([])
	useEffect(() => {
		setList(structure?.list?.value)
	}, [])
	return (
		<section>
			<div className='container-fluid uhd_news_box py-6'>
				<div className='row align-items-start'>
					{list.map((item, index) => (
						<UHDNewsItem count={list?.length} data={item} key={index} />
					))}
				</div>
			</div>
		</section>
	)
}

export default UHDNewsBox
