import React, { useRef, useState } from 'react'

const RadioCheckBox = ({ label, onChange, checked, button, text }) => {
	const inputRef = useRef(null)
	const [dialog, setDialog] = useState(false)

	return (
		<>
			<div className='radio-checkbox'>
				<div
					className={`checkbox ${checked ? 'checked' : ''}`}
					onClick={() => inputRef.current.click()}>
					<input
						type='checkbox'
						ref={inputRef}
						value={checked}
						onChange={() => onChange(!checked)}
					/>
				</div>
				<div>
					{label}{' '}
					<button type='button' onClick={() => setDialog(true)}>
						{button}
					</button>
				</div>
			</div>
			{dialog && (
				<div className='extended-warranty-dialog'>
					<div
						className='extended-warranty-dialog-backdrop'
						onClick={() => setDialog(false)}></div>
					<div className='extended-warranty-dialog-content'>
						<article className='article'>
							<div
								dangerouslySetInnerHTML={{
									__html: text
								}}></div>
						</article>
					</div>
				</div>
			)}
		</>
	)
}

export default RadioCheckBox
