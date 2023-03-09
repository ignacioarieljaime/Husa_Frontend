import Spinner from 'components/common/Spinner'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import LaserInstallationDropDownSelectBox from '../LaserTvInstallation/LaserInstallationDropDownSelectBox'
import LaserInstallationDropDownSelectBoxMulti from '../LaserTvInstallation/LaserInstallationDropDownSelectBoxMulti'
import FlightNightCustomCheckbox from './FlightNightCustomCheckbox'

const familiarity = [
	{ name: 'Very familiar', value: 'Very familiar' },
	{ name: 'Somewhat familiar', value: 'Somewhat familiar' },
	{ name: 'Not familiar', value: 'Not familiar' },
	{ name: 'Unsure', value: 'Unsure' }
]
const nextTv = [
	{ name: 'Very much so', value: 'Very much so' },
	{ name: ' A little more', value: ' A little more' },
	{ name: 'Unsure', value: 'Unsure' },
	{ name: 'Not at all', value: 'Not at all' }
]

const brand = [
	{ name: 'Hisense', value: 'Hisense' },
	{ name: ' LG', value: ' LG' },
	{ name: 'Samsung', value: 'Samsung' },
	{ name: 'Sony', value: 'Sony' },
	{ name: 'TCL', value: 'TCL' },
	{ name: 'Vizio', value: 'Vizio' },
	{ name: 'Other', value: 'Other' }
]
const nextSixMonths = [
	{ name: ' Very likely', value: ' Very likely' },
	{ name: 'Somewhat likely', value: 'Somewhat likely' },
	{ name: 'Unsure', value: 'Unsure' },
	{ name: 'Not at all', value: 'Not at all' }
]

const nextTelevision = [
	{ name: ' Very likely', value: ' Very likely' },
	{ name: 'Somewhat likely', value: 'Somewhat likely' },
	{ name: 'Unsure', value: 'Unsure' },
	{ name: 'Not at all', value: 'Not at all' }
]
const laserTV = [
	{ name: 'Size of picture', value: 'Size of picture' },
	{ name: ' Portability', value: ' Portability' },
	{ name: 'Less strain on the eyes', value: 'Less strain on the eyes' },
	{ name: 'More eco-friendly', value: 'More eco-friendly' }
]

const FlightNightFormHisense = ({ data, onChange, title, loading, errors }) => {
	const [terms, setTerms] = useState(false)
	const [updated, setUpdated] = useState(false)
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(title)
	}, [])
	useEffect(() => {
		if (data.future_news !== updated) {
			setUpdated(data.future_news ? 1 : 0)
		}
	}, [data.future_news])

	return (
		<div className='hisense'>
			<h3 dangerouslySetInnerHTML={{ __html: title }} className='title'></h3>
			<div className='line top'></div>
			<div className='row justify-content-center align-items-center mx-0'>
				<div className='col-12 col-md-6 px-4 pb-8'>
					<div className='form_select_field  position-relative z-6'>
						<label className='label'>
							How familiar with Hisense were you before today?
						</label>
						<LaserInstallationDropDownSelectBox
							options={familiarity}
							// disabledOptions={[{ name: 'Where did you purchase?' }]}
							value={data.how_familiar_hisense}
							placeholder='Choose your answer'
							onChange={value => onChange('how_familiar_hisense', value.value)}
						/>
						{errors?.how_familiar_hisense ? (
							<p
								style={{
									color: 'red',
									position: 'absolute',
									bottom: '-42px',
									left: '0'
								}}
								className='error mt-2'>
								{errors?.how_familiar_hisense}
							</p>
						) : null}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-8'>
					<div className='form_select_field  position-relative z-5'>
						<label className='label'>
							After today, are you more likely to consider Hisense for your next
							TV?
						</label>
						<LaserInstallationDropDownSelectBox
							options={nextTv}
							// disabledOptions={[{ name: 'Where did you purchase?' }]}
							value={data.consider_hisense_tv}
							placeholder='Choose your answer'
							onChange={value => onChange('consider_hisense_tv', value.value)}
						/>{' '}
						{errors?.consider_hisense_tv ? (
							<p
								style={{
									color: 'red',
									position: 'absolute',
									bottom: '-42px',
									left: '0'
								}}
								className='error mt-2'>
								{errors?.consider_hisense_tv}
							</p>
						) : null}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-8'>
					<div className='form_select_field position-relative  z-4'>
						<label className='label'>
							Which TV brands do you currently own at home?
						</label>
						<LaserInstallationDropDownSelectBoxMulti
							options={brand}
							// disabledOptions={[{ name: 'Where did you purchase?' }]}
							value={data.which_brand_own}
							placeholder='Choose your answer'
							onChange={newValue => onChange('which_brand_own', newValue)}
						/>{' '}
						{errors?.which_brand_own ? (
							<p
								style={{
									color: 'red',
									position: 'absolute',
									bottom: '-42px',
									left: '0'
								}}
								className='error mt-2'>
								{errors?.which_brand_own}
							</p>
						) : null}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-8'>
					<div className='form_select_field  position-relative z-3'>
						<label className='label'>
							How likely are you to buy a new TV in the next 6 months?
						</label>
						<LaserInstallationDropDownSelectBox
							options={nextSixMonths}
							// disabledOptions={[{ name: 'Where did you purchase?' }]}
							value={data.how_likely_tv_next6}
							placeholder='Choose your answer'
							onChange={value => onChange('how_likely_tv_next6', value.value)}
						/>{' '}
						{errors?.how_likely_tv_next6 ? (
							<p
								style={{
									color: 'red',
									position: 'absolute',
									bottom: '-42px',
									left: '0'
								}}
								className='error mt-2'>
								{errors?.how_likely_tv_next6}
							</p>
						) : null}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-8'>
					<div className='form_select_field  position-relative z-2'>
						<label className='label'>
							How likely would you consider a Hisense Laser TV for your next
							television?
						</label>
						<LaserInstallationDropDownSelectBox
							options={nextTelevision}
							// disabledOptions={[{ name: 'Where did you purchase?' }]}
							value={data.how_likely_lasertv_next}
							placeholder='Choose your answer'
							onChange={value =>
								onChange('how_likely_lasertv_next', value.value)
							}
						/>{' '}
						{errors?.how_likely_lasertv_next ? (
							<p
								style={{
									color: 'red',
									position: 'absolute',
									bottom: '-42px',
									left: '0'
								}}
								className='error mt-2'>
								{errors?.how_likely_lasertv_next}
							</p>
						) : null}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-8'>
					<div className='form_select_field  position-relative z-1'>
						<label className='label'>
							What do you like most about the Hisense Laser TV?
						</label>
						<LaserInstallationDropDownSelectBox
							options={laserTV}
							// disabledOptions={[{ name: 'Where did you purchase?' }]}
							value={data.what_like_abt_lasertv}
							placeholder='Choose your answer'
							onChange={value => onChange('what_like_abt_lasertv', value.value)}
						/>{' '}
						{errors?.what_like_abt_lasertv ? (
							<p
								style={{
									color: 'red',
									position: 'absolute',
									bottom: '-42px',
									left: '0'
								}}
								className='error mt-2'>
								{errors?.what_like_abt_lasertv}
							</p>
						) : null}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pt-4'>
					<FlightNightCustomCheckbox
						status={terms}
						onClick={() => setTerms(prevState => !prevState)}>
						<p>
							I have read and agree to the{' '}
							<Link href=''>
								<a>Terms & Conditions</a>
							</Link>{' '}
							of this giveaway.
						</p>
					</FlightNightCustomCheckbox>
				</div>
				<div className='col-12 col-md-6 px-4 pt-4'>
					<FlightNightCustomCheckbox
						status={updated}
						onClick={() => {
							onChange('future_news', updated ? 0 : 1)
							setUpdated(prevState => !prevState)
						}}>
						<p>
							Yes, please keep me updated on news, offers, or future events.
						</p>
					</FlightNightCustomCheckbox>
				</div>
				<div className='col-12 col-md-6 pt-12 text-center'>
					<button
						disabled={!terms || loading ? true : false}
						className='n-btn d-inline-flex gap-2 primary py-4 px-6 '>
						Submit
						{loading && <Spinner size={20} />}
					</button>
				</div>
			</div>
		</div>
	)
}

export default FlightNightFormHisense
