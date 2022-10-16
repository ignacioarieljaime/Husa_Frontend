import React from 'react'
import FAQsItem from './FAQsItem'

const FAQs = () => {
	return (
		<section className='l9g'>
			<div className='container-fluid faqs l-nine-g-faqs px-4 px-md-20 py-20'>
				<div
					className='text-start pt-10 pb-20 aos-init aos-animate'
					data-aos='fade'
					data-aos-delay='0'
					data-aos-duration='1000'>
					<h2 className='fs-5 fs-md-2hx fw-bold '>
						Frequently Asked Questions
					</h2>
				</div>

				<div className='row justify-content-between align-items-start'>
					<div className='col-12 col-md-6'>
						<FAQsItem
							question='Is this a TV or a projector?'
							answer="The L9G is a laser projector that comes paired with a projection
								screen. It's not an emissive TV like LED/LCD or OLED – rather,
								it's a new category of TV – high-brightness, ultra-short throw
								projection TV. When you want the biggest screen possible without
								breaking the bank, Laser TV is an excellent option."
						/>
						<FAQsItem
							question='Can I use this in a bright room?'
							answer='Yes. With high brightness output from the laser projector and a
								screen built to reject ambient light and boost image contrast,
								Laser TV is very serviceable in a well-lit room. Picture quality
								improves significantly with lighting control, but by no means
								must Laser TV be viewed in a pitch-black room.'
						/>
						<FAQsItem
							question='How far from the wall does the Laser Console have to sit?'
							answer={`For the 100" model, the back of the Laser Console is positioned
								about 11 inches from the wall. For the 120" model it's a little
								over 13 inches from the wall.`}
						/>
						<FAQsItem
							question='How is the screen packaged?'
							answer='Laser TV screens ship unassembled, in a flat-pack box.'
						/>
					</div>
					<div className='col-12 col-md-6'>
						<FAQsItem
							question='What type of screen should I choose?'
							answer="That depends on the space where you'll place the product. If you
								intend on using Laser TV in a room with lots of windows and high
								ceilings, then the ALR Daylight Screen will give you that extra
								boost in brightness to make content pop during daytime viewing.
								If your intention is to place the Laser TV in a light controlled
								media room, then the ALR Cinema Screen, with its extremely good
								reflection control, will be the better choice."
						/>
						<FAQsItem
							question='Can the projected image size be changed?'
							answer='The projection size changes based on the distance the projector
								is placed from the wall. The 100" and 120" models are
								specifically tuned for these projection sizes and paired with
								screens designed to get the best picture quality possible.
								Casting a larger or smaller image is certainly possible but
								there is no manual focus capability.'
						/>
						<FAQsItem
							question='Can I use the Laser Console on a plain wall, without the screen?'
							answer='Absolutely, but the magic of daylight visibility by using
								Ambient Light Rejecting screen material will be lost. If you
								only ever plan to watch the Laser TV in a pitch-black room, then
								projecting to the wall will look good, but not nearly as good as
								it would with the perfectly paired ALR screen.'
						/>
						<FAQsItem
							question='How difficult is the screen assembly and mounting process?'
							answer={`Laser TV screens come flat-packed and require assembly. Expect 2
								people to take 1-2 hours to build the screen. The screen mounts
								to the wall using the included mounting brackets. Take your time
								and following the step-by-step installation guide and you'll
								find that it's not particularly difficult.`}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FAQs
