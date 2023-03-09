import React from 'react'
import { useReducer } from 'react'
import FlightNightFormHisense from './FlightNightFormHisense'
import FlightNightFormPersonal from './FlightNightFormPersonal'

const FlightNightForm = () => {
	const [state, dispatch] = useReducer(
		(state, update) => ({ ...state, ...update }),
		{
			currentTvBrand: ''
		}
	)

	return (
		<section>
			<form className='flight_night_form'>
				<FlightNightFormPersonal />
				<FlightNightFormHisense data={state} onChange={dispatch} />
			</form>
		</section>
	)
}

export default FlightNightForm
