import Link from 'next/link'
import React, { useState, useRef } from 'react'
import CustomImage from '../CustomImage'
import NavBarDropDownSublist from './NavBarDropDownSublist'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

function NavBarDropDown({ data, handler, timer, itemIndex, setTimerCheck }) {

	const timeoutRef = useRef(null);

	const timerCheckHandler = (boolean, index) => {

		setTimerCheck(prevState => {
			const newState = [...prevState];
			newState[index] = boolean;

			return newState;
		});
	}

	const handleMouseEnter = (milliseconds) => {

		if (timer) {
			clearTimeout(timeoutRef.current);

			timeoutRef.current = setTimeout(() => {
				timerCheckHandler(true, itemIndex);
			}, milliseconds);
		}

		if (!timer) {
			clearTimeout(timeoutRef.current);
			timerCheckHandler(true, itemIndex);
		}

		handler(data.name);
	};

	const handleMouseLeave = (milliseconds) => {

		if (timer) {
			clearTimeout(timeoutRef.current);
			setTimerCheck(prevState => {
				const newState = [...prevState];
				newState[itemIndex] = false;

				if (JSON.stringify(prevState) === JSON.stringify(newState)) newState = Array.from({ length: prevState.length }, () => false);

				return newState;
			});
		}

		if (!timer) {

			timeoutRef.current = setTimeout(() => {

				setTimerCheck(prevState => {
					const newState = [...prevState];
					newState[itemIndex] = false;

					if (JSON.stringify(prevState) === JSON.stringify(newState)) newState = Array.from({ length: prevState.length }, () => false);

					return newState;
				});

			}, milliseconds);

		}

		handler(null);
	};

	return (
		<li
			onMouseEnter={() => handleMouseEnter(1000)}
			onMouseLeave={() => handleMouseLeave(40)}
			className='nav-item dropdown-list-toggle ps-4 ps-xl-6'>
			{!data.header.value || data.header.value === '' ? (
				<a style={{ cursor: 'default' }} className='nav-link'>
					<span className='underline-on-hover'>{data.header.title}</span>
				</a>
			) : (
				<Link
					target={data.header?.target ? data.header?.target : '_self'}
					href={data.header.value ? data.header.value : ''}>
					<a
						target={data.header?.target ? data.header?.target : '_self'}
						className='nav-link'>
						<span className={'underline-on-hover'}>{data.header.title}</span>
						{data.header?.target === '_blank' && (
							<img style={{ marginLeft: '10px' }} src={OpenPageOnNewTab.src} />
						)}
					</a>
				</Link>
			)}

			{data.childs.length !== 0 && (
				<div className={`${timer ? 'unhovered-list' : 'nav-dropdown-list'}`}>
					<>
					<div className='container-fluid'>
						<div className='row align-items-stretch'>
							<div className='col-3'>
								<h3>{data.header.title}</h3>
								<div className='row'>
									{Array.isArray(data.childs[0]) ? (
										data.childs.map((child, index) => (
											<div className='col-6'>
												{/* <h4>
												<a href='#'>
													<span className='underline-on-hover'>TELEVISIONS</span>
												</a>
											</h4> */}
												<ul>
													{child.map((colum, index) => (
														<li key={`colum-${index}`}>
															<Link
																target={
																	colum.header?.target
																		? colum.header?.target
																		: '_self'
																}
																href={
																	colum.header.value ? colum.header.value : ''
																}>
																<a
																	target={
																		colum.header?.target
																			? colum.header?.target
																			: '_self'
																	}>
																	<span className='underline-on-hover'>
																		{colum.header.title}
																	</span>
																	{colum.header?.target === '_blank' && (
																		<img
																			style={{ marginLeft: '10px' }}
																			src={OpenPageOnNewTab.src}
																		/>
																	)}
																</a>
															</Link>
														</li>
													))}
												</ul>
											</div>
										))
									) : (
										<NavBarDropDownSublist data={data} />
									)}
								</div>
							</div>
							{data.products.length !== 0 && (
								<div
									className='col-7 mb-auto mt-6 mx-auto'
									style={{ height: 'fit-content' }}>
									<div className='row align-items-stretch '>
										{data.products.map((product, index) => (
											<Link
												target={product?.target ? product?.target : '_self'}
												href={product.url ? product.url : ''}>
												<a
													target={product?.target ? product?.target : '_self'}
													className={`col-${12 / data.products.length}`}
													style={{ padding: '0 6px' }}>
													<CustomImage
														src={product.image}
														alt='featured image'
													/>
												</a>
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
					<div className='dropdown-mouse-exit-bottom'
						onMouseOut={() => timerCheckHandler(false, itemIndex)}
					/>
					</>
				</div>
			)}
		</li>
	)
}

export default NavBarDropDown
