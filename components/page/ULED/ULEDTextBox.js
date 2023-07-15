import React from 'react'

function ULEDTextBox({ data }) {
	let { structure } = data
	return (
		<section id={data?.name + data?.id}>
			<div className='uledx_textbox'>
				<article className='content'>
					<h4 className='title'>{structure?.title?.value}</h4>

					<div>
						{structure?.paragraphOne?.value && (
							<div className='text'>
								<p>{structure?.paragraphOne?.value}</p>
							</div>
						)}
						{structure?.paragraphTwo?.value && (
							<div className='text'>
								<p>{structure?.paragraphTwo?.value}</p>
							</div>
						)}
						{structure?.text?.value && (
							<div
								className='text'
								dangerouslySetInnerHTML={{
									__html: structure?.text?.value
								}}></div>
						)}
					</div>
				</article>
			</div>
		</section>
	)
}

export default ULEDTextBox
