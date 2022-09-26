import React from 'react'

// image
import Image from './../../../../public/assets/images/4k-uled/one-billione-colors-block.jpg'

function ULEDImageAndTextItem() {
	return (
		<div class='row description-blocks bg-black align-items-center'>
			<article class='introduction text-white col-12 col-md-6 order-2 order-md-1'>
				<h4>QUANTUM DOT COLOR</h4>
				<h2>
					Over one
					<br />
					billion colors
				</h2>
				<p>
					See over one billion shades. Quantum Dot produces purer, richer, more
					brilliant and accurate colors than a regular LCD TV. We could get into
					how it works. But it’s a lot easier to say it makes every day look
					like the 4th of July.
				</p>
			</article>
			<img
				src={Image.src}
				alt='tv platforms'
				class='p-0 col-12 col-md-6 order-1 order-md-2'
			/>
		</div>
	)
}

export default ULEDImageAndTextItem
