let li = document.querySelectorAll('li');
let ul = document.querySelector('ul');
let submit = document.querySelector('.maincard-submit');

/* ul.onclick = (event) => {
	if (document.querySelector('.active')) {
		document.querySelector('.active').classList.remove('active');
	}
	event.target.classList.toggle('active');
}

submit.onclick = function () {
	if (!document.querySelector('.active')) {
		alert('Пожалуйста, выберите оценку');
		return;
	}
	let rating = document.querySelector('.active').innerHTML;
	document.querySelector('.thankyoucard-selected').innerHTML = `You selected ${rating} out of 5`;
	document.querySelector('.maincard').classList.add('hidden');
	document.querySelector('.thankyoucard').classList.remove('hidden');
} */

ul.addEventListener("click", (event) => {
	if (document.querySelector('.active')) {
		document.querySelector('.active').classList.remove('active');
	}
	event.target.classList.toggle('active');
})

submit.addEventListener("click", () => {
	if (!document.querySelector('.active')) {
		alert('Пожалуйста, выберите оценку');
		return;
	}
	let rating = document.querySelector('.active').innerHTML;
	document.querySelector('.thankyoucard-selected').innerHTML = `You selected ${rating} out of 5`;
	document.querySelector('.maincard').style.display = "none"
	document.querySelector('.thankyoucard').style.display = "block"
})
