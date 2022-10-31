import Link from 'next/link'
import React from 'react'

function HomeApplianceFeaturesItem() {
	return (
		<div className='home_appliance_features_item'>
			<Link href={'/'}>
				<a>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vD36qJsInLtK1kHtazl8T3Z8UX5tnCN7YW8gbEt2HA&s'
						alt=''
					/>
				</a>
			</Link>
			<div className='item_text_box'>
				<h5>
					<Link href={'/'}>
						<a>Flexible Storage</a>
					</Link>
				</h5>
				<h6>FULLY ADJUSTABLE SHELVES</h6>

				<p>
					Enjoy the storage options that the fully adjustable* shelves offer to
					keep your items organized. Raise the shelf to different shelf-holders
					to fit larger bottles, jugs or tall layer cakes. Whatever your food
					storage needs are, our flexible shelving options can help personalize
					your refrigerator based on your preference.
				</p>
			</div>
		</div>
	)
}

export default HomeApplianceFeaturesItem
