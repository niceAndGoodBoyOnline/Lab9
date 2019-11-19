let orderButton = document.getElementById('orderButton');
let gameZone = document.getElementById('gameZone');

let boxList = [];
let resetFlag = false;
let checkFlag = 0
let wrongFlag = false;

orderButton.onclick = manageInput;


function manageInput(){
	
	if (resetFlag == true){
		location.reload(true);
		console.log('reset page to avoid bugs outside scope of this assignment')
	}
	
	else
	{
		resetFlag = true;
	
		orderButton.innerHTML = "Reload Page"
		let squareOrder = document.getElementById('squareOrder').value;
		
		if (squareOrder < 5 || squareOrder > 100){
			gameZone.innerHTML = "4 to 100 boxes, as per my assignment";
		}
		
		else{
		
			for (let i = 0; i < squareOrder; i++){
				randomColor = generateColor()
				boxList.push(new gameBox(i, randomColor))	
				
			}
			appendBoxes(boxList);
			}
		
	}
}


function appendBoxes(boxList){
	
	for (let i = 0; i < boxList.length; i++){
		gameZone.appendChild(boxList[i]);;
		setTimeout(function() {randomSpot(boxList[i])}, 2000)		
	}
	
}


function gameBox(idNum, color){
	this.btn = document.createElement('button');
	this.btn.id = idNum;
	this.btn.style.position = 'absolute';
	this.btn.style.width = '10em';
	this.btn.style.height = '5em';
	this.btn.style.fontSize = '1vw';
	this.btn.style.left = idNum * 10 + 'em';
	this.btn.style.backgroundColor = color;
	this.btn.innerHTML = idNum + 1;
	this.btn.onclick = function() {checkOrder(idNum)}
	console.log(idNum);
	
	return this.btn;
}

function checkOrder(idNum){
	console.log("idNum")
	let messageZone = document.getElementById('messageZone');

	if (wrongFlag == true){
		messageZone.innerHTML = "Use your memory! Reload and try again...";
	}
	else if (idNum == checkFlag){
		messageZone.innerHTML = "Nice memory! That's " + (idNum+1) + "in a row. Keep going!";
		checkFlag += 1;
			
		if (checkFlag == boxList.length){
		messageZone.innerHTML = "CONGRATS! YOU WON!"		
		}
	}
	else{
		messageZone.innerHTML = "WRONG!";
		wrongFlag = true;
	}
	
}


function randomSpot(thisObject){

	let w = window.innerWidth;
	let h = window.innerHeight;	
	
	axisX = (Math.random() * 90) + 'vw';
	axisY = (Math.random() * 90) + 'vh';
	
	thisObject.style.left = axisX;
	thisObject.style.top = axisY;
}


function generateColor(colorNum, colors){
	 let hexList = Array.from('0123456789ABCEDF');
	 let newColor = "#";
	 
	 for (let i = 0; i < 6; i++){
		 newColor += hexList[Math.floor(Math.random() * 16)]
		 
	 }
	 console.log(newColor)
	 return newColor;
}