const alert = document.getElementById("alert");
const dropdownSmall = document.getElementById("dropdown--small");
const dropdownBig = document.getElementById("dropdown--big");
const showcase = document.querySelector(".showcase");
if (alert) {
	setTimeout(() => {
		alert.classList.add("alert--show");
	}, 100);
	setTimeout(() => {
		alert.classList.remove("alert--show");
	}, 3000);
}

setTimeout(() => {
	if (showcase) {
		const height = showcase.firstElementChild.clientHeight;
		console.log(height);
		showcase.setAttribute("style", `min-height: ${height + 40}px`);
	}
}, 10);

if (dropdownBig) {
	dropdownBig.addEventListener("click", ev => {
		const bigContent = document.getElementById("dropdown__content--big");
		bigContent.classList.toggle("dropdown__show");
	});
}

if (dropdownSmall) {
	dropdownSmall.addEventListener("click", ev => {
		const smallContent = document.getElementById("dropdown__content--small");
		const dropDownIcon = document.querySelector(".dropdown__icon");
		smallContent.classList.toggle("dropdown__show");
		dropDownIcon.classList.toggle("dropdown__icon--clicked");
	});
}
