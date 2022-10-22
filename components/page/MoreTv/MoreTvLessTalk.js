import React from 'react'

// image
import HeaderTv from 'public/assets/images/more-tv/header-television.png'
import halfTv from 'public/assets/images/more-tv/half-tv.png'
import Quantum from 'public/assets/images/more-tv/quantum-item.png'
import Dolby from 'public/assets/images/more-tv/dolby-item.png'
import GoogleTv from 'public/assets/images/more-tv/google-tv-item.png'
import FullArray from 'public/assets/images/more-tv/full-array-item.png'
import VariableMotion from 'public/assets/images/more-tv/variable-motion-item.png'

import MoreTVLessTalkItem from './MoreTVLessTalkItem'

function MoreTVLessTalk({ data }) {
	const { structure } = data
	return (
		<section>
			<div className='container-fluid my-20 pt-md-20 overflow-hidden'>
				<div className='row'>
					<div className='col-12 col-md-6 mb-8'>
						<h4 className='fs-4hx fw-normal mb-16'>{structure.title.value}</h4>
						<h5 className='fs-2 fw-normal'>{structure.littleTitle.value}</h5>
					</div>
					<div className='col-12 col-md-6 mb-15 mb-md-0 position-relative'>
						<img
							src={structure.image.src}
							alt={structure.image.alt}
							className='d-block d-md-none w-100'
						/>
						<img
							src={structure.imageFull.src}
							alt={structure.imageFull.alt}
							className='big-tv-more-tv d-none d-md-block'
						/>
					</div>
					<div className='col-12 col-md-7 col-xl-6'>
						{structure.list.value.map((item, index) => (
							<MoreTVLessTalkItem
								key={index}
								image={item.image}
								title={item.description.value}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoreTVLessTalk
