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
								<label htmlhtmlFor='filter'>32</label>
							</div>
							<span>3</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>40</label>
							</div>
							<span>2</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>43</label>
							</div>
							<span>11</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>50</label>
							</div>
							<span>11</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>55</label>
							</div>
							<span>14</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>58</label>
							</div>
							<span>1</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>60</label>
							</div>
							<span>1</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>65</label>
							</div>
							<span>15</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>70</label>
							</div>
							<span>1</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>75</label>
							</div>
							<span>9</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>100</label>
							</div>
							<span>5</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>120</label>
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
								<label htmlhtmlFor='filter'>Android TV</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>Fire TV</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'> Google TV</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'> Roku TV</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>Vidaa</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>XClass TV</label>
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
								<label htmlhtmlFor='filter'>UHD</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>Premium ULED & ULED</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>Laser Display</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>Full HD & HD</label>
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
								<label htmlhtmlFor='filter'>Laser Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>U9 Series </label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>U8 Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>U7 Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>U6 Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>H4 Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>R7 Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>R6 Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>A6 Series</label>
							</div>
							<span>10</span>
						</li>
						<li>
							<div>
								<input name='filter' type='checkbox' />
								<label htmlhtmlFor='filter'>A4 Series</label>
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
