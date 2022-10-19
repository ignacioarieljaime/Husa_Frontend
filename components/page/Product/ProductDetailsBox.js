import React, { useEffect, useRef, useState } from 'react'
import ProductDetailLstItem from './ProductDetailLstItem'

function ProductDetailsBox({ pim: { data } }) {
	const [showMore, setShowMore] = useState(false)
	const spaceContainer = useRef()

	useEffect(() => {
		if (showMore) {
			spaceContainer.current.style.maxHeight =
				spaceContainer.current.scrollHeight + 'px'
		} else {
			spaceContainer.current.style.maxHeight = '0px'
		}
	}, [showMore])

	return (
		<div className={`specs  black-banner ${!showMore && 'close'}`}>
			<div ref={spaceContainer} className='specs-container'>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Product Dimensions</h3>
					<dl className='row m-0'>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Product dimension (without stand)'
									? item.value
									: null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Product dimension (with stand)'
									? item.value
									: null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Weight (without stand)' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Weight (with stand)' ? item.value : null
							)}
						/>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Display</h3>
					<dl className='row m-0'>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Actual Screen Size (measured diagonally) "'
									? item.value
									: null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Screen type' ? item.value : null
							)}
						/>

						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Class' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Screen Shipping Weight' ? item.value : null
							)}
						/>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Type of TV</h3>
					<dl className='row m-0'>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Smart TV' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Web Browser' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Google Assistant built-in' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Works with Alexa' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'App Store' ? item.value : null
							)}
						/>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Picture Quality</h3>
					<dl className='row m-0'>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Screen resolution' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Local dimming' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === '4K upscaling' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Backlight type' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Brightness Level' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Wide Color Gamut' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'HDR-compatible' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Motion Rate' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Display aspect ratio' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'MEMC' ? item.value : null
							)}
						/>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Audio</h3>
					<dl className='row m-0'>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Audio output power (watts)' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Audio technologies' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Audio technologies' ? item.value : null
							)}
						/>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Languages</h3>
					<dl className='row m-0'>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'On-Screen Display' ? item.value : null
							)}
						/>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Power</h3>
					<dl className='row m-0'>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Power consumption' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Standby consumption' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Power supply' ? item.value : null
							)}
						/>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Connectivity</h3>
					<dl className='row m-0'>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Wireless built-in' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Bluetooth ®' ? item.value : null
							)}
						/>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Ports</h3>
					<dl className='row m-0'>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'HDMI' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Ethernet (LAN)' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'USB' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'HDMI ARC' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'HDMI CEC' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'RF antenna' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'RCA composite video input' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'L/R audio input for composite'
									? item.value
									: null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Digital audio output' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Earphone/audio output' ? item.value : null
							)}
						/>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Other Features</h3>
					<dl className='row m-0'>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Noise reduction' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Parental control' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Closed caption' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Sleep timer' ? item.value : null
							)}
						/>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Wall Mount</h3>
					<dl className='row m-0'>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Mount Pattern' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Wall Mount Screw' ? item.value : null
							)}
						/>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Accessories</h3>
					<dl className='row m-0'>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Remote' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Quick Start Guide and/or User Manual'
									? item.value
									: null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Quick Start Guide and/or User Manual'
									? item.value
									: null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'Power Cord' ? item.value : null
							)}
						/>
						<ProductDetailLstItem
							data={data.properties.find(item =>
								item.title === 'UPC' ? item.value : null
							)}
						/>

					</dl>
				</div>
			</div>
			<div className='text-center py-10'>
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
		</div>
	)
}

export default ProductDetailsBox
