import React from 'react'

function SmartInfoInteractBox({ data }) {
	let { structure } = data
	return (
		<section>
			<div className='m-4 m-md-9'>
				<div style={{ height: '766px' }} className='iframe-container'>
					<iframe
						src={structure?.iframeLink?.value}
						width='100%'
						height='100%'></iframe>
				</div>
			</div>
		</section>
	)
}

export default SmartInfoInteractBox
