import React from 'react'

// image
import Tv from './../../../../public/assets/images/contact/tv.png'

function ContactUsPhoneUs() {
	return (
		<section>
			<div class='container mt-15 mb-20'>
				<h3 class='mb-15 text-center text-md-start'>Phone Us</h3>
				<div class='row justify-content-between align-items-stretch contact-info'>
					<div class='col-12 col-md-4 d-flex flex-column justify-content-between align-items-center mb-16 mb-md-0'>
						<h4 class='mb-5 align-self-md-start'>Support Hours:</h4>
						<div class='align-self-md-start'>
							<p class='fw-bold mb-1'>Monday – Friday</p>
							<p class='fw-light mb-5'>9am - 9pm EST</p>
							<p class='fw-bold mb-1'>Saturday – Sunday</p>
							<p class='fw-light mb-1'>9am - 6pm EST</p>
						</div>
					</div>
					<div class='col-12 col-md-4 d-flex flex-column justify-content-between align-items-center mb-16 mb-md-0'>
						<img src={Tv.src} alt='featured image' width='80' class='mb-5' />
						<h4 class='fs-5 mb-7'>TVs & Audio</h4>
						<p class='fw-bold fs-5 mb-0'>+1 (888) 935-8880</p>
					</div>
					<div class='col-12 col-md-4 d-flex flex-column justify-content-between align-items-center mb-16 mb-md-0'>
						<img
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAEhElEQVR4nO2dS6sURxTHf4ozC/0Cer0mKOIm6CrGGLKIkoUiqDsVxK1X9BOELDSrgPgtvEuD0YgRURc+8bWKu0CuXhWSLAI+VldHFz0Tp8/UTD+quvp0z/nBAefO1Kl/9d9+VVdVg2EYhmEYhmEYhl66wHHgHvAG+NDQeAPc7belG3QLRWQN8JD6N2boeNRvW6Po0k4zBvEQ6ATbWhE4Rv0breo4FmxrReA2afG/ATO1KvJjLXCRdJvu1KqoIP+RFv9ZvXKCMEu6Ta/qlVOMJdLiV9QrJxjysKWC5XULMNKENGQf8A/wN7A3YF5DkPeQ9WLoN8/jSPNC5SErD3kNaVoDVeq1c4gyzBBlmCHKMEOUYYYoI6QhC0P//itgXkOQ97J3N7DYj11xpHmh8rI3D9aXFRE7hyjDDFGGGaKMMueDpeAqjP+xPUQZZogyzBBllDmHdIB3oYXUgJp7j2FsD1GGGaIMM0QZNuqkgdioE2VoHXXSBU6gd75KZfNQNBoyAzx21Kk1gs5D0WZIl2aZMYhg81C0GXLCUVdTIsg8FG2G3BP1XEDnfJXK5qFoM+S1qGdthXX5Usk8FG2GxKonFIX02p26MmxcVjZ7SG50F0mGOhX9PjjaxmXFPmQtDtX1rMT3hfSGHGN1GVgXMJ8xBm0D5WLvIYM9/xnuPT/r++B6p90QX+wqq8mYIcowQ5RR9/mgbjYD+4GdJN3js/2/PwdeAteB88AftagbQxtP6l8xuqjOpLgFbK1Rb4o2GbIcOAP0HHmyogecBpZF1OukLYasAOYd5YvGPMW2gRkyhp8cZXvAOeAAsB5Y1Y8N/b+dw703nYqgdyxtMOQbkuGvw+UWgG05yn4NPBVl3wHbK9Q7kTYYclWUWeTTFVUeZkl3In4ArlSodyJNN2SLo8x3Jerd6cizuQK9mTTdkB/F76961H1N5PohR5lCeqfhTn2H+DzvkUuWlbmj0PQ9ZEH8fqNH3ZtErjxPRu2QJXgrfr/So+6VItfbHGXskFUhcnv1qq6gjfwrPvuM45ID8mRub6bBkD/F5289csmyMrc302DIDfH5sEeuIxm5o9D0k7rrxrDM5er3IkcPuzEEyjXwiigTouvk9wr1TqQNhmxntHPxKUnHYZ6yrs7FPGXL6p1IGwyBpMtclu0BvwAHSW4YB93vG4FD/e9c3e8nI+gdS1sMCfWA6iz2gCqFTwOXkTyGfe/IkxXvgZ+xR7gjhGjgVpKBC3nNuAl8GUNvHreXSJtQ9+IzslFF/8cO8wWfhgHNMDoM6BrwK/DEo46QeoHRVx597pvQk+CHgIoJrlfu2pcodg0fmqk35KgjqabQTnC9HeC+I7GW0E4lelej1xTtVKa3A8yRjInVtNiLdqLrzaowtKBXIt/ULRyQRWxD5NIaF9FpyizJa2qHtUZ5xWvsQ8zxEnVqibkA7c8ktiFdkvWn6t64ReM+kV4TLh/cTArXxPoyrKFZ73h/QMAFzLIYzNPOY0bIFR46JOtP3WZ0hSAN8bqvbY5Ie4ZhGIZhGIZhGEYZPgJvXtI+k+H0CQAAAABJRU5ErkJggg=='
							alt='featured image'
							width='80'
							class='mb-5'
						/>
						<h4 class='fs-5 mb-7'>Appliances</h4>
						<p class='fw-bold fs-5 mb-0'>+1 (877) 465-3566</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactUsPhoneUs
