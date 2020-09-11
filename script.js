

let delay = 500;
let cards = ['img/logo-atoll.png', 'img/logo-cyrus.png', 'img/logo-maxell.png', 
    			 'img/logo-mf.png', 'img/logo-triangle.png', 'img/logo-adeo.png', 
    			 'img/product-adeo.png', 'img/product-atoll.png', 'img/product-cyrus.png', 
    			 'img/product-maxell.png', 'img/product-mf.png', 'img/product-triangle.png'];

let cardsSort = cards.sort(() => {
   return 0.5 - Math.random();
});


function backCards() {
    let backImg = document.querySelectorAll(".hide");
	cardsSort.forEach((el, i) => {
	    if (backImg[i]) {
	        backImg[i].src = 'img/logo-ctc.png';
	    }
	});
}


let img = document.querySelectorAll(".flip-container img");
function changeCards() {
    //let img = document.querySelectorAll(".flip-container img");
    cardsSort.forEach((el, i) => {
        img[i].src = el;
    });
}


//changeCards();

backCards();




//let testcards = document.querySelectorAll(".flip-container img");
function flipCard() {
  this.classList.toggle("hide");
  this.parentNode.classList.toggle("check");
  changeCards();
  backCards();
  //checkTwoCards();
}



let arrCards = [{id:'adeo', 
			logo:'img/logo-adeo.png', 
			product:'img/product-adeo.png'},

			{id:'atoll', 
			logo:'img/logo-atoll.png', 
			product:'img/product-atoll.png'},

			{id:'cyrus', 
			logo:'img/logo-cyrus.png', 
			product:'img/product-cyrus.png'},

			{id:'maxell', 
			logo:'img/logo-maxell.png', 
			product:'img/product-maxell.png'},

			{id:'mf', 
			logo:'img/logo-mf.png', 
			product:'img/product-mf.png'},

			{id:'triangle', 
			logo:'img/logo-triangle.png', 
			product:'img/product-triangle.png'}]



//arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1
//arr.includes(elem);



function checkTwoCards() {
    let checkCards = document.querySelectorAll(".check img");
    if (checkCards.length === 2) {

    	for (let i = 0; i < arrCards.length; i++) {

	        if ((checkCards[0].src === arrCards[i].logo || checkCards[0].src === arrCards[i].product) && 
	        	(checkCards[1].src === arrCards[i].logo || checkCards[1].src === arrCards[i].product)) {
	            setTimeout(() => {
	                checkCards[0].parentNode.classList.remove("check");
	                checkCards[1].parentNode.classList.remove("check");
	                checkCards[0].parentNode.classList.add("remove");
	                checkCards[1].parentNode.classList.add("remove");
	            }, delay);           
	        } else {
	            setTimeout(() => {
	                checkCards[0].parentNode.classList.remove("check");
	                checkCards[1].parentNode.classList.remove("check");
	                checkCards[0].classList.add("hide");
	                checkCards[1].classList.add("hide");
	                backCards();
	            }, delay);
	        }    
        }  
    }
}




img.forEach(card => card.addEventListener('click', flipCard));

img.forEach(card2 => card2.addEventListener('click', checkTwoCards));












/*


function checkTwoCards() {
    let checkCards = document.querySelectorAll(".check img");
    if (checkCards.length === 2) {
    	for (let i = 0; i < arrCards.length; i++) {
		    if (checkCards[0].src === arrCards[i].logo && checkCards[1].src === arrCards[i].product ) {
		        alert('test is done');         
	        } 
	    } 
    }    
}








function checkTwoCards() {
    let checkCards = document.querySelectorAll(".check img");
    if (checkCards.length === 2) {

    	for (let i = 0; i < arrCards.length; i++) {

	        if (checkCards[0].src === arrCards[i].logo && checkCards[1].src === arrCards[i].product ) {
	            setTimeout(() => {
	                checkCards[0].parentNode.classList.add("remove");
	                checkCards[1].parentNode.classList.add("remove");
	                checkCards[0].parentNode.classList.toggle("check");
	                checkCards[1].parentNode.classList.toggle("check");
	            }, delay);           
	        } else {
	            setTimeout(() => {
	                checkCards[0].parentNode.classList.remove("check");
	                checkCards[1].parentNode.classList.remove("check");
	                checkCards[0].classList.toggle("hide");
	                checkCards[1].classList.toggle("hide");
	                backCards();
	            }, delay);
	        }
    
      
        }  


    }
}






function checkTwoCards() {
    let checkCards = document.querySelectorAll(".check img");
    if (checkCards.length === 2) {
        if (checkCards[0].src === checkCards[1].src) {
            setTimeout(() => {
                checkCards[0].parentNode.classList.add("remove");
                checkCards[1].parentNode.classList.add("remove");
                checkCards[0].parentNode.classList.toggle("check");
                checkCards[1].parentNode.classList.toggle("check");
            }, delay);           
        } else {
            setTimeout(() => {
                checkCards[0].parentNode.classList.remove("check");
                checkCards[1].parentNode.classList.remove("check");
                checkCards[0].classList.toggle("hide");
                checkCards[1].classList.toggle("hide");
                backCards();
            }, delay);
        }
    }
}





function checkTwoCards() {
    let checkCards = document.querySelectorAll(".check img");
    if (checkCards.length === 2) {
        if (checkCards[0].src === checkCards[1].src) {      
                checkCards[0].classList.add("remove");
                checkCards[1].classList.add("remove");
                checkCards[0].classList.toggle("check");
                checkCards[1].classList.toggle("check");            
        } else {           
                checkCards[0].classList.add("hide");
                checkCards[1].classList.add("hide"); 
                backCards();          
        }
    }
}




function checkTwoCards() {
    let checkCards = document.querySelectorAll(".flip-container div img");
    
    if (checkCards[0].src === checkCards[1].src) {      
                alert('tototototototototto');       
    } 
    
}



let cards = ['img/logo-atoll.png', 'img/logo-cyrus.png', 'img/logo-maxell.png', 
    			 'img/logo-mf.png', 'img/logo-triangle.png', 'img/logo-adeo.png', 
    			 'img/product-adeo.png', 'img/product-atoll.png', 'img/product-cyrus.png', 
    			 'img/product-maxell.png', 'img/product-mf.png', 'img/product-triangle.png'];






function flipCard() {
  this.classList.toggle('show');
  backCards();
}
testcards.forEach(card => card.addEventListener('click', flipCard));






function flipCard() {
  this.classList.toggle('show');
  this.classList.toggle('hide');
  backCards();
}
testcards.forEach(card => card.addEventListener('click', flipCard));










el.classList.remove("hide");
el.classList.toggle("showme");






const testcard = document.getElementById('clickcard1');
//const testcard = document.querySelectorAll("img");
testcard.addEventListener("click", function(){
  testcard.classList.toggle('show');
  changeCards();
}); 








let cardsObj = [{id:'card1'}, {id:'card2'}, {id:'card3'}, {id:'card4'}, {id:'card5'}, {id:'card6'}, 
				{id:'card7'}, {id:'card8'}, {id:'card9'}, {id:'card10'}, {id:'card11'}, {id:'card12'}];
function fillContent (currentSect){
	let res = cardsObj.find(obj => obj.id === currentSect.target.id);
	res.classList.toggle('show');
};
const sect = document.getElementById('flip-cont');
sect.addEventListener('click', fillContent);










let cardsObj = [{id:'card1', imgfront:'img/logo-ctc.png', imgback:'img/logo-adeo.png', name:'nirvana'}, 


			 {id:'card2', img:'img/logo-atoll.png', name:'korn'}, 
			 {id:'card3', img:'img/logo-cyrus.png'}, {id:'card4', img:'img/logo-maxell.png'}, 
			 {id:'card5', img:'img/logo-mf.png'}, {id:'card6', img:'img/logo-triangle.png'}, 

			 {id:'card7', img:'img/product-adeo.png'}, {id:'card8', img:'img/product-atoll.png'}, 
			 {id:'card9', img:'img/product-cyrus.png'}, {id:'card10', img:'img/product-maxell.png'}
			 {id:'card11', img:'img/product-mf.png'}, {id:'card12', img:'img/product-triangle.png'}]



function fillContent (currentSect){
	let res = cardsObj.find(obj => obj.id === currentSect.target.id);
	document.querySelector(".front").innerHTML = res.name
	//document.querySelector(".front").src = res.imgback
};



const sect = document.getElementById('dropchild');
sect.addEventListener('click', fillContent);







//function FillContentStart (){
	//let res = cards.find(obj => obj.id === currentSectStart.target.id);
	//document.querySelectorAll(".pic").src = 'img/logo-ctc.png';
	//document.querySelector("#card-container12").innerHTML = 'spinaaaaaaaaaaaaaaaa';
	//document.querySelector(".front").src = res.imgback;

	//document.querySelector(".test").innerHTML = cards[1].name;

	//alert(res.img);

	//document.getElementById('contentpic').src = 'img/logo-ctc.png';
	//document.getElementsByTagName("img").src = 'img/logo-ctc.png';
//};

//FillContentStart ();




function fillContent (currentSect){
	let res = cards.find(obj => obj.id === currentSect.target.id);
	//document.querySelector(".test").src = res.img;
	//document.querySelector("#card-container12").innerHTML = 'spinaaaaaaaaaaaaaaaa';
	//document.querySelector(".front").src = res.imgback;

	//document.querySelector(".test").innerHTML = res.name;

	alert(res.name);
};


const sect = document.getElementById('????????????');
sect.addEventListener('click', fillContent);






let cards = [{id:'card-container1', img:'img/logo-adeo.png', name:'nirvana'}, 

			 {id:'card-container2', img:'img/logo-atoll.png', name:'korn'}, 
			 {id:'card-container3', img:'img/logo-cyrus.png'}, 
			 {id:'card-container4', img:'img/logo-maxell.png'}, 
			 {id:'card-container5', img:'img/logo-mf.png'}, 
			 {id:'card-container6', img:'img/logo-triangle.png'}, 

			 {id:'card-container7', img:'img/product-adeo.png'}, 
			 {id:'card-container8', img:'img/product-atoll.png'}, 
			 {id:'card-container9', img:'img/product-cyrus.png'}, 
			 {id:'card-container10', img:'img/product-maxell.png'},
			 {id:'card-container11', img:'img/product-mf.png'}, 
			 {id:'card-container12', img:'img/product-triangle.png'}]





function createFrontFaceCard (){
  const frontImage = document.createElement("img");
  frontImage.classList.add("flip-container");
  frontImage.setAttribute("src", 'img/logo-ctc.png');
  document.body.append(frontImage);
};





DASHAKIM
const createFrontFaceCard = function(cardsContainer) {
  const frontImage = document.createElement("img");
  frontImage.classList.add("front-face");
  frontImage.setAttribute("src", frontImageQuestion);
  frontImage.setAttribute("alt", "icon-question");
  cardsContainer.appendChild(frontImage);
};






const sect = document.getElementById('card-container1');
sect.addEventListener('click', handler1);



function handler1() {
    document.querySelector("#card-container1").innerHTML = 'spina';
    document.querySelector("#card1").innerHTML = 'img/logo-mf.png';
};



let cards = [{id:'card1', imgfront:'img/logo-ctc.png', imgback:'img/logo-adeo.png', name:'nirvana'}, 


			 {id:'card2', img:'img/logo-atoll.png', name:'korn'}, 
			 {id:'card3', img:'img/logo-cyrus.png'}, {id:'card4', img:'img/logo-maxell.png'}, 
			 {id:'card5', img:'img/logo-mf.png'}, {id:'card6', img:'img/logo-triangle.png'}, 

			 {id:'card7', img:'img/product-adeo.png'}, {id:'card8', img:'img/product-atoll.png'}, 
			 {id:'card9', img:'img/product-cyrus.png'}, {id:'card10', img:'img/product-maxell.png'}
			 {id:'card11', img:'img/product-mf.png'}, {id:'card12', img:'img/product-triangle.png'}]




function fillContent (currentSect){
	let res = cards.find(obj => obj.id === currentSect.target.id);
	document.querySelector(".front").innerHTML = res.name
	//document.querySelector(".front").src = res.imgback
};






const sect = document.getElementById('main-container');
sect.addEventListener('click', fillContent);





const cardContainer = document.getElementById('card-container');
const card = document.getElementById('card');
cardContainer.addEventListener("click", function(){
  card.classList.add('flipper');
}); 


const cardContainer2 = document.getElementById('card-container2');
const card2 = document.getElementById('card2');
cardContainer2.addEventListener("click", function(){
  card2.classList.add('flipper');
});  










const cardContainer = document.getElementById('card-container');
const card = document.getElementById('card');
cardContainer.addEventListener("click", function(){
  card.classList.toggle('flipper');
});  

*/


