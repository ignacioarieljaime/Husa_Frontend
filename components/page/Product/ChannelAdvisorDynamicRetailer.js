import axios from 'axios'
import CustomImage from 'components/common/CustomImage'
import Spinner from 'components/common/Spinner'
import GoToPageIcon from 'components/icons/GoToPageIcon'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ChannelAdvisorLocally from './ChannelAdvisorLocally'

const ChannelAdvisorDynamicRetailer = ({ model, condition }) => {
	const [data, setData] = useState('loading')
	const [isLocally, setIsLocally] = useState(false)
	useEffect(() => {
		console.log(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY);
		if (condition) {
			getChannelAdvisorData()
		}
	}, [condition])

	const getChannelAdvisorData = async () => {
		setData('loading')
		try {
			let response = await axios(
				`https://productcatalog.channeladvisor.com/api/v1/offers/models/${model}?maxLocationsPerRetailer=25&maxResultsPerRetailer=25&IncludeVariations=true&tag=Hisense%20US%20EN%20Widget`,
				{
					headers: {
						Authorization:
							'api-key ' + process.env.NEXT_PUBLIC_CHANNEL_ADVISOR_TOKEN
					}
				}
			)
			setData(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='custom_channel_advisor'>
			{data === 'loading' ? (
				<Spinner />
			) : (
				<>
					<div className='row justify-content-start align-items-center mb-2 mx-0 flex-nowrap'>
						<div className='col-3'>
							<CustomImage
								src={data?.ProductImage}
								alt={data?.Description}
								wrapperWidth={'100%'}
								wrapperHeight={'100px'}
							/>
						</div>
						<div className='col-9'>
							<p className='model'>Hisense {data?.ModelName}</p>
							<p className='title'>{data?.Description}</p>
						</div>
					</div>
					<div className='link_box mt-5 mb-5'>
						<h5>Hisense Authorized Dealers</h5>
						<Link href={'/authorized-retailers'}>
							<a>
								Why Buy from an Authorized Dealer? <GoToPageIcon />
							</a>
						</Link>
					</div>

					<div className='black_box'>
						<div
							style={{
								width: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
									? '50%'
									: '100%'
							}}
							className={`white_box ${!isLocally && 'active'}`}>
							<button onClick={() => setIsLocally(false)}>BUY ONLINE</button>
						</div>
						{process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY && (
							<div className={`white_box ${isLocally && 'active'}`}>
								<button onClick={() => setIsLocally(true)}>FIND LOCALLY</button>
							</div>
						)}
					</div>
					{isLocally ? (
						<ChannelAdvisorLocally model={model} />
					) : (
						<div>
							{data?.OnlineRetailers && data?.OnlineRetailers.length > 0 ? (
								data?.OnlineRetailers.map((item, index) => (
									<div
										key={index}
										className='d-flex justify-content-between align-items-center my-4 mx-4 py-4 divider_bottom'>
										<CustomImage src={item?.LogoUrl} wrapperWidth={'100px'} />
										<div>
											<div className='check'>Check Retailer</div>
											<div className='status'>Available</div>
										</div>
										<Link
											target={'_blank'}
											href={item?.ProductLink ? item?.ProductLink : '/'}>
											<a className='buy_now'>Buy Now</a>
										</Link>
									</div>
								))
							) : (
								<p className='no_retailer'>Check Back Soon for Availability.</p>
							)}
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default ChannelAdvisorDynamicRetailer
