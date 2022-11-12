import Link from 'next/link'
import React from 'react'

const TelevisionsTvHero = ({ data: { structure } }) => {
	structure = {
		image: {
			src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/458eb01487/Soundbar-Main__ScaleMaxWidthWzMwNDhd.jpg-wlpjvr.jpg',
			alt: 'Hero'
		},
		title: {
			value: '<h2>2023 Lineup is here.</h2>'
		},
		subtitle: {
			value: '<h4>MINI-LED.  Bigger sizes.  More platforms.</h4>'
		},
		link: {
			value: '/',
			title: 'Shop the lineup'
		}
	}
	return (
		<section>
			<div className='televisions-tv-hero'>
				<div className='container'>
					<div className='content'>
						<div
							className='title mb-3 mb-md-7'
							dangerouslySetInnerHTML={{
								__html: structure?.title?.value
							}}></div>
						<div
							className='subtitle mb-3 mb-md-7'
							dangerouslySetInnerHTML={{
								__html: structure?.subtitle?.value
							}}></div>
					</div>
					<div className='row justify-content-center align-items-center'>
						{/* {structure?.list?.value.map((item, index) => (
							<TelevisionsTvHero
						))} */}
					</div>
					{structure?.link?.value ? (
						<Link href={structure?.link?.value}>
							<a className='n-btn outline-white transparent d-block w-fit'>
								{structure?.link?.title}
							</a>
						</Link>
					) : null}
				</div>
			</div>
		</section>
	)
}

export default TelevisionsTvHero
