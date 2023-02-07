import Joi from 'joi'

const company = Joi.string().min(2).required().messages({
	'string.min': 'Company field must contain at least 2 letters.',
	'string.required': 'Company field is required.'
})

const first_name = Joi.string().alphanum().required().messages({
	'string.alphanum': 'First name field must only contain letters.',
	'string.required': 'First name field is required.'
})

const last_name = Joi.string().alphanum().required().messages({
	'string.alphanum': 'Last name field must only contain letters.',
	'string.required': 'Last name field is required.'
})

const phone_number = Joi.number().integer().required().messages({
	'number.base': 'Phone number field must contain numbers.',
	'number.integer':
		"Phone number field can't contain letters or any special characters.",
	'number.required': 'Phone number field is required.'
})

const email = Joi.string()
	.email({ tlds: { allow: false } })
	.required()
	.messages({
		'string.required': 'Email field is required.'
	})

const message = Joi.string().required().messages({
	'string.required': 'Email field is required.'
})

export const schema = {
	company: company,

	first_name: first_name,

	last_name: last_name,

	phone_number: phone_number,

	email: email,

	message: message
}
