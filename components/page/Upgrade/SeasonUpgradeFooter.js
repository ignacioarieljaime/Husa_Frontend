import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgradeFooter = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section>
			<div
				id={data?.name + data?.id}
				className='season_upgrade_footer'
				style={{
					backgroundColor: structure?.backgroundColor?.value?.hex
						? structure?.backgroundColor?.value?.hex
						: structure?.backgroundColor?.value
				}}>
				<img src={structure?.image?.src} alt={structure?.image?.alt} />
			</div>
		</section>
	)
}

export default SeasonUpgradeFooter
