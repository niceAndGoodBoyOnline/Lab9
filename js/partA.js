let orderButton = document.getElementById('orderButton');
let gameZone = document.getElementById('gameZone');

let boxList = [];
let resetFlag = false;

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
		
		if (squareOrder < 4 || squareOrder > 100){
			gameZone.innerHTML = "4 to 100 boxes, as per my assignment";
		}
		
		else{
			
			let colorSat = 100;
			let colorLight = 50;
			
			for (let i = 0; i < squareOrder; i++){
				let colorRand =  "hsl( " + generateRainbow(i, squareOrder) + ',' + colorSat+'%'+ ',' + colorLight+'% )';
				if (i % 2 == 0){
					colorSat = 70
				}
				if (i % 5 == 0){
					colorLight ==75;
				}
				boxList.push(new gameBox(i, colorRand))	
				
			}
			appendBoxes(boxList);
			}
		
	}
}


function appendBoxes(boxList){
	
	for (let i = 0; i < boxList.length; i++){
		gameZone.appendChild(boxList[i]);
		setInterval(function() {randomSpot(boxList[i])}, 2000)		
	}
	
}


function gameBox(idNum, color){
	this.btn = document.createElement('button');
	this.btn.id = idNum;
	this.btn.style.width = '10em';
	this.btn.style.height = '5em';
	this.btn.style.top = (Math.random() * 90) + 'vh'
	this.btn.style.left = (Math.random() * 90) + 'vw';
	this.btn.style.backgroundColor = color;
	
	return this.btn;
}


function randomSpot(thisObject){

	let w = window.innerWidth;
	let h = window.innerHeight;	
	
	thisObject.style.position = 'absolute';
	
	axisX = (Math.random() * 90) + 'vw';
	axisY = (Math.random() * 90) + 'vh';
	
	thisObject.style.left = axisX;
	thisObject.style.top = axisY;
}


function generateRainbow(colorNum, colors){
	  if (colors < 1) colors = 1; 
	  return colorNum * (360 / colors) % 360;
}