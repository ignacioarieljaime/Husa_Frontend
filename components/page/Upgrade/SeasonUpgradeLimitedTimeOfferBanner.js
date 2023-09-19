import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgradeLimitedTimeOfferBanner = ({ data }) => {
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
				className='season_upgrade_limited_time_banner'>
				<div className='text_content'>
					<p className='pretitle'>Limited time offer</p>
					<h4 className='title'>
						GET NBA 2K24 WITH ELIGIBLE 2023 ULED TV PURCHASE*
					</h4>
					<p className='text'>
						Claim a digital copy of NBA 2K24: BLACK MAMBA EDITION when you buy a
						2023 Hisense U6K, U7K, or U8K ULED TV before Nov 12, 2023 or while
						supplies last.*
					</p>
					<Link href={'/'}>
						<a className='n-btn medium danger-upgrade full_btn_md'>
							Shop Eligible Models
						</a>
					</Link>
				</div>
				<img
					src='https://files.hisense-usa.com/storage/hisense/asset/images/663d94b1fd4200.webp'
					alt='featured'
					className='image'
				/>
			</div>
		</section>
	)
}

export default SeasonUpgradeLimitedTimeOfferBanner
