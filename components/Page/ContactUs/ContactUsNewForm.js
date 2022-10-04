import React from 'react'

function ContactUsNewForm() {
  return (
	<section className="border-bottom border-dark">
					<div className="px-8 px-md-20 mt-20">
						<div className="container form-container">
							<div
								className="d-flex justify-content-center align-items-end flex-nowrap mb-17"
							>
								<div className="pe-5 pe-sm-15 pb-5 border-bottom border-dark">
									<button
										className="tab-btn fw-light fs-3 active"
										id="tab-2"
										onclick="switchForms(this.id)"
									>
										General Inquiries
									</button>
								</div>
								<div className="ps-5 ps-sm-15 pb-5 border-bottom border-dark">
									<button
										className="tab-btn fw-light fs-3"
										id="tab-1"
										onclick="switchForms(this.id)"
									>
										Parts & Service Support
									</button>
								</div>
							</div>
						</div>
						<div className="container">
							<div
								className="form-container-inner-group justify-content-center row flex-column mb-20"
								id="form-tab-1"
							>
								<h2 className="fs-1 mb-18 text-center">Parts & Service Support</h2>
								<div className="row justify-content-between align-items-center">
									<div className="support-type col-12 col-md-3 mb-5">
										<i className="fa-solid fa-2xl fa-envelope mb-8"></i>
										<h3 className="mb-0 fs-5 fw-normal">Email</h3>
									</div>
									<div className="support-type col-12 col-md-3 mb-5">
										<i className="fa-sharp fa-solid fa-2xl fa-comments mb-8"></i>
										<h3 className="mb-0 fs-5 fw-normal">Chat</h3>
									</div>
									<div className="support-type col-12 col-md-3 mb-5">
										<i className="fa-solid fa-2xl fa-phone mb-8"></i>
										<h3 className="mb-0 fs-5 fw-normal">Call</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="container form-container">
							<form
								action=""
								className="form-container-inner-group justify-content-center row active"
								id="form-tab-2"
							>
								<h2 className="fs-1 mb-18">General Inquiries</h2>
								<div className="col-12 mb-10 custom-select-box">
									<div
										className="form-container-inner-input select-container"
										tabindex="1"
									>
										<div className="select-box-item">
											<input
												className="input"
												type="radio"
												id="inquiry"
												value=""
												name="inquiry"
												checked="checked"
												disabled
											/>
											<p className="input-text">
												What is your inquiry related to?<i
													className="fa-solid fa-xs fa-chevron-down"
												></i>
											</p>
										</div>
										<div className="select-box-item">
											<input
												className="input"
												type="radio"
												id="marketing"
												value="2"
												name="inquiry"
											/>
											<p className="input-text">
												Marketing or PR<i
													className="fa-solid fa-xs fa-chevron-down"
												></i>
											</p>
										</div>
										<div className="select-box-item">
											<input
												className="input"
												type="radio"
												id="customer-support"
												value="3"
												name="inquiry"
											/>
											<p className="input-text">
												Customer Support<i
													className="fa-solid fa-xs fa-chevron-down"
												></i>
											</p>
										</div>
										<div className="select-box-item">
											<input
												className="input"
												type="radio"
												id="human-resources"
												value="4"
												name="inquiry"
											/>
											<p className="input-text">
												Human Resources<i
													className="fa-solid fa-xs fa-chevron-down"
												></i>
											</p>
										</div>
									</div>
									<ul className="select-box-list">
										<li>
											<label
												className="option"
												for="marketing"
												aria-hidden="aria-hidden"
												>marketing or PR</label
											>
										</li>
										<li>
											<label
												className="option"
												for="customer-support"
												aria-hidden="aria-hidden"
												>Customer Support</label
											>
										</li>
										<li>
											<label
												className="option"
												for="human-resources"
												aria-hidden="aria-hidden"
												>Human Resources</label
											>
										</li>
									</ul>
									<span className="input-error">This field is required.</span>
								</div>
								<div className="col-12 mb-10">
									<input
										type="text"
										className="form-container-inner-input"
										placeholder="Name *"
										required
									/>
									<span className="input-error">This field is required.</span>
								</div>
								<div className="col-12 col-md-6 mb-10">
									<input
										type="email"
										className="form-container-inner-input"
										placeholder="Email *"
										required
									/>
									<span className="input-error">This field is required.</span>
								</div>
								<div className="col-12 col-md-6 mb-10">
									<input
										type="tel"
										className="form-container-inner-input"
										placeholder="Phone *"
										required
									/>
									<span className="input-error">This field is required.</span>
								</div>
								<div className="col-12 mb-10">
									<textarea
										name=""
										cols="30"
										rows="1"
										required
										placeholder="Message"
										className="form-container-inner-input"
									></textarea>
									<span className="input-error">This field is required.</span>
								</div>
								<div className="col-12 text-center">
									<button
										type="submit"
										className="btn btn-outline-dark fw-bold rounded-5 mb-20 py-3 px-4"
									>
										SUBMIT
									</button>
								</div>
							</form>
						</div>
						<div
							className="modal fade"
							id="serial-numbers"
							tabindex="-1"
							role="dialog"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true"
						>
							<div
								className="modal-dialog modal-dialog-centered modal-lg"
								role="document"
							>
								<div
									className="modal-content border-0 bg-white p-6 d-block serial-number-modal"
								>
									<button
										className="btn modal-close-btn"
										type="button"
										data-dismiss="modal"
										aria-label="Close"
									>
										<i className="fa-solid fa-xmark"></i>
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