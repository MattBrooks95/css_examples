function makeBoxes(numBoxes = 100) {
	const boxes = [];
	console.log("making boxes");
	for(let i = 0; i < numBoxes; i++) {
		boxes.push(document.createElement("div"));
	}
	document.querySelector("div.main").replaceChildren(...boxes);
}

document.addEventListener("DOMContentLoaded",() => makeBoxes());
