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
	backgroundColor
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


	const ModuleContentDiv = ({ children }) => {
		return (
			<div
			className={`home-page-mb-discovery-item py-10 px-6 px-md-13 py-md-15`}
			style={{ width: width + '%', backgroundColor: backgroundColor }}
			>
				{children}
			</div>
		);
	};

	const ModuleContentLink = ({ children }) => {
		return (
			<Link
			href={link?.value} target={link?.target ? link?.target : '_self'}
			>
				<a
					className={`home-page-mb-discovery-item py-10 px-6 px-md-13 py-md-15`}
					style={{ width: width + '%', backgroundColor: backgroundColor }}
					target={link?.target ? link?.target : '_self'}
				>
					{children}
				</a>
			</Link>
		);
	};

	const ModuleInnerContent = () => {
		return (
			<>
				<div className='support-card-img-container'>
					<CustomImage
						wrapperHeight={'64px'}
						src={image?.src}
						alt={image?.alt}
						wrapperClass='mb-7'
					/>
				</div>

				<div
					dangerouslySetInnerHTML={{ __html: text }}
					className={`fs-base mb-9 ${light ? 'light' : ''}`}></div>
				<div className='support-card-spacer' />
				{link?.value && (
					<Link href={link?.value} target={link?.target ? link?.target : '_self'}>
						<a
							target={link?.target ? link?.target : '_self'}
							className='n-btn primary-text support-btn-text'>
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
				{/* {text.includes('Chat') ? (
					<a
						onClick={chatHandler}
						style={{ cursor: 'pointer' }}
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
				) : (
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
				)} */}
			</>
		);
	};

	if (link?.title) {
		return (
			<ModuleContentLink>
				<ModuleInnerContent />
			</ModuleContentLink>
		)
	} else {
		return (
			<ModuleContentDiv>
				<ModuleInnerContent />
			</ModuleContentDiv>
		)
	}
}

export default ExtendedWarrantyFeatureBlocksItem
