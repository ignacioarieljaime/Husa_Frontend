import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgradeFooter = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div
				id={data?.name + data?.id}
				className='season_upgrade_footer'
				style={{
					backgroundColor: content?.backgroundColor?.value?.hex
						? content?.backgroundColor?.value?.hex
						: content?.backgroundColor?.value
				}}>
				<img src={content?.image?.src} alt={content?.image?.alt} />
			</div>
		</section>
	)
}

export default SeasonUpgradeFooter
