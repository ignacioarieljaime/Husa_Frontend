import AdobeAcrobat from 'components/icons/AdobeAcrobat'
import DownloadIconV2 from 'components/icons/DownloadIconV2'
import { useWindowSize } from 'hooks/useWindowSize'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import DownloadSectionResponsiveItem from './DownloadSectionResponsiveItem'
import Link from 'next/link'

const DownloadsSection = ({ data, pim }) => {
	let { structure } = data
	const [content, setContent] = useState(null)
	const windowSize = useWindowSize()
	useEffect(() => {
		setContent(structure)
	}, [])
	return (
		<section id={data?.name + data?.id}>
			<div className='downloads_section'>
				<div className='text_box'>
					<h4
						className='title'
						dangerouslySetInnerHTML={{
							__html: `<p>` + pim?.name + ` Downloads</p>`
						}}></h4>
					<div
						className='subtitle'
						dangerouslySetInnerHTML={{
							__html: `<p>Find documentation for your Hisense product below.</p>`
						}}></div>
					<div className='description'>
						<p>
							The latest firmware and software is available{' '}
							{content?.link?.value && (
								<Link
									target={
										content?.link?.target ? content?.link?.target : '_self'
									}
									href={content?.link?.value}>
									<a
										target={
											content?.link?.target ? content?.link?.target : '_self'
										}
										className='fw-light'>
										{content?.link?.title}
									</a>
								</Link>
							)}
							.
						</p>
					</div>
				</div>
				<div className='table_wrapper'>
					<div className='files_table'>
						{windowSize[0] >= 768 ? (
							<>
								<div className='table_row'>
									<div>Document</div>
									<div>Size</div>
									<div>File Type</div>
									<div>Downlaod</div>
								</div>
								{pim?.assets.map(
									(item, index) =>
										item.type_id === 3 && (
											<div key={index} className='table_row'>
												<div className='file_title'>
													{item.caption ? item.caption : item.title}
												</div>
												<div className='size'>22 KB</div>
												<div className='file_type'>
													{item.type_id === 3 ? (
														<>
															<span>PDF</span>
															<AdobeAcrobat color='#fff' />
														</>
													) : (
														'-'
													)}
												</div>
												<div>
													{item.url ? (
														item.caption === 'Installation Request' ? (
															<Link
																target='_self'
																href={
																	'/televisions/laser-tv/installation-request'
																}>
																<a>
																	<DownloadIconV2 color='#00AAA6' />
																</a>
															</Link>
														) : (
															<a href={item.url} download={true}>
																<DownloadIconV2 color='#00AAA6' />
															</a>
														)
													) : null}
												</div>
											</div>
										)
								)}
							</>
						) : (
							<>
								<div className='table_row'>
									<div>Name</div>
								</div>
								{pim?.assets.map(
									(item, index) =>
										item.type_id === 3 && (
											<DownloadSectionResponsiveItem
												key={index}
												data={item}
												openStatus={index === 0}
												windowSize={windowSize}
											/>
										)
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default DownloadsSection
