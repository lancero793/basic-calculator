const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
let total = 0;

function eventsToButtons (){
	if ((typeof buttons != undefined) || (typeof buttons != null)) {
	for(const btn of buttons){
		btn.addEventListener("click", (e)=>{
			let btnTarget = e.target;
			if (!(btnTarget.classList.contains("btn-equal") || (btnTarget.classList.contains("btn-add")) || (btnTarget.classList.contains("btn-minus")) || (btnTarget.classList.contains("btn-divide")) || (btnTarget.classList.contains("btn-times")) || (btnTarget.classList.contains("btn-delete")))) {
				display.value += btnTarget.textContent;
			}
			if (btnTarget.classList.contains('btn-add')) {
				if (display.value != "") {
					display.value += btnTarget.textContent;
				}else{
					display.value = "";
				}
			}else if(btnTarget.classList.contains("btn-minus")){
				if (display.value != "") {
					display.value += btnTarget.textContent;
				}else{
					display.value = "";
				}
			}else if(btnTarget.classList.contains("btn-times")){
				if (display.value != "") {
					display.value += btnTarget.textContent;
				}else{
					display.value = "";
				}
			}else if(btnTarget.classList.contains("btn-divide")){
				if (display.value != "") {
					display.value += btnTarget.textContent;
				}else{
					display.value = "";
				}
			}else if(btnTarget.classList.contains("btn-equal")){
				operations();
			}else if(btnTarget.classList.contains("btn-delete")){
				cleanValues();
			}
		});
	}
}

}


let iconToggle = toggle.children[0].children[0];
function toggleTheme(){
	body.classList.toggle("active");
	toggle.classList.toggle("active");
	if (typeof body != undefined || typeof body != null) {
		if (iconToggle.classList.contains("uil-sun")) {
			iconToggle.classList.remove("uil-sun");
			iconToggle.classList.add("uil-moon");
		}else{
			iconToggle.classList.remove("uil-moon");
			iconToggle.classList.add("uil-sun");
		}
		if (body.classList.contains("active")) {
			localStorage.setItem("dark", "true");
		}else{
			localStorage.setItem("dark", "false");
		}
	}
}

function operations(){
	if (typeof display != undefined || typeof display != null) {
		total = eval(display.value);
		display.value = total;
		return total;
	}
}

function cleanValues(){
	if (typeof display != undefined || typeof display != null) {
		if (display.value != "" || total != 0) {
			display.value = "";
			total = 0;
		}
	}
}

function saveLocalStorage(){
	if (localStorage.getItem("dark") == "true") {
		toggle.classList.add("active");
		body.classList.add("active");
		iconToggle.classList.remove("uil-sun");
		iconToggle.classList.add("uil-moon");
	}
}

toggle.addEventListener("click", toggleTheme);

eventsToButtons();
saveLocalStorage();