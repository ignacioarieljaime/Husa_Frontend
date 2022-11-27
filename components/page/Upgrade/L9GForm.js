import Link from 'next/link'
import React, { useReducer, useState, useRef } from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useWindowSize } from 'hooks/useWindowSize'

const UpgradeL9GForm = ({ data: { structure } }) => {
	const [dataState, dispatch] = useReducer(
		(prevState, update) => ({
			...prevState,
			...update
		}),
		{
			name: '',
			email: '',
			phone: '',
			description: '',
			image: ''
		}
	)
	const inputRef = useRef(null)
	const [acceptTerms, setAcceptTerms] = useState(false)
	const windowSize = useWindowSize()

	structure = {
		text: {
			value:
				"<p>All season long, D. Wade, the Chairman of Upgrades, has been coming to the defense of fans looking for their next big screen upgrade. Well now the clock is ticking down, and D. Wade is coming in clutch with his biggest play yet - your chance to get the brand new 100-inch L9G TriChroma Laser TV for FREE. It's home entertainment at a massive scale. And once you go big there's no going back.</p><p>It's simple - purchase the 100-inch L9G TriChroma Laser TV from an authorized reseller between Sep 1 - Sep 30, then complete this form. Write a short essay and tell D. Wade why, now more than ever, you deserve this BIG screen upgrade and why he should foot the bill for you. Be original, be creative, and be convincing. At the end of the contest, the Chairman himself will select three winners and reimburse the purchase price of their 100-inch L9G TriChroma Laser TV.</p>"
		},
		conditions: {
			value:
				'<p>PURCHASE NECESSARY. Enter Contest between 9/1/21 at 12:00 AM ET and 9/30/21 at 11:59 PM ET; Open to legal residents of the 50 U.S. &amp; D.C., who are 18+ at time of entry. Limit 1 entry per person. See <a href="upgrade-with-wade/l9g-trichroma-laser-tv/terms-and-conditions" target="_blank" title="Official Rules">Official Rules</a> for full details on how to enter, eligibility requirements, prize description and limitations. Void where prohibited.</p>'
		}
	}

	return (
		<section>
			<div className='upgrade_l9g_form'>
				<div className='container'>
					<article
						className='article'
						dangerouslySetInnerHTML={{
							__html: structure?.text?.value
						}}></article>
					<form className='row form mx-0'>
						<div className='position-relative px-0 px-md-3 col-12'>
							<div className='form-field'>
								<input
									onChange={e => dispatch(dataState, { name: e.target.value })}
									required
									placeholder='Full Name'
									type='text'
								/>
							</div>
							<p className='feed'>s</p>
						</div>
						<div className='position-relative px-0 px-md-3 col-12 col-md-6'>
							<div className='form-field'>
								<input
									onChange={e => dispatch(dataState, { email: e.target.value })}
									required
									placeholder='Email'
									type='email'
								/>
							</div>
							<p className='feed'></p>
						</div>
						<div className='position-relative px-0 px-md-3 col-12 col-md-6'>
							<div className='form-field'>
								<input
									onChange={e => dispatch(dataState, { phone: e.target.value })}
									required
									placeholder='Phone'
									type='tel'
								/>
							</div>
							<p className='feed'></p>
						</div>
						<div className='position-relative px-0 px-md-3 col-12 mb-4'>
							<div className='form-field textarea'>
								<textarea
									onChange={e =>
										dispatch(dataState, { description: e.target.value })
									}
									cols='20'
									row='5'
									required
									placeholder='Why should D. Wade foot the bill for your Laser TV? Max 250 words'
								/>
							</div>
							<p className='feed'></p>
						</div>
						<div className='col-12'>
							<div className='file-input-box'>
								<label>Proof of purchase</label>
								<div
									className={`input ${
										dataState.image === '' ? '' : 'activated'
									}`}
									onClick={() => inputRef.current.click()}>
									<div className='content'>
										{windowSize[0] > 600 ? (
											<>
												<p>
													{dataState.image === ''
														? 'Drag & Drop a File Here'
														: 'Upload Complete'}
												</p>
												<p className='divider'>or</p>
												<article className='article'>
													<p>Upload</p>
												</article>
											</>
										) : null}
									</div>
									<input
										type='file'
										ref={inputRef}
										onChange={e => {
											const file = e.target.files && e.target.files[0]
											file?.type.startsWith('image') &&
												dispatch(dataState, {
													image: e.target.files && e.target.files[0]
												})
										}}
									/>
								</div>
							</div>
						</div>
						<div className='col-12'>
							<div className='accept-terms '>
								<button
									type='button'
									className={`${acceptTerms ? 'active' : ''}`}
									onClick={() => setAcceptTerms(prevState => !prevState)}>
									{acceptTerms && <FontAwesomeIcon icon={faCheck} size='sm' />}
								</button>
								<p>
									I MEET THE CONTEST ELIGIBILITY REQUIREMENTS AND HAVE READ AND
									AGREE TO THE{' '}
									<Link href='upgrade-with-wade/l9g-trichroma-laser-tv/terms-and-conditions'>
										<a>OFFICIAL RULES</a>
									</Link>{' '}
									AND HISENSE'S{' '}
									<Link href='legal-disclaimer'>
										<a>TERMS OF USE</a>
									</Link>
								</p>
							</div>
						</div>
						<div className='col-12 py-7'>
							<button type='submit' className={`submit`}>
								SUBMIT
							</button>
							<div className='terms'>
								<Link href='upgrade-with-wade/l9g-trichroma-laser-tv/terms-and-conditions'>
									<a>Terms and conditions </a>
								</Link>
								apply
							</div>
						</div>
					</form>
				</div>
				<div className='container px-0 px-md-3'>
					<article
						className='article purchase-conditions'
						dangerouslySetInnerHTML={{
							__html: structure?.conditions?.value
						}}></article>
				</div>
			</div>
		</section>
	)
}

export default UpgradeL9GForm
