import React, { useState, useRef, useEffect } from 'react'
import { useWindowSize } from '../../../hooks/useWindowSize'

const Specs = ({ data }) => {
	let { structure } = data
	const [showMore, setShowMore] = useState(false)
	const spaceContainer = useRef()
	const tableGrid = useRef()
	const widthSize = useWindowSize()[0]

	// useEffect(() => {
	// 	if (showMore) {
	// 		spaceContainer.current.style.maxHeight =
	// 			spaceContainer.current.scrollHeight + 'px'
	// 	} else {
	// 		spaceContainer.current.style.maxHeight = '0px'
	// 	}
	// }, [showMore, widthSize])

	return (
		<section className='l9g'>
			<div
				className={`specs specs-l-nine-g px-4 px-md-20 black-banner ${
					!showMore && 'close'
				}`}>
				<h2 className='fs-md-2tx text-white text-center'>
					{structure?.title?.value}
					<span class=' text-primary ms-2'>
						{structure?.coloredTitle?.value}
					</span>
				</h2>
				<p className='text-center specs_title_paragraph '>
				{structure?.greyText?.value}
				</p>
				{/* <div className='text-center py-3'>
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
						100" TriChroma Laser TV - Daylight Screen | 100L9G-DLT100B
					</h3>
					<div className='specs-table' ref={tableGrid}>
						<div className='spec-block'>
							<h5 className='block-title'>Display</h5>
							<div className='block-content'>
								<dl>
									<dt>
										<span>Actual Screen Size (measured diagonally) "</span>
									</dt>
									<dd>
										<span>100"</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Screen type</span>
									</dt>
									<dd>
										<span>Ambient Light Rejection</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Class</span>
									</dt>
									<dd>
										<span>100" class</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Screen Package Dimensions</span>
									</dt>
									<dd>
										<span>96.7” x 59.8” x 8.3”</span>
									</dd>
								</dl>
							</div>
						</div>
						<div className='spec-block'>
							<h5 className='block-title'>Type of TV</h5>
							<div className='block-content'>
								<dl>
									<dt>
										<span>Smart TV</span>
									</dt>
									<dd>
										<span>Yes, Android</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Google Assistant built-in</span>
									</dt>
									<dd>
										<span>Yes</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Works with Alexa</span>
									</dt>
									<dd>
										<span>Yes</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>App Store</span>
									</dt>
									<dd>
										<span>Yes (Google Play App Store)</span>
									</dd>
								</dl>
							</div>
						</div>
						<div className='spec-block'>
							<h5 className='block-title'>Picture Quality</h5>
							<div className='block-content'>
								<dl>
									<dt>
										<span>Screen resolution</span>
									</dt>
									<dd>
										<span>4K</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>4K upscaling</span>
									</dt>
									<dd>
										<span>Yes</span>
									</dd>
								</dl>

								<dl>
									<dt>
										<span>Refresh rate</span>
									</dt>
									<dd>
										<span>60 Hz</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Dynamic contrast</span>
									</dt>
									<dd>
										<span>1,000,000:1</span>
									</dd>
								</dl>
								<dl>
									<dt className='highlight'>
										<span>Brightness Level</span>
									</dt>
									<dd className='highlight'>
										<span>3000 Lumens (Typical for optimal brightness)</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Resolution type</span>
									</dt>
									<dd>
										<span>4K</span>
									</dd>
								</dl>
								<dl>
									<dt className='highlight'>
										<span>HDR-compatible</span>
									</dt>
									<dd className='highlight'>
										<span>Yes, HDR10, HLG</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Color Space</span>
									</dt>
									<dd>
										<span>107% BT.2020</span>
									</dd>
								</dl>
								<dl>
									<dt className='highlight'>
										<span>MEMC</span>
									</dt>
									<dd className='highlight'>
										<span>Yes</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Light source</span>
									</dt>
									<dd>
										<span>Red + Green + Blue Laser</span>
									</dd>
								</dl>
								<dl>
									<dt className='highlight'>
										<span>Light Source Lifetime</span>
									</dt>
									<dd className='highlight'>
										<span>25,000+ hours</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>
											Eye Protection (Laser Auto Turn Off when someone is close
											by)
										</span>
									</dt>
									<dd>
										<span>Yes</span>
									</dd>
								</dl>
								<dl>
									<dt className='highlight'>
										<span>Throw Ratio</span>
									</dt>
									<dd className='highlight'>
										<span>0.25:1</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Chipset</span>
									</dt>
									<dd>
										<span>0.47” DMD</span>
									</dd>
								</dl>
								<dl>
									<dt className='highlight'>
										<span>Viewing Angle</span>
									</dt>
									<dd className='highlight'>
										<span>36°</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>ALR Type</span>
									</dt>
									<dd>
										<span>Fresnel</span>
									</dd>
								</dl>
							</div>
						</div>
						<div className='spec-block'>
							<h5 className='block-title'>Audio</h5>
							<div className='block-content'>
								<dl>
									<dt className='highlight'>
										<span>Audio output power (watts)</span>
									</dt>
									<dd className='highlight'>
										<span>40W (Stereo)</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Audio technologies</span>
									</dt>
									<dd>
										<span>Dolby Atmos, Dolby Digital</span>
									</dd>
								</dl>
							</div>
						</div>
						<div className='spec-block'>
							<h5 className='block-title'>Power</h5>
							<div className='block-content'>
								<dl>
									<dt>
										<span>Power consumption</span>
									</dt>
									<dd>
										<span>320W</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Standby consumption</span>
									</dt>
									<dd>
										<span>&lt;0.5W</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Power supply</span>
									</dt>
									<dd>
										<span>AC 120V, 60Hz</span>
									</dd>
								</dl>
							</div>
						</div>
						<div className='spec-block'>
							<h5 className='block-title'>Connectivity </h5>
							<div className='block-content'>
								<dl>
									<dt>
										<span>Wireless built-in</span>
									</dt>
									<dd>
										<span>Yes, 802.11 a/b/g/n//ac (2x2)</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Ethernet</span>
									</dt>
									<dd>
										<span>Yes</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Bluetooth ®</span>
									</dt>
									<dd>
										<span>Yes</span>
									</dd>
								</dl>
							</div>
						</div>
						<div className='spec-block'>
							<h5 className='block-title'>Ports</h5>
							<div className='block-content'>
								<dl>
									<dt>
										<span>HDMI</span>
									</dt>
									<dd>
										<span>3</span>
									</dd>
								</dl>

								<dl>
									<dt>
										<span>Ethernet (LAN)</span>
									</dt>
									<dd>
										<span>1</span>
									</dd>
								</dl>

								<dl>
									<dt>
										<span>USB</span>
									</dt>
									<dd>
										<span>2</span>
									</dd>
								</dl>

								<dl>
									<dt>
										<span>HDMI ARC</span>
									</dt>
									<dd>
										<span>Yes</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>RF antenna</span>
									</dt>
									<dd>
										<span>1</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Digital audio output</span>
									</dt>
									<dd>
										<span>1 Optical</span>
									</dd>
								</dl>
								<dl>
									<dt className='highlight'>
										<span>Earphone/audio output</span>
									</dt>
									<dd className='highlight'>
										<span>1</span>
									</dd>
								</dl>
							</div>
						</div>
						<div className='spec-block'>
							<h5 className='block-title'>Other Features</h5>
							<div className='block-content'>
								<dl>
									<dt>
										<span>Noise reduction</span>
									</dt>
									<dd>
										<span>Yes</span>
									</dd>
								</dl>
								<dl>
									<dt className='highlight'>
										<span>Parental control</span>
									</dt>
									<dd className='highlight'>
										<span>Yes</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Closed caption</span>
									</dt>
									<dd>
										<span>Yes</span>
									</dd>
								</dl>
								<dl>
									<dt className='highlight'>
										<span>Sleep timer</span>
									</dt>
									<dd className='highlight'>
										<span>Yes</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Warranty</span>
									</dt>
									<dd>
										<span>2-year warranty</span>
									</dd>
								</dl>
								<dl>
									<dt className='highlight'>
										<span>Surround Sound</span>
									</dt>
									<dd className='highlight'>
										<span>Yes</span>
									</dd>
								</dl>
							</div>
						</div>
						<div className='spec-block'>
							<h5 className='block-title'>Accessories</h5>
							<div className='block-content'>
								<dl>
									<dt>
										<span>Remote</span>
									</dt>
									<dd>
										<span>Yes, Voice Remote</span>
									</dd>
								</dl>
								<dl>
									<dt className='highlight'>
										<span>Quick Start Guide and/or User Manual</span>
									</dt>
									<dd className='highlight'>
										<span>
											Quick Start Guide in the box, (User Manual available
											online)
										</span>
									</dd>
								</dl>
								<dl>
									<dt>
										<span>Power Cord</span>
									</dt>
									<dd>
										<span>Yes</span>
									</dd>
								</dl>
								<dl>
									<dt className='highlight'>
										<span>UPC</span>
									</dt>
									<dd className='highlight'>
										<span>888143012933</span>
									</dd>
								</dl>
							</div>
						</div>
						<div className='spec-block'>
							<h5 className='block-title'>Product Dimensions</h5>
							<div className='block-content'>
								<dl>
									<dt>
										<span>Laser TV Console Dimensions</span>
									</dt>
									<dd>
										<span>24" x 6.1" x 13.6"</span>
									</dd>
								</dl>
								<dl>
									<dt className='highlight'>
										<span>Laser TV Console Weight</span>
									</dt>
									<dd className='highlight'>
										<span> 24.7 lbs</span>
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	)
}

export default Specs
