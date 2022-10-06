import React, { useState } from 'react'

function FilterAside() {
	const [filterListCondition, setFilterListCondition] = useState(false)
	return (
		<div className='category'>
			<button
				onClick={() => setFilterListCondition(!filterListCondition)}
				className='accordion-btn'>
				Filters
			</button>
			<aside className={`filters-container ${filterListCondition && "open"}`}>
				<div>
					<h4>Screen Size</h4>
					<ul className='filter-list'>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>32</label>
							</div>
							<span>3</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>40</label>
							</div>
							<span>2</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>43</label>
							</div>
							<span>11</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>50</label>
							</div>
							<span>11</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>55</label>
							</div>
							<span>14</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>58</label>
							</div>
							<span>1</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>60</label>
							</div>
							<span>1</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>65</label>
							</div>
							<span>15</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>70</label>
							</div>
							<span>1</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>75</label>
							</div>
							<span>9</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>100</label>
							</div>
							<span>5</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>120</label>
							</div>
							<span>2</span>
						</li>
					</ul>
				</div>
				<div>
					<h4>Platform</h4>
					<ul className='filter-list'>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>Android TV</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>Fire TV</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'> Google TV</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'> Roku TV</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>Vidaa</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>XClass TV</label>
							</div>
							<span>10</span>
						</li>
					</ul>
				</div>
				<div>
					<h4>Technology</h4>
					<ul className='filter-list'>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>UHD</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>Premium ULED & ULED</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>Laser Display</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>Full HD & HD</label>
							</div>
							<span>10</span>
						</li>
					</ul>
				</div>
				<div>
					<h4>Series</h4>
					<ul className='filter-list'>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>Laser Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>U9 Series </label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>U8 Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>U7 Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>U6 Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>H4 Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>R7 Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>R6 Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>A6 Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlFor='filter'>A4 Series</label>
							</div>
							<span>10</span>
						</li>
					</ul>
				</div>
				<span className='clear-fields'>
					<button className='btn'>Clear all Filters</button>
				</span>
			</aside>
		</div>
	)
}

export default FilterAside
