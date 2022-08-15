let array = [2, 4, 4, 4, 5, 5, 7, 9]
let avaragefunc = (array) => {
	let sum = 0;
	for (let num of array) {
		sum += num
	}
	return sum / array.length
}
let avarageArray = (array) => {
	let avarage = avaragefunc(array)
	let avarageArray = [];
	for (let num of array) {
		avarageArray.push((num - avarage) * (num - avarage))
	}
	return avarageArray;
}
let dispersion = (array) => {
	let sum = 0;
	for (let num of array) {
		sum += num
	}
	return sum / (array.length - 1)
};
let sigma = (array) => {
	return Math.sqrt(dispersion(avarageArray(array)))
}
console.log(sigma(array))
