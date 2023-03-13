const btnActions = document.querySelectorAll(".button-actions .button-item");

const createNewPosition = (el, posX, posY) => {
	let newPosY, newPosX;
	do {
		newPosY = Math.floor(Math.random() * window.innerHeight);
		newPosX = Math.floor(Math.random() * window.innerWidth);
	} while (newPosY === posY || newPosX === posX);
	el.style.position = "absolute";
	el.style.top = newPosY + "px";
	el.style.left = newPosX + "px";
};

btnActions.forEach((btn) => {
	btn.addEventListener("mouseover", (e) => {
		if (btn.classList.contains("btn-no")) {
			createNewPosition(btn, e.pageX, e.pageY);
		}
	});
	btn.addEventListener("click", (e) => {
		if (btn.classList.contains("btn-no")) {
			btn.style.opacity = 0;
		} else {
			alert("Ỏooo Love uuuuuu 🙈💓");
			window.location.href = "https://www.instagram.com/phan.shy/";
		}
	});
});
