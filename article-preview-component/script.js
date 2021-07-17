const shareOff = document.querySelector(".share-off");
const shareOn = document.querySelector(".share-on");

const styleShareOff = getComputedStyle(shareOff);
const styleShareOn = getComputedStyle(shareOn);

document.querySelector(".share-img").addEventListener('click', () => {
	if (styleShareOff.display === "flex" && window.screen.availWidth <= 1028) {
		shareOff.style.display = "none";
		shareOn.style.display = "flex";
	}

	const desktopShare = document.querySelector(".desktop-share-on");
	const desktopShareStyle = getComputedStyle(desktopShare);
	if (desktopShareStyle.display === "none" && window.screen.availWidth > 1028) {
		desktopShare.style.display = "flex";
		document.querySelector('.share-img').style.backgroundColor = "hsl(217, 19%, 35%)";
		document.querySelector('#share-svg').style.color = "#ffffff";
	}  else {					
		desktopShare.style.display = "none";
		document.querySelector('.share-img').style.backgroundColor = "hsl(210, 46%, 95%)";
	}
});

document.querySelector('.shareon-img').addEventListener('click', () => {
	if (styleShareOn.display === "flex" && window.screen.availWidth <= 1028) {
		shareOn.style.display = "none";
		shareOff.style.display = "flex";
	}
});

