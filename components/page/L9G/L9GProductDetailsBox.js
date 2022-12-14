import { useWindowSize } from 'hooks/useWindowSize'
import React, { useEffect, useRef, useState } from 'react'

function L9GProductDetailsBox({ pim, data }) {
	const [showMore, setShowMore] = useState(false)
	const spaceContainer = useRef()
	const windowSize = useWindowSize()

	useEffect(() => {
		if (showMore) {
			spaceContainer.current.style.maxHeight =
				spaceContainer.current.scrollHeight + 'px'
		} else {
			spaceContainer.current.style.maxHeight = '0px'
		}
	}, [showMore, windowSize])

	// useEffect(() => {
	// 	if (window.location.hash === `#${data?.name + data?.id}`) {
	// 		setShowMore(true)
	// 	}
	// }, [window.location.hash])

	return (
		<div
			id={data?.name + data?.id}
			className={`l9g-specs-table black-banner ${!showMore && 'close'}`}>
			<h2 className='main-title mb-5'>{data?.structure?.title?.value}</h2>
			<div className='text-center '>
				<button
					className='btn btn-outline-light rounded-5 specs-btn'
					onClick={() => setShowMore(!showMore)}>
					<span className='d-block '>
						{showMore ? '	Hide Specs' : '		Full  Specs'}
						<i
							className={`fa-solid fa-2xs ${
								showMore ? 'fa-chevron-up' : 'fa-chevron-down'
							}`}></i>
					</span>
				</button>
			</div>
			<div ref={spaceContainer} className='specs-container'>
				<h3 className='title'>
					{pim?.name}
					{pim?.model ? ' | ' + pim?.model : ''}
				</h3>
				<div className='specs-table'>
					{pim?.properties.map((item, index) => (
						<div className='spec-block' key={index}>
							<h5 className='block-title'>{item.title}</h5>
							{item.items.map((item, childIndex) => (
								<div key={childIndex} className='block-content'>
									<dl>
										<dt>
											<span>{item.title}</span>
										</dt>
										<dd>
											<span>{item.value}</span>
										</dd>
									</dl>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default L9GProductDetailsBox
