import { useWindowSize } from 'hooks/useWindowSize'
import React, { useEffect, useState } from 'react'

const Retailers = ({ pim, data: { structure } }) => {
	const windowSize = useWindowSize()
	const [items, setItems] = useState(3)

	// useEffect(() => {
	// 	let temp = pim?.retailers.filter(item => {
	// 		if (item?.id) return item
	// 	})
	// 	if (temp % items !== 0) {
	// 		let count = items - (temp % items)
	// 		for (let i = 0; i < count; i++) {
	// 			pim?.retailers.push({})
	// 		}
	// 	}
	// 	pim = { ...pim, retailers: temp }
	// }, [items])

	// useEffect(() => {
	// 	if (windowSize[0] > 991) setItems(3)
	// 	else if (windowSize[0] <= 991 && windowSize[0] > 575) setItems(2)
	// 	else setItems(1)
	// 	console.log(items)
	// }, [windowSize])

	return (
		<section>
			<div className='py-9 py-md-15 px-6 '>
				<div className='text-center'>
					<h2 className='my-8 fs-2tx'>{structure?.title?.value}</h2>
					<p className='mb-9 fs-4'>{structure?.subtitle?.value}</p>
				</div>
				<div className='grid-container' style={{ backgroundColor: '#dedede' }}>
					{pim?.retailers.map((item, index) => (
						<div
							key={'retailer-' + index}
							className='grid-item d-flex align-items-center justify-content-center'>
							<img
								src={item?.media?.external_url}
								alt={item?.media?.caption}
								width='100%'
								style={{ maxWidth: '250px' }}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Retailers
