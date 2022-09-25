import React from 'react'

function ContactUsNewForm() {
  return (
	<section class="border-bottom border-dark">
					<div class="px-8 px-md-20 mt-20">
						<div class="container form-container">
							<div
								class="d-flex justify-content-center align-items-end flex-nowrap mb-17"
							>
								<div class="pe-5 pe-sm-15 pb-5 border-bottom border-dark">
									<button
										class="tab-btn fw-light fs-3 active"
										id="tab-2"
										onclick="switchForms(this.id)"
									>
										General Inquiries
									</button>
								</div>
								<div class="ps-5 ps-sm-15 pb-5 border-bottom border-dark">
									<button
										class="tab-btn fw-light fs-3"
										id="tab-1"
										onclick="switchForms(this.id)"
									>
										Parts & Service Support
									</button>
								</div>
							</div>
						</div>
						<div class="container">
							<div
								class="form-container-inner-group justify-content-center row flex-column mb-20"
								id="form-tab-1"
							>
								<h2 class="fs-1 mb-18 text-center">Parts & Service Support</h2>
								<div class="row justify-content-between align-items-center">
									<div class="support-type col-12 col-md-3 mb-5">
										<i class="fa-solid fa-2xl fa-envelope mb-8"></i>
										<h3 class="mb-0 fs-5 fw-normal">Email</h3>
									</div>
									<div class="support-type col-12 col-md-3 mb-5">
										<i class="fa-sharp fa-solid fa-2xl fa-comments mb-8"></i>
										<h3 class="mb-0 fs-5 fw-normal">Chat</h3>
									</div>
									<div class="support-type col-12 col-md-3 mb-5">
										<i class="fa-solid fa-2xl fa-phone mb-8"></i>
										<h3 class="mb-0 fs-5 fw-normal">Call</h3>
									</div>
								</div>
							</div>
						</div>
						<div class="container form-container">
							<form
								action=""
								class="form-container-inner-group justify-content-center row active"
								id="form-tab-2"
							>
								<h2 class="fs-1 mb-18">General Inquiries</h2>
								<div class="col-12 mb-10 custom-select-box">
									<div
										class="form-container-inner-input select-container"
										tabindex="1"
									>
										<div class="select-box-item">
											<input
												class="input"
												type="radio"
												id="inquiry"
												value=""
												name="inquiry"
												checked="checked"
												disabled
											/>
											<p class="input-text">
												What is your inquiry related to?<i
													class="fa-solid fa-xs fa-chevron-down"
												></i>
											</p>
										</div>
										<div class="select-box-item">
											<input
												class="input"
												type="radio"
												id="marketing"
												value="2"
												name="inquiry"
											/>
											<p class="input-text">
												Marketing or PR<i
													class="fa-solid fa-xs fa-chevron-down"
												></i>
											</p>
										</div>
										<div class="select-box-item">
											<input
												class="input"
												type="radio"
												id="customer-support"
												value="3"
												name="inquiry"
											/>
											<p class="input-text">
												Customer Support<i
													class="fa-solid fa-xs fa-chevron-down"
												></i>
											</p>
										</div>
										<div class="select-box-item">
											<input
												class="input"
												type="radio"
												id="human-resources"
												value="4"
												name="inquiry"
											/>
											<p class="input-text">
												Human Resources<i
													class="fa-solid fa-xs fa-chevron-down"
												></i>
											</p>
										</div>
									</div>
									<ul class="select-box-list">
										<li>
											<label
												class="option"
												for="marketing"
												aria-hidden="aria-hidden"
												>marketing or PR</label
											>
										</li>
										<li>
											<label
												class="option"
												for="customer-support"
												aria-hidden="aria-hidden"
												>Customer Support</label
											>
										</li>
										<li>
											<label
												class="option"
												for="human-resources"
												aria-hidden="aria-hidden"
												>Human Resources</label
											>
										</li>
									</ul>
									<span class="input-error">This field is required.</span>
								</div>
								<div class="col-12 mb-10">
									<input
										type="text"
										class="form-container-inner-input"
										placeholder="Name *"
										required
									/>
									<span class="input-error">This field is required.</span>
								</div>
								<div class="col-12 col-md-6 mb-10">
									<input
										type="email"
										class="form-container-inner-input"
										placeholder="Email *"
										required
									/>
									<span class="input-error">This field is required.</span>
								</div>
								<div class="col-12 col-md-6 mb-10">
									<input
										type="tel"
										class="form-container-inner-input"
										placeholder="Phone *"
										required
									/>
									<span class="input-error">This field is required.</span>
								</div>
								<div class="col-12 mb-10">
									<textarea
										name=""
										cols="30"
										rows="1"
										required
										placeholder="Message"
										class="form-container-inner-input"
									></textarea>
									<span class="input-error">This field is required.</span>
								</div>
								<div class="col-12 text-center">
									<button
										type="submit"
										class="btn btn-outline-dark fw-bold rounded-5 mb-20 py-3 px-4"
									>
										SUBMIT
									</button>
								</div>
							</form>
						</div>
						<div
							class="modal fade"
							id="serial-numbers"
							tabindex="-1"
							role="dialog"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-lg"
								role="document"
							>
								<div
									class="modal-content border-0 bg-white p-6 d-block serial-number-modal"
								>
									<button
										class="btn modal-close-btn"
										type="button"
										data-dismiss="modal"
										aria-label="Close"
									>
										<i class="fa-solid fa-xmark"></i>
									</button>
									<div>
										<h3>we know those suckers can be hard to find</h3>
										<p>
											Check this list for the general location of your model
											number sticker. If youre still stumped, contact us and
											well sort you out.
										</p>
										<ul>
											<li>television</li>
											<li>Back of the unit</li>
											<li>wine cooler</li>
											<li>Back of the unit</li>
											<li>compact refrigeration</li>
											<li>Back of the unit</li>
											<li>chest freezer</li>
											<li>Back of the unit</li>
											<li>full size refrigeration</li>
											<li>Back of the unit</li>
											<li>portable AC</li>
											<li>Left side of the unit</li>
											<li>beverage chiller</li>
											<li>Back of the unit</li>
											<li>dehumidifier</li>
											<li>Back of the unit</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
  )
}

export default ContactUsNewForm