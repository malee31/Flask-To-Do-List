var table, stored;
window.onload = () => {
	table = document.querySelector("table");
	stored = localStorage.getItem("list");
	if(typeof stored == "string" && stored.length == 0)
	{
		localStorage.setItem("list", table.innerHTML);
		stored = localStorage.getItem("list");
	}
	table.innerHTML = stored;
	document.querySelector("#addInput").onkeydown = e => {
		if(e.key == "Enter") addItem(e.target.value);
	};
	restore();
};

function restore()
{
	localStorage.setItem("list", table.innerHTML);
	rebindListeners();
}

function addItem(val)
{
	if(typeof val !== "string" || val.trim().length == 0) return;
	val = val.trim();
	document.querySelector("#addInput").value = "";
	let row = document.createElement("tr");
	let box = document.createElement("td");
	let todo = document.createElement("td");
	let del = document.createElement("td");
	box.innerHTML = "<input type='checkbox' onclick='chek(this)'>";
	todo.innerHTML = val;
	del.innerHTML = "<button onclick='clik(this)'>Remove</button>";
	row.appendChild(box);
	row.appendChild(todo);
	row.appendChild(del);
	table.appendChild(row);
	restore();
	rebindListeners();
}

function rebindListeners()
{
	for(let elem of document.querySelectorAll("button"))
	{
		elem.onclick = () => {
			clik(elem);
		};
	}
	for(let elem2 of document.querySelectorAll("input[type='checkbox']"))
	{
		if(elem2.classList.contains("checkedOff")) elem2.checked = true;
		elem2.onclick = () => {
			chek(elem2);
		};
	}
}

function clik(button)
{
	button.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
	restore();
}

function chek(boxx)
{
	console.log("check");
	if(!boxx.classList.contains("checkedOff"))
	{
		boxx.classList.add("checkedOff");
		boxx.parentNode.parentNode.getElementsByTagName("td")[1].classList.add("crossedOff");
	}
	else boxx.classList.remove("checkedOff");
	restore();
}
