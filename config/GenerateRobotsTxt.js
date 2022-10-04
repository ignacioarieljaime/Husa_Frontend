const fs = require('fs')

const crawlableRobotsTxt = `User-agent: *\nAllow: /`

const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /`

// Create a non-crawlable robots.txt in non-production environments
const robotsTxt =
	process.env.NODE_ENV === 'production'
		? crawlableRobotsTxt
		: uncrawlableRobotsTxt

// Create robots.txt file
fs.writeFileSync('public/assets/robots.txt', robotsTxt)

console.log(
	`Generated a ${
		process.env.NODE_ENV === 'production' ? 'crawlable' : 'non-crawlable'
	} public/assets/robots.txt`
)
