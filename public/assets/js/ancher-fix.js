window.addEventListener('load', function () {
	if (location.hash) {
		setTimeout(() => {
			location.href = location.hash
		}, 100)
	}
})
