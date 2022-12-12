import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'hooks/useWindowSize'
import CustomImage from 'components/common/CustomImage'

const Retailers = ({ pim, data: { structure } }) => {
	const windowSize = useWindowSize()
	const [items, setItems] = useState([])

	const itemsLengthHandler = _cols => {
		let temp = items.filter(item => {
			if (item?.id) return item
		})
		if (temp.length % _cols !== 0) {
			let count = _cols - (temp.length % _cols)
			for (let i = 0; i < count; i++) {
				temp.push({})
			}
		}
		setItems(temp)
	}

	useEffect(() => {
		if (windowSize[0] > 991) itemsLengthHandler(3)
		else if (windowSize[0] <= 991 && windowSize[0] > 575) itemsLengthHandler(2)
		else itemsLengthHandler(1)
	}, [windowSize[0]])

	useEffect(() => {
		if (pim?.retailers) setItems(pim?.retailers)
	}, [])

	return (
		<section>
			<div className='py-9 py-md-15 px-6 '>
				<div className='text-center'>
					<h2 className='my-8 fs-2tx'>{structure?.title?.value}</h2>
					<p className='mb-9 fs-4'>{structure?.subtitle?.value}</p>
				</div>
				<div className='grid-container' style={{ backgroundColor: '#dedede' }}>
					{items.map((item, index) => (
						<div
							key={'retailer-' + index}
							className='grid-item d-flex retailers_item align-items-center justify-content-center'>
							<CustomImage
								src={item?.media?.external_url}
								alt={item?.media?.caption}
								wrapperWidth='100%'
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
