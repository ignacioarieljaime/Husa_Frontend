import React from 'react'
import { useState } from 'react'
import FlightNightFormHisense from './FlightNightFormHisense'
import FlightNightFormPersonal from './FlightNightFormPersonal'

const FlightNightForm = ({ data }) => {
	let { structure } = data
	const [dataSchema, setDataSchema] = useState({
		firstName: ''
	})

	const dataSchemaHandler = (_key, _value) => {
		setDataSchema({ ...dataSchema, [_key]: _value })
	}

	const submitData = e => {
		e.preventDefault()
		console.log(dataSchema)
	}

	return (
		<section>
			<form onSubmit={submitData} className='flight_night_form'>
				<FlightNightFormPersonal
					title={structure?.title?.value}
					data={dataSchema}
					onChange={dataSchemaHandler}
				/>
				<FlightNightFormHisense
					title={structure?.secondTitle?.value}
					data={dataSchema}
					onChange={dataSchemaHandler}
				/>
			</form>
		</section>
	)
}

export default FlightNightForm
