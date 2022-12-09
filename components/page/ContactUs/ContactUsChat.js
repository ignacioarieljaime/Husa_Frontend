import Link from 'next/link'
import React from 'react'

function ContactUsChat({ data }) {
	let { structure } = data
	return (
		<section className='contact_us_chat '>
			<div className='container'>
				<div className='contact_us_chat_content'>
					<div>
						<h5 className='mb-15 text-center text-md-start'>
							{structure?.title?.value}
						</h5>
						<h6>{structure?.subtitle?.value}</h6>
					</div>
					<Link href={structure?.link?.value ? structure?.link?.value : '/'}>
						<a className='btn btn-outline-dark fw-bold rounded-5 py-3 px-4'>
							{structure?.link?.title}
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default ContactUsChat
