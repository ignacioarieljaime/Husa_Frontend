import Link from 'next/link'
import React, { useReducer, useState, useRef, useEffect } from 'react'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useWindowSize } from 'hooks/useWindowSize'
import axios from 'axios'
import Spinner from 'components/common/Spinner'
import { toast } from 'react-toastify'

const UpgradeL9GForm = ({ data }) => {
	const { structure } = data
	const [dataSchema, setDataSchema] = useState({
		first_name: null,
		last_name: null,
		email: null,
		phone_number: null,
		description: null,
		proof_of_purchase: null
	})
	const [errors, setErrors] = useState(null)
	const [loading, setLoading] = useState(null)
	const inputRef = useRef(null)
	const [acceptTerms, setAcceptTerms] = useState(false)
	const [file, setFile] = useState(null)
	const windowSize = useWindowSize()
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	const dataSchemaHandler = (_key, _value) => {
		setDataSchema({ ...dataSchema, [_key]: _value })
	}

	const submitData = async e => {
		e.preventDefault()
		setErrors(null)
		if (!dataSchema.proof_of_purchase) {
			toast.error('please upload image')
			return
		}

		setLoading('button')
		try {
			let response = await axios.post(
				`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F639712e52ac39`,
				{ ...dataSchema }
			)
			if (response.status === 200) {
				toast.success('ticket was sent successfully', { toastId: 'success' })
				e.target.reset()
				setFile(null)
			}
			setLoading(false)
		} catch (error) {
			setLoading(false)
			if (error?.response?.status === 422) {
				setErrors(error?.response?.data?.errors)
			} else {
				toast.error("ticket didn't send")
			}
			console.log(error)
		}
	}

	const uploadFile = async _file => {
		setFile(_file)
		const formData = new FormData()
		formData.append('attachment', _file)
		setLoading('file')
		try {
			let response = await axios({
				method: 'post',
				url: process.env.NEXT_PUBLIC_ASSETS_API_ROUTE,
				data: formData,
				headers: { 'Content-Type': 'multipart/form-data' }
			})
			if (response.status === 200) {
				dataSchemaHandler('proof_of_purchase', response.data.view_link)
			}
			setLoading(null)
		} catch (error) {
			setLoading(null)
			toast.error("file didn't upload please try again")
			console.log(error)
		}
	}

	return (
		<section>
			<div className='upgrade_l9g_form'>
				<div className='container form-container'>
					<article
						className='article'
						dangerouslySetInnerHTML={{
							__html: structure?.text?.value
						}}></article>
					<form onSubmit={submitData} className='row form mx-0'>
						<div className='position-relative px-0 px-md-3 col-12 col-md-6'>
							<div className='form-field'>
								<input
									onChange={e =>
										dataSchemaHandler('first_name', e.target.value)
									}
									required
									placeholder='First Name'
									type='text'
								/>
							</div>
							<div className='input_error_message'>
								{errors?.first_name && errors?.first_name[0]}
							</div>
							<p className='feed'></p>
						</div>
						<div className='position-relative px-0 px-md-3 col-12 col-md-6'>
							<div className='form-field'>
								<input
									onChange={e => dataSchemaHandler('last_name', e.target.value)}
									required
									placeholder='Last Name'
									type='text'
								/>
							</div>
							<div className='input_error_message'>
								{errors?.last_name && errors?.last_name[0]}
							</div>
							<p className='feed'></p>
						</div>
						<div className='position-relative px-0 px-md-3 col-12 col-md-6'>
							<div className='form-field'>
								<input
									onChange={e => dataSchemaHandler('email', e.target.value)}
									required
									placeholder='Email'
									type='email'
								/>
							</div>
							<div className='input_error_message'>
								{errors?.email && errors?.email[0]}
							</div>
							<p className='feed'></p>
						</div>
						<div className='position-relative px-0 px-md-3 col-12 col-md-6'>
							<div className='form-field'>
								<input
									onChange={e =>
										dataSchemaHandler('phone_number', e.target.value)
									}
									required
									placeholder='Phone'
									type='tel'
								/>
							</div>
							<div className='input_error_message'>
								{errors?.phone_number && errors?.phone_number[0]}
							</div>
							<p className='feed'></p>
						</div>
						<div className='position-relative px-0 px-md-3 col-12 mb-4'>
							<div className='form-field textarea'>
								<input
									onChange={e =>
										dataSchemaHandler('description', e.target.value)
									}
									required
									placeholder='Why should D. Wade foot the bill for your Laser TV? Max 250 words'
								/>
							</div>
							<div className='input_error_message'>
								{errors?.description && errors?.description[0]}
							</div>
							<p className='feed'></p>
						</div>
						<div className='col-12'>
							<div className='file-input-box file-upload'>
								<label>Proof of purchase</label>
								<div className={`input file-upload-box`}>
									{loading === 'file' && (
										<div className='spinner_bg'>
											<Spinner size={40} />
										</div>
									)}
									{file ? (
										<>
											<button
												className='remove_img'
												onClick={() => setFile(null)}>
												<FontAwesomeIcon icon={faXmark} />
											</button>
											<img
												className='position-absolute top-0 right-0 w-100 h-100'
												src={URL.createObjectURL(file)}
											/>
										</>
									) : (
										<>
											<div className='content'>
												{windowSize[0] > 600 ? (
													<>
														<p>
															{!dataSchema.proof_of_purchase
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
												className=' position-absolute top-0 start-0 opacity-0 w-100 h-100'
												style={{ zIndex: 1 }}
												id='contact-file-input'
												accept='.jpg, .png, .jpeg'
												multiple='multiple'
												onChange={e => uploadFile(e.target.files[0])}
											/>
										</>
									)}
								</div>
								<div className='input_error_message'>
									{errors?.proof_of_purchase && errors?.proof_of_purchase[0]}
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
							<button
								disabled={!acceptTerms}
								type='submit'
								className={`submit d-flex align-items-center`}>
								<span className='mt-1'>SUBMIT</span>
								{loading === 'button' && (
									<Spinner size={25} className={'ms-2'} />
								)}
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
							__html: structure?.rule?.value
						}}></article>
				</div>
			</div>
		</section>
	)
}

export default React.memo(UpgradeL9GForm)
