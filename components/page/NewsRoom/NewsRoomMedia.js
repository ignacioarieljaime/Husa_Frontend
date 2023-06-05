import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React from 'react'

const NewsRoomMedia = ({ data }) => {
	let { structure } = data
	return (
		<div className='news_room_media'>
			<h5>{structure?.title?.value}</h5>

			<div>
				{structure?.list?.value[0] && (
					<div>
						<div style={{ backgroundColor: '#006664' }}>
							<CustomImage
								src={structure?.list?.value[0]?.image?.src}
								wrapperWidth={'100%'}
								wrapperHeight={'244px'}
							/>
							{structure?.list?.value[0]?.title?.value && (
								<span className='text d-flex flex-wrap w-100 justify-content-evenly align-items-center py-3 px-4'>
									<CustomImage
										src={structure?.list?.value[0]?.logo?.src}
										className='col-6 col-lg-5'
										wrapperMaxWidth={'100px'}
									/>
									<span className='col-12 col-lg-6 text-center text-lg-end'>
										{structure?.list?.value[0]?.title?.value}
									</span>
								</span>
							)}
						</div>
						<div>
							<Link
								target={structure?.list?.value[0]?.link?.target || '_self'}
								href={structure?.list?.value[0]?.link?.value || '/'}>
								<a target={structure?.list?.value[0]?.link?.target || '_self'}>
									{structure?.list?.value[0]?.link?.title}
									{structure?.list?.value[0]?.downloadImage?.src && (
										<CustomImage
											src={structure?.list?.value[0]?.downloadImage?.src}
											wrapperWidth={'16px'}
											wrapperHeight={'16px'}
										/>
									)}
								</a>
							</Link>
						</div>
					</div>
				)}

				<div>
					<div>
						<CustomImage
							src={structure?.list?.value[1]?.image?.src}
							wrapperWidth={'100%'}
							wrapperHeight={'244px'}
						/>
						{structure?.list?.value[1]?.title?.value && (
							<span className='text'>
								{structure?.list?.value[1]?.title?.value}
							</span>
						)}
					</div>
					<div>
						<Link
							target={structure?.list?.value[1]?.link?.target || '_self'}
							href={structure?.list?.value[1]?.link?.value || '/'}>
							<a target={structure?.list?.value[1]?.link?.target || '_self'}>
								{structure?.list?.value[1]?.link?.title}
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsRoomMedia
