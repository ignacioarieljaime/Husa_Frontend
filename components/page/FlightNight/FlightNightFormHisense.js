import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import LaserInstallationDropDownSelectBox from '../LaserTvInstallation/LaserInstallationDropDownSelectBox'
import FlightNightCustomCheckbox from './FlightNightCustomCheckbox'

const FlightNightFormHisense = ({ data, onChange, title }) => {
	const [terms, setTerms] = useState(false)
	const [updated, setUpdated] = useState(false)
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(title)
	}, [])
	const familiarity = [
		{ name: 'Very familiar', value: 'Very familiar' },
		{ name: 'Somewhat familiar', value: 'Somewhat familiar' },
		{ name: 'Not familiar', value: 'Not familiar' },
		{ name: 'Unsure', value: 'Unsure' }
	]

	return (
		<div className='hisense'>
			<h3 dangerouslySetInnerHTML={{ __html: title }} className='title'></h3>
			<div className='line top'></div>
			<div className='row justify-content-center align-items-center mx-0'>
				<div className='col-12 col-md-6 px-4 pb-8'>
					<div className='form_select_field z-6'>
						<label className='label'>
							How familiar with Hisense were you before today?
						</label>
						<LaserInstallationDropDownSelectBox
							options={familiarity}
							// disabledOptions={[{ name: 'Where did you purchase?' }]}
							// value={data.purchased_from}
							placeholder='Choose your answer'
							// onChange={newValue => dispatch({ purchased_from: newValue.name })}
						/>
						{/* {errors?.PostalZipCode ? (
							<p className='error'>{errors?.PostalZipCode}</p>
						) : null} */}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-8'>
					<div className='form_select_field z-5'>
						<label className='label'>
							After today, are you more likely to consider Hisense for your next
							TV?
						</label>
						<LaserInstallationDropDownSelectBox
							options={familiarity}
							// disabledOptions={[{ name: 'Where did you purchase?' }]}
							// value={data.purchased_from}
							placeholder='Choose your answer'
							// onChange={newValue => dispatch({ purchased_from: newValue.name })}
						/>{' '}
						{/* {errors?.PostalZipCode ? (
							<p className='error'>{errors?.PostalZipCode}</p>
						) : null} */}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-8'>
					<div className='form_select_field  z-4'>
						<label className='label'>
							Which TV brands do you currently own at home?
						</label>
						<LaserInstallationDropDownSelectBox
							options={familiarity}
							// disabledOptions={[{ name: 'Where did you purchase?' }]}
							value={data.currentTvBrand}
							placeholder='Choose your answer'
							onChange={newValue => onChange({ currentTvBrand: newValue.name })}
						/>{' '}
						{/* {errors?.PostalZipCode ? (
							<p className='error'>{errors?.PostalZipCode}</p>
						) : null} */}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-8'>
					<div className='form_select_field z-3'>
						<label className='label'>
							How likely are you to buy a new TV in the next 6 months?
						</label>
						<LaserInstallationDropDownSelectBox
							options={familiarity}
							// disabledOptions={[{ name: 'Where did you purchase?' }]}
							// value={data.purchased_from}
							placeholder='Choose your answer'
							// onChange={newValue => dispatch({ purchased_from: newValue.name })}
						/>{' '}
						{/* {errors?.PostalZipCode ? (
							<p className='error'>{errors?.PostalZipCode}</p>
						) : null} */}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-8'>
					<div className='form_select_field z-2'>
						<label className='label'>
							How likely would you consider a Hisense Laser TV for your next
							television?
						</label>
						<LaserInstallationDropDownSelectBox
							options={familiarity}
							// disabledOptions={[{ name: 'Where did you purchase?' }]}
							// value={data.purchased_from}
							placeholder='Choose your answer'
							// onChange={newValue => dispatch({ purchased_from: newValue.name })}
						/>{' '}
						{/* {errors?.PostalZipCode ? (
							<p className='error'>{errors?.PostalZipCode}</p>
						) : null} */}
					</div>
				</div>
				<div className='col-12 col-md-6 px-4 pb-8'>
					<div className='form_select_field z-1'>
						<label className='label'>
							What do you like most about the Hisense Laser TV?
						</label>
						<LaserInstallationDropDownSelectBox
							options={familiarity}
							// disabledOptions={[{ name: 'Where did you purchase?' }]}
							// value={data.purchased_from}
							placeholder='Choose your answer'
							// onChange={newValue => dispatch({ purchased_from: newValue.name })}
						/>{' '}
						{/* {errors?.PostalZipCode ? (
							<p className='error'>{errors?.PostalZipCode}</p>
						) : null} */}
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
						onClick={() => setUpdated(prevState => !prevState)}>
						<p>
							Yes, please keep me updated on news, offers, or future events.
						</p>
					</FlightNightCustomCheckbox>
				</div>
				<div className='col-12 col-md-6 pt-12 text-center'>
					<button className='n-btn primary py-4 px-6 '>Submit</button>
				</div>
			</div>
		</div>
	)
}

export default FlightNightFormHisense
