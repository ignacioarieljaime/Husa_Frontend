import React, { useEffect, useRef, useState } from 'react'

function ProductDetailsBox() {
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
						<dt>Product dimension (without stand)</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Product dimension (without stand)'>
							57.1 x 33.1 x 4.1 in
						</dd>
						<dt>Product dimension (with stand)</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Product dimension (with stand)'>
							57.1 x 35.6 x 13.6 in
						</dd>
						<dt>Weight (without stand)</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Weight (without stand)'>
							53.4 lbs
						</dd>
						<dt>Weight (with stand)</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Weight (with stand)'>
							56.0 lbs
						</dd>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Display</h3>
					<dl className='row m-0'>
						<dt>Actual Screen Size (measured diagonally) </dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Actual Screen Size (measured diagonally) "'>
							64.5 in
						</dd>
						<dt>Screen type</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Screen type'>
							LCD
						</dd>

						<dt>Class</dt>
						<dd className='col-6 text-white col-md-3 mb-5' data-label='Class'>
							65 class
						</dd>
						<dt>Screen Shipping Weight</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Screen Shipping Weight'>
							75.2 lbs
						</dd>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Type of TV</h3>
					<dl className='row m-0'>
						<dt>Smart TV</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Smart TV'>
							Yes, Android
						</dd>
						<dt>Web Browser</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Web Browser'>
							Yes
						</dd>
						<dt>Google Assistant built-in</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Google Assistant built-in'>
							Yes
						</dd>
						<dt>Works with Alexa</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Works with Alexa'>
							Yes
						</dd>
						<dt>App Store</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='App Store'>
							Yes (Google Play App Store)
						</dd>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Picture Quality</h3>
					<dl className='row m-0'>
						<dt>Screen resolution</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Screen resolution'>
							4K UHD, 3840x2160p
						</dd>
						<dt>Local dimming</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Local dimming'>
							Yes, 360 Zones
						</dd>
						<dt>4K upscaling</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='4K upscaling'>
							Yes
						</dd>
						<dt>Backlight type</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Backlight type'>
							Full Array
						</dd>
						<dt>Brightness Level</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Brightness Level'>
							up to 1500 Nits peak brightness
						</dd>
						<dt>Wide Color Gamut</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Wide Color Gamut '>
							Yes, Quantum Dot
						</dd>
						<dt>HDR-compatible</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='HDR-compatible'>
							Yes (Dolby Vision/HDR10/HDR10+/HLG)
						</dd>
						<dt>Motion Rate</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Motion Rate'>
							480
						</dd>
						<dt>Display aspect ratio</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Display aspect ratio'>
							16:9
						</dd>
						<dt>MEMC</dt>
						<dd className='col-6 text-white col-md-3 mb-5' data-label='MEMC'>
							Yes
						</dd>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Audio</h3>
					<dl className='row m-0'>
						<dt>Audio output power (watts)</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Audio output power (watts)'>
							10W x 2
						</dd>
						<dt>Audio technologies</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Audio technologies'>
							Dolby Atmos + IMAX Enhanced
						</dd>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Languages</h3>
					<dl className='row m-0'>
						<dt>On-Screen Display</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='On-Screen Display'>
							English/French/Spanish
						</dd>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Power</h3>
					<dl className='row m-0'>
						<dt>Power consumption</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Power consumption'>
							300W
						</dd>
						<dt>Standby consumption</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Standby consumption'>
							&lt;0.5W
						</dd>
						<dt>Power supply</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Power supply'>
							AC 120V, 50/60Hz
						</dd>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Connectivity</h3>
					<dl className='row m-0'>
						<dt>Wireless built-in</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Wireless built-in'>
							Yes (802.11ac 2.4GHz/5GHz)
						</dd>
						<dt>Bluetooth ®</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Bluetooth ®'>
							Yes
						</dd>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Ports</h3>
					<dl className='row m-0'>
						<dt>HDMI</dt>
						<dd className='col-6 text-white col-md-3 mb-5' data-label='HDMI'>
							4 (2 HDMI2.0 + 2 HDMI2.1)
						</dd>
						<dt>Ethernet (LAN)</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Ethernet (LAN)'>
							1
						</dd>
						<dt>USB</dt>
						<dd className='col-6 text-white col-md-3 mb-5' data-label='USB'>
							1 USB2.0 + 1 USB3.0
						</dd>
						<dt>HDMI ARC</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='HDMI ARC'>
							eARC
						</dd>
						<dt>HDMI CEC</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='HDMI CEC'>
							Yes
						</dd>
						<dt>RF antenna</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='RF antenna'>
							1
						</dd>
						<dt>RCA composite video input</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='RCA composite video input'>
							1
						</dd>
						<dt>L/R audio input for composite</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='L/R audio input for composite'>
							1
						</dd>
						<dt>Digital audio output</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Digital audio output'>
							1 Optical
						</dd>
						<dt>Earphone/audio output</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Earphone/audio output'>
							1
						</dd>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Other Features</h3>
					<dl className='row m-0'>
						<dt>Noise reduction</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Noise reduction'>
							Yes
						</dd>
						<dt>Parental control</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Parental control'>
							Yes
						</dd>
						<dt>Closed caption</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Closed caption'>
							Yes
						</dd>
						<dt>Sleep timer</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Sleep timer'>
							Yes
						</dd>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Wall Mount</h3>
					<dl className='row m-0'>
						<dt>Mount Pattern</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Mount Pattern'>
							VESA 400 x 400
						</dd>
						<dt>Wall Mount Screw</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Wall Mount Screw'>
							M6
						</dd>
					</dl>
				</div>
				<div className='discription-list mb-10'>
					<h3 className='text-white'>Accessories</h3>
					<dl className='row m-0'>
						<dt>Remote</dt>
						<dd className='col-6 text-white col-md-3 mb-5' data-label='Remote'>
							Yes, Voice Remote
						</dd>
						<dt>Quick Start Guide and/or User Manual</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Quick Start Guide and/or User Manual'>
							Quick Start Guide in the box, (User Manual available online)
						</dd>
						<dt>Power Cord</dt>
						<dd
							className='col-6 text-white col-md-3 mb-5'
							data-label='Power Cord'>
							Yes
						</dd>
						<dt>UPC</dt>
						<dd className='col-6 text-white col-md-3 mb-5' data-label='UPC'>
							888143010045
						</dd>
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
