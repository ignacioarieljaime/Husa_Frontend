import Spinner from 'components/common/Spinner'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import RoleModal from '../ContactUs/RoleModal'
import LaserInstallationDropDownSelectBox from '../LaserTvInstallation/LaserInstallationDropDownSelectBox'
import LaserInstallationDropDownSelectBoxMulti from '../LaserTvInstallation/LaserInstallationDropDownSelectBoxMulti'
import FlightNightCustomCheckbox from '../FlightNight/FlightNightCustomCheckbox'

const familiarity = [
	{ name: 'YES', value: 'Y' },
	{ name: 'NO', value: 'N' }
]
const nextTv = [
	{ name: 'YES', value: 'Y' },
	{ name: 'NO', value: 'N' }
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

const NbaFormHisense = ({
	data,
	onChange,
	title,
	loading,
	errors,
	submitText,
	termsData,
	terms,
	setTerms
}) => {
	const [updated, setUpdated] = useState(false)
	const [modalStatus, setModalStatus] = useState(false)
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
			<div className='content'>
				<h3 dangerouslySetInnerHTML={{ __html: title }} className='title'></h3>
				<div className='line top'></div>
				<div className='row justify-content-center align-items-center mx-0'>
					<div className='col-12 px-4 pb-8'>
						<div className='form_select_field  position-relative z-6'>
							<label className='label'>
								Were you familiar with “Hisense” before today?
							</label>
							<LaserInstallationDropDownSelectBox
								options={familiarity}
								// disabledOptions={[{ name: 'Where did you purchase?' }]}
								value={data.were_you_familiar}
								placeholder='Choose your answer'
								onChange={value => onChange('were_you_familiar', value.value)}
							/>
							{errors?.were_you_familiar ? (
								<p
									style={{
										color: 'red',
										position: 'absolute',
										bottom: '-42px',
										left: '0'
									}}
									className='error mt-2'>
									{errors?.were_you_familiar}
								</p>
							) : null}
						</div>
					</div>
					<div className='col-12 px-4 pb-8'>
						<div className='form_select_field  position-relative z-5'>
							<label className='label'>
								Are you more likely to purchase products from an official NBA
								sponsor?
							</label>
							<LaserInstallationDropDownSelectBox
								options={nextTv}
								// disabledOptions={[{ name: 'Where did you purchase?' }]}
								value={data.are_you_more_likely}
								placeholder='Choose your answer'
								onChange={value => onChange('are_you_more_likely', value.value)}
							/>{' '}
							{errors?.are_you_more_likely ? (
								<p
									style={{
										color: 'red',
										position: 'absolute',
										bottom: '-42px',
										left: '0'
									}}
									className='error mt-2'>
									{errors?.are_you_more_likely}
								</p>
							) : null}
						</div>
					</div>
					{/* <div className='col-12 px-4 pb-8'>
					<div className='form_select_field position-relative  z-4'>
						<label className='label'>
							Which TV brands do you currently own at home?
							<small className='d-block text-white fw-light fst-italic fs-9 text-capitalize'>
								Multiple options can be selected
							</small>
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
				</div> */}
					<div className='col-12 px-4 pt-4'>
						<FlightNightCustomCheckbox
							status={terms}
							onClick={() => setTerms(prevState => !prevState)}>
							<p>
								I have read and agree to the{' '}
								<button
									type='button'
									className='px-0'
									style={{
										background: 'transparent',
										color: 'white',
										border: 'none',
										textDecoration: 'underline'
									}}
									onClick={() => setModalStatus(true)}>
									Terms & Conditions
								</button>{' '}
								of this giveaway.
							</p>
						</FlightNightCustomCheckbox>
					</div>
					<div className='col-12 px-4 pt-4'>
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
					<div className='col-12 pt-12 text-center'>
						<button className='n-btn d-inline-flex gap-2 primary py-4 px-6 '>
							{submitText}
							{loading && <Spinner size={20} />}
						</button>
					</div>
					{modalStatus && (
						<RoleModal
							modalHandler={() => setModalStatus(false)}
							data={termsData}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default NbaFormHisense
