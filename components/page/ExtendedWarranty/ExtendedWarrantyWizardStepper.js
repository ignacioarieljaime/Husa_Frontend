import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

const ExtendedWarrantyWizardStepper = ({
	step: { title, id },
	stepHandler
}) => {
	const router = useRouter()

	const previousStepHandler = () => {
		if (id === 0) router.back()
		else
			stepHandler(step => ({
				id: id - 1,
				title: ''
			}))
	}

	return (
		<div className='stepper'>
			<div className='text'>
				<span onClick={previousStepHandler}>
					<FontAwesomeIcon icon={faArrowLeft} className='me-2' />
					Back to {title}
				</span>
			</div>
			<div className='indicator' style={{ width: 25 * (id + 1) + '%' }}></div>
		</div>
	)
}

export default ExtendedWarrantyWizardStepper
