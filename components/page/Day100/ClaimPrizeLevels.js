const ClaimPrizeLevels = ({ level, description, link, linkTitle }) => {
	return (
		<div className='day-100 claim-prize-level'>
			<div>{level}</div>
			<p>{description}</p>
			{link && <a href={link}>{linkTitle}</a>}
		</div>
	)
}

export default ClaimPrizeLevels
