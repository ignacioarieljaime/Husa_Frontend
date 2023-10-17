import React, { useState } from 'react'
import { useEffect } from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useRef } from 'react'
import { useRouter } from 'next/router'

const AboutUsMembersList = ({ data }) => {
	const [content, setContent] = useState(null)
	// const splideRef = useRef()
	const router = useRouter()

	useEffect(() => {
		setContent(data?.structure)
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
				{(content?.title?.value || content?.text?.value) && (
					<div className='content'>
						{content?.title?.value && (
							<h3
								className='title'
								dangerouslySetInnerHTML={{
									__html: content?.title?.value
								}}></h3>
						)}
						{content?.text?.value && (
							<div
								className='text'
								dangerouslySetInnerHTML={{
									__html: content?.text?.value
								}}></div>
						)}
					</div>
				)}
				<div className='members'>
					{content?.list?.value.map((_item, index) => (
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
					{content?.list?.value.map((_item, index) => (
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
