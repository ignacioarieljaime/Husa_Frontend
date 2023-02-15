import CustomImage from 'components/common/CustomImage'
import React from 'react'

const LaserTvInstallationIntro = ({ data }) => {
	const { structure } = data

	return (
		<section>
			<div className='laser_installation_intro'>
				<div className='background'>
					<CustomImage
						src={structure?.backgroundImage?.src}
						alt={structure?.backgroundImage?.alt}
						wrapperWidth={'100%'}
						wrapperHeight={'100%'}
					/>
				</div>
				<div className='content'>
					<CustomImage
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						WrapperMaxWidth={'120px'}
						wrapperWidth={'100%'}
						className='mx-auto'
					/>
					<h1 className='title'>{structure?.title?.value}</h1>
				</div>
			</div>
		</section>
	)
}

export default LaserTvInstallationIntro
