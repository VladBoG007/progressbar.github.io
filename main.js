const rating = document.getElementsByClassName('rating')[0];
const ratingtwo = document.getElementsByClassName('rating2')[0];
const ratingthree = document.getElementsByClassName('rating3')[0];
const block = document.getElementsByClassName('block');
const blocktwo = document.getElementsByClassName('block2');
const blockthree = document.getElementsByClassName('block3');

for (var i = 1; i < 100; i++){
	rating.innerHTML += "<div class='block'></div>";	
	ratingtwo.innerHTML += "<div class='block2'></div>";
	ratingthree.innerHTML += "<div class='block3'></div>";
	block[i].style.transform = "rotate(" + 3.6 * i +"deg)";
	block[i].style.animationDelay = `${i/40}s`;
	blocktwo[i].style.transform = "rotate(" + 3.6 * i +"deg)";
	blocktwo[i].style.animationDelay = `${i/40}s`;
	blockthree[i].style.transform = "rotate(" + 3.6 * i +"deg)";
	blockthree[i].style.animationDelay = `${i/40}s`;		
}
const counter = document.querySelector('.counter');
const counter2 = document.querySelector('.counter2');
const counter3 = document.querySelector('.counter3');

counter.innerText = 0;
counter2.innerText = 0;
counter3.innerText = 0;

const target = +counter.getAttribute('data-target');
const target2 = +counter2.getAttribute('data-target');
const target3 = +counter3.getAttribute('data-target');

const NumberCounter = () => {
	const value = +counter.innerText;
	if (value < target){
		counter.innerText = Math.ceil(value + 1);
		setTimeout(() => {
			NumberCounter()
		}, 25)
	}
}
const NumberCounter2 = () => {
	const value2 = +counter2.innerText;
	if (value2 < target2){
		counter2.innerText = Math.ceil(value2 + 1);
		setTimeout(() => {
			NumberCounter2()
		}, 25)
	}
}
const NumberCounter3 = () => {
	const value3 = +counter3.innerText;
	if (value3 < target3){
		counter3.innerText = Math.ceil(value3 + 1);
		setTimeout(() => {
			NumberCounter3()
		}, 25)
	}
}
NumberCounter()
NumberCounter2()
NumberCounter3()