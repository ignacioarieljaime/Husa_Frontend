import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ExtendedWarrantyWizardStepper = ({ step: { title, id } }) => {
	const router = useRouter()
	return (
		<div className='stepper'>
			<div className='text'>
				<span onClick={() => router.back()}>
					<FontAwesomeIcon icon={faArrowLeft} className='me-2' />
					Back to {title}
				</span>
			</div>
			<div className='indicator' style={{ width: 25 * (id + 1) + '%' }}></div>
		</div>
	)
}

export default ExtendedWarrantyWizardStepper
