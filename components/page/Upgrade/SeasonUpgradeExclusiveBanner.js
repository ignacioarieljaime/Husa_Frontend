import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgradeExclusiveBanner = ({ data }) => {
	const [content, setContent] = useState(null)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div
				id={data?.name + data?.id}
				style={{
					backgroundImage: `url(${`https://files.hisense-usa.com/storage/hisense/asset/images/664b819600be5e.webp`})`
				}}
				className='season_upgrade_exclusive_banner'>
				<div className='content'>
					<img
						src='https://files.hisense-usa.com/storage/hisense/asset/images/663d94b1fd4200.webp'
						alt='featured'
						className='image'
					/>
					<p className='pretitle'>upgrade season exclusive</p>
					<h3 className='title'>ENTER TO WIN A TRIP TO NBA ALL-STAR 2024*</h3>
					<p className='text'>
						Buy an eligible Hisense product for chance to win a trip for 2 to
						NBA All-Star 2024 in Indiana, among other awesome prizes.
					</p>
					<Link href={'/'}>
						<a className='n-btn large danger-upgrade full_btn_md'>
							How to Enter
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default SeasonUpgradeExclusiveBanner
