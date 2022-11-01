import Link from 'next/link'
import React from 'react'

function HomeApplianceTextBoxWithImage() {
	return (
		<div className='row bg-black align-items-center home_appliance_text_box_with_image'>
			<div className='text_box col-7 text-white '>
				<h3 className='mb-7'>
					It's Cold
					<span className='text-primary ms-2'>Inside</span>
				</h3>
				<p>
					Keep things cool and fresh with Hisense. Our fridges and freezers are
					available in an assortment of capacities and designs. And for the
					entertainer or wine connoisseur, we also have wine coolers to chill
					your collection to perfection. Find the perfect product for your
					needs.
				</p>
				<Link href='/sss'>
					<a className='btn btn-outline-light rounded-5 px-8 mt-12'>SHOP NOW</a>
				</Link>
			</div>
			<img height={576} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vD36qJsInLtK1kHtazl8T3Z8UX5tnCN7YW8gbEt2HA&s' alt='' className='col-5 p-0' />
		</div>
	)
}

export default HomeApplianceTextBoxWithImage
