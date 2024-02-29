import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CustomImage from '../../common/CustomImage'
import Link from 'next/link'

const ExtendedWarrantyFeatureBlocksItem = ({
	image,
	text,
	link,
	width,
	light,
	bgColor,
	template,
	col
}) => {
	const chatHandler = () => {
		if (document.querySelector('.velaro-custom-launcher-frame iframe')) {
			let iframe = document.querySelector(
				'.velaro-custom-launcher-frame iframe'
			)
			let innerDoc = iframe.contentWindow.document.querySelector(
				'.velaro-custom-launcher'
			)
			innerDoc.click()
		}
	}

	return link?.value ? (
		<Link href={link?.value} target={link?.target ? link?.target : '_self'}>
			<a
				className={`home-page-mb-discovery-item ${
					template === 'v2' ? 'verson_2' : 'py-10 px-6 px-md-13 py-md-15'
				}`}
				style={
					template === 'v2'
						? { gridColumn: col, backgroundColor: bgColor }
						: { width: width + '%' }
				}>
				<div className='content_wrapper'>
					<img
						height={'70px'}
						src={image?.src}
						alt={image?.alt}
						className='mb-7'
					/>
					<div
						dangerouslySetInnerHTML={{ __html: text }}
						className={`fs-base mb-9 ${light ? 'light' : ''}`}></div>
				</div>

				<span className='n-btn primary-text medium'>
					{link?.title}
					{link?.title && (
						<span>
							<FontAwesomeIcon
								icon={faChevronRight}
								size={'sm'}
								className='ms-2'
							/>
						</span>
					)}
				</span>
			</a>
		</Link>
	) : (
		<div
			className={`home-page-mb-discovery-item ${
				template === 'v2' ? 'verson_2' : 'py-10 px-6 px-md-13 py-md-15'
			}`}
			style={
				template === 'v2'
					? { gridColumn: col, backgroundColor: bgColor }
					: { width: width + '%' }
			}>
			<div className='content_wrapper'>
				<img
					height={'70px'}
					src={image?.src}
					alt={image?.alt}
					className='mb-7'
				/>
				<div
					dangerouslySetInnerHTML={{ __html: text }}
					className={`fs-base mb-9 ${light ? 'light' : ''}`}></div>
			</div>
			{link?.value && (
				<Link href={link?.value} target={link?.target ? link?.target : '_self'}>
					<a
						target={link?.target ? link?.target : '_self'}
						className='n-btn primary-text medium'>
						{link?.title}
						{link?.title && (
							<span>
								<FontAwesomeIcon
									icon={faChevronRight}
									size={'sm'}
									className='ms-2'
								/>
							</span>
						)}
					</a>
				</Link>
			)}
		</div>
	)
}

export default ExtendedWarrantyFeatureBlocksItem
