import { useState } from 'react'

export const useForm = (callback, initialState) => {
	const [values, setValues] = useState(initialState)
	const onChange = ({ target: { name, type, checked, value } }) => {
		setValues({
			...values,
			[name]:
				type === 'checkbox'
					? checked
					: type === 'number'
					? Number(value)
					: value
		})
	}
	const onSubmit = e => {
		e.preventDefault()
		callback()
	}
	const reset = () => setValues(initialState)
	return { values, onChange, onSubmit, reset }
}
