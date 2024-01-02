window.loadHash = function () {
	if (location.hash)
		setTimeout(() => {
			location.href = location.hash
		}, 100)
}

window.addEventListener('load', window.loadHash)
