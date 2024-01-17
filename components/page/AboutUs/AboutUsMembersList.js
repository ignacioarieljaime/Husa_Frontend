import React, { useState } from 'react'
import { useEffect } from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useRef } from 'react'
import { useRouter } from 'next/router'

const AboutUsMembersList = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// const splideRef = useRef()
	const router = useRouter()

	useEffect(() => {
		// setContent(structure)
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
	}, [])

	// useEffect(() => {
	// 	splideRef.current.splide.Components.Autoplay.play()
	// }, [content])

	return (
		<section>
			<div id={data?.name + data?.id} className='aboutus_members_list'>
				{(structure?.title?.value || structure?.text?.value) && (
					<div className='content'>
						{structure?.title?.value && (
							<h3
								className='title'
								dangerouslySetInnerHTML={{
									__html: structure?.title?.value
								}}></h3>
						)}
						{structure?.text?.value && (
							<div
								className='text'
								dangerouslySetInnerHTML={{
									__html: structure?.text?.value
								}}></div>
						)}
					</div>
				)}
				<div className='members'>
					{structure?.list?.value.map((_item, index) => (
						<div key={index} className='item'>
							<div className='image'>
								<img
									src={_item?.image?.src}
									alt={_item?.image?.alt}
									width={'100%'}
									height={'100%'}
								/>
								<div
									className='image_resp_title'
									dangerouslySetInnerHTML={{
										__html: _item?.title?.value
									}}></div>
							</div>
							<div>
								<div
									className='title'
									dangerouslySetInnerHTML={{
										__html: _item?.title?.value
									}}></div>
								<div
									className='role'
									dangerouslySetInnerHTML={{
										__html: _item?.role?.value
									}}></div>
							</div>
						</div>
					))}
				</div>
				{/* <Splide
					ref={splideRef}
					className='slider'
					options={{
						type: 'loop',
						autoplay: true,
						arrows: false,
						pagination: false,
						clones: 8,
						gap: '32px',
						perPage: 1,
						pauseOnHover: false,
						speed: 3000,
						interval: 1300,
						easing: 'linear'
					}}>
					{structure?.list?.value.map((_item, index) => (
						<SplideSlide key={index} className='w-fit'>
							<div className='item'>
								<img
									src={_item?.image?.src}
									alt={_item?.image?.alt}
									className='image'
								/>
								<div>
									<div
										className='title'
										dangerouslySetInnerHTML={{
											__html: _item?.title?.value
										}}></div>
									<div
										className='role'
										dangerouslySetInnerHTML={{
											__html: _item?.role?.value
										}}></div>
								</div>
							</div>
						</SplideSlide>
					))}
				</Splide> */}
			</div>
		</section>
	)
}

export default AboutUsMembersList
