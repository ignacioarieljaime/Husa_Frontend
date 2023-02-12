import LaserTv from 'components/icons/LaserTv'
import UserCircleOutline from 'components/icons/UserCircleOutline'
import Wrench from 'components/icons/Wrench'
import React, { useEffect, useState } from 'react'
import CardLayout from './CardLayout'

const LaserTvInstallationForm = ({ data }) => {
	const { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])

	return (
		<section>
			<div className='laser_installation_form'>
				<h3 className='title'>{structure?.title?.value}</h3>
				<div
					className='subtitle'
					dangerouslySetInnerHTML={{ __html: text }}></div>
				<CardLayout
					title='Personal Information'
					icon={<UserCircleOutline />}></CardLayout>
				<CardLayout title='Product Information' icon={<LaserTv />}></CardLayout>
				<CardLayout
					title='Installation Information'
					icon={<Wrench />}></CardLayout>
			</div>
		</section>
	)
}

export default LaserTvInstallationForm
