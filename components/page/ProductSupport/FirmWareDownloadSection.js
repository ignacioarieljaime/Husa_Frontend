import DownloadIconV2 from 'components/icons/DownloadIconV2'
import { useWindowSize } from 'hooks/useWindowSize'
import React, { useEffect, useState } from 'react'
import FirmWareDownloadSectionResponsiveItem from './FirmWareDownloadSectionResponsiveItem'
import BlackInfoIcon from 'components/icons/BlackInfoIcon'
import AdobeAcrobat from 'components/icons/AdobeAcrobat'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'

const FirmWareDownloadSection = ({ data, pim }) => {
	let { structure } = data
	const [firmwareData, setFirmwareData] = useState(null)
	const [content, setContent] = useState(null)
	const windowSize = useWindowSize()
	const router = useRouter()
	const ref = useRef()
	useEffect(() => {
		if (router?.query?.model && typeof router?.query?.model === 'string')
			setFirmwareData(JSON.parse(router?.query?.model))
		setContent(structure)
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
	}, [])

	return (
		<section ref={ref} id={data?.name + data?.id}>
			<div className='downloads_section firmware'>
				<div className='text_box'>
					<h4
						className='title'
						dangerouslySetInnerHTML={{
							__html: `<p>` + pim?.model + ` Firmware & Software</p>`
						}}></h4>
					<div
						className='subtitle'
						dangerouslySetInnerHTML={{
							__html: `<p>Find the latest firmware and software for your Hisense product.</p>`
						}}></div>
				</div>
				<div className='boxes'>
					<div className='info_box'>
						<BlackInfoIcon />
						<div
							className='description'
							dangerouslySetInnerHTML={{
								__html: `<p>Please confirm your serial number before downloading the firmware. The wrong firmware may cause damage to your television. Hisense USA Corporation and its affiliates expressly disclaim and are not responsible for any special, consequential, incidental, or punitive damages arising out of, as a result of, or related to your action of downloading the firmware.</p>`
							}}></div>
					</div>
					<div className='guide_box'>
						<h6 className='title'>Firmware & Software How-to Guide</h6>
						{firmwareData &&
							firmwareData.length &&
							firmwareData.find(item => item.type === 'instruction')
								?.download_link && (
								<Link
									href={
										firmwareData.find(item => item.type === 'instruction')
											.download_link
									}>
									<a className='n-btn outline-white bg-transparent'>
										Download Instructions
										<div>
											<AdobeAcrobat color='#fff' />
											<span className='ms-3'>
												<DownloadIconV2 color='#fff' />
											</span>
										</div>
									</a>
								</Link>
							)}
					</div>
					<div className='table_wrapper'>
						<div className='files_table'>
							{windowSize[0] >= 768 ? (
								<>
									<div className='table_row'>
										<div>Type</div>
										<div>Version</div>
										<div>Downlaod</div>
									</div>
									{firmwareData &&
										firmwareData.length &&
										firmwareData.map(
											(item, index) =>
												item.type === 'firmware' && (
													<div key={index} className='table_row'>
														<div
															className='file_type'
															style={
																item.type && {
																	backgroundColor:
																		item.type === 'firmware'
																			? '#76BECC'
																			: '#F05B71'
																}
															}>
															{item.type ? (
																<>
																	<span>{item.type}</span>
																</>
															) : (
																'-'
															)}
														</div>
														<div className='size'>
															{item?.title.split('_').pop()}
														</div>
														<div>
															{item.download_link ? (
																<a href={item.download_link} download={true}>
																	<DownloadIconV2 color='#00AAA6' />
																</a>
															) : null}
														</div>
													</div>
												)
										)}
								</>
							) : (
								<>
									<div className='table_row button_row'>
										<div>Type</div>
										<div>Version</div>
									</div>
									{firmwareData &&
										firmwareData.length &&
										firmwareData.map(
											(item, index) =>
												item.type === 'firmware' && (
													<FirmWareDownloadSectionResponsiveItem
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
			</div>
		</section>
	)
}

export default FirmWareDownloadSection
