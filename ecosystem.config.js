module.exports = {
	apps: [
		{
			name: 'hisense_dev', // exec_mode: 'cluster', // instances: 'max', // Or a number of instances
			script: 'npm',
			args: 'run start'
		}
	],
	deploy: {}
}
