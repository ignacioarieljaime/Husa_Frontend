import React from 'react'
import FeatureBlocksItem from './FeatureBlocksItem'

const FeatureBlocks = () => {
	return (
		<section className='l9g'>
			<div className='feature-blocks'>
				<FeatureBlocksItem
					title='Smart Home Ready'
					description='Buit-in Wi-Fi, Bluetooth, Google Assistant, Works with Alexa, and Control4 compatible, the L9G integrates with your smart home ecosystem, so you can create automations to your heart’s content.'
					videoSrc='https://player.vimeo.com/external/586455519.hd.mp4?s=6ca1796bf87c10a1f940258500a7e3e368378378&profile_id=175'
				/>
				<FeatureBlocksItem
					title='Filmmaker Mode'
					description='Like auto-tune for picture calibration, Filmmaker Mode automatically adjusts picture settings to get content looking the way the movie-makers intended.'
					videoSrc='https://player.vimeo.com/external/585449341.hd.mp4?s=496d2bcdb9653648553e80218bb72d867dd7e3a4&profile_id=175'
				/>
				<FeatureBlocksItem
					title='Game Mode'
					description="Fulfill that childhood dream of gaming on a massive movie screen. Hook up your gaming console or PC and get smooth motion and a beautiful picture, at a scale that'll make you smile. Laser TV is fun for solo play and even better with split-screen multiplayer."
					videoSrc='https://player.vimeo.com/external/586431710.hd.mp4?s=5d9d6321b869a481f3ff6d77262aa840a84ca38d&profile_id=175'
				/>
			</div>
		</section>
	)
}

export default FeatureBlocks
