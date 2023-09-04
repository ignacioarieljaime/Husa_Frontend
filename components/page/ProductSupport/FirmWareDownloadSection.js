import DownloadIconV2 from 'components/icons/DownloadIconV2'
import { useWindowSize } from 'hooks/useWindowSize'
import React, { useEffect, useState } from 'react'
import FirmWareDownloadSectionResponsiveItem from './FirmWareDownloadSectionResponsiveItem'
import BlackInfoIcon from 'components/icons/BlackInfoIcon'
import AdobeAcrobat from 'components/icons/AdobeAcrobat'
import Link from 'next/link'
import { useRouter } from 'next/router'

const FirmWareDownloadSection = ({ data, pim }) => {
	let { structure } = data
	const [firmwareData, setFirmwareData] = useState(null)
	const [content, setContent] = useState(null)
	const windowSize = useWindowSize()
	const router = useRouter()
	useEffect(() => {
		if (router?.query?.model && typeof router?.query?.model === 'string')
			setFirmwareData(JSON.parse(router?.query?.model))
		setContent(structure)
	}, [])
	return (
		<section>
			<div className='downloads_section firmware'>
				<div className='text_box'>
					<h4
						className='title'
						dangerouslySetInnerHTML={{
							__html: `<p>` + pim?.name + ` Firmware & Software</p>`
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
						<Link
							target={structure?.list?.value[0]?.link?.target || '_self'}
							href={structure?.list?.value[0]?.link?.value || '/'}>
							<a
								className='n-btn outline-white bg-transparent'
								target={structure?.list?.value[0]?.link?.target || '_self'}>
								Download Instructions
								<div>
									<AdobeAcrobat color='#fff' />
									<span className='ms-3'>
										<DownloadIconV2 color='#fff' />
									</span>
								</div>
							</a>
						</Link>
					</div>
					<div className='table_wrapper'>
						<div className='files_table'>
							{windowSize[0] >= 768 ? (
								<>
									<div className='table_row'>
										<div>Type</div>
										<div>Description</div>
										<div>Version</div>
										<div>Released</div>
										<div>Downlaod</div>
									</div>
									{firmwareData &&
										firmwareData.length &&
										firmwareData.map((item, index) => (
											<div key={index} className='table_row'>
												<div
													className='file_type'
													style={
														item.type && {
															backgroundColor:
																item.type === 'firmware' ? '#76BECC' : '#F05B71'
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
													Fixes an issue where Apps would display incorrectly.
													<br />
													Recommended for all users.
												</div>
												<div className='size'>U8H-v3.0</div>
												<div className='size'>5/5/2023</div>
												<div>
													{item.download_link ? (
														<a href={item.download_link} download={true}>
															<DownloadIconV2 color='#00AAA6' />
														</a>
													) : null}
												</div>
											</div>
										))}
								</>
							) : (
								<>
									<div className='table_row button_row'>
										<div>Type</div>
										<div>Version</div>
									</div>
									{firmwareData &&
										firmwareData.length &&
										firmwareData.map((item, index) => (
											<FirmWareDownloadSectionResponsiveItem
												key={index}
												data={item}
												windowSize={windowSize}
											/>
										))}
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
