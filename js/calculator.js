/**
 * @file A Javascript Calculator App; A freeCodeCamp Project
 * @author Bonface Mudiri < tastywebapps@gmail.com >
 * Web: https://www.linkedin.com/in/bonface/
 */


function addVal(val){

	document.getElementById("DisplayScreen").value += val

	var x = document.getElementById("DisplayScreen").value

	var arrX = []

	arrX.push(x)


	if(arrX[0] === "*" || arrX[0] === "+" || arrX[0] === "/"){
		document.getElementById("DisplayScreen").value = ""
	}

	document.getElementById("Display").value = 0
}

function result(){

	var  x = eval(document.getElementById("DisplayScreen").value)

	console.log(x)

	var myMap = new Map()

	myMap.set('0', x)

	var y = myMap.values()

	document.getElementById("Display").value = parseFloat((y.next().value).toFixed(7))

	document.getElementById("DisplayScreen").value = ""
}

function sqrt(){

	var x = document.getElementById("DisplayScreen").value
	var y = document.getElementById("Display").value

	var xLength = (x.split('')).length
	var yLength = (y.split('')).length

	if(yLength > 0 && xLength === 0){

		var x = parseFloat((Math.sqrt(document.getElementById("Display").value)).toFixed(7))

		document.getElementById("Display").value = ""

		document.getElementById("Display").value = x
	} else if(yLength === 0 && xLength > 0){
		var x = parseFloat((Math.sqrt(document.getElementById("DisplayScreen").value)).toFixed(7))

		document.getElementById("DisplayScreen").value = ""

		document.getElementById("Display").value = x

	} else{
		var x = parseFloat((Math.sqrt(document.getElementById("DisplayScreen").value)).toFixed(7))

		document.getElementById("DisplayScreen").value = ""

		document.getElementById("Display").value = x

	}

	/*
	var x = parseFloat((Math.sqrt(document.getElementById("DisplayScreen").value)).toFixed(7))

	document.getElementById("DisplayScreen").value = ""

	document.getElementById("Display").value = x

	*/	

}

function clearScreen(){

	document.getElementById("DisplayScreen").value = ""
	document.getElementById("Display").value = ""

}

function allClear(){

	memoryArr = []

	document.getElementById("DisplayScreen").value = ""
	document.getElementById("Display").value = ""

}

function backspace(){

	var arr = []

	arr.push(document.getElementById("DisplayScreen").value)

	var splitStrArr = arr.toString().split('')

	splitStrArr.pop()

	var popped = splitStrArr.join('')
	
	document.getElementById("DisplayScreen").value = popped

}

var memoryArr = []
var memVal

function memoryAdd(){

	var x = document.getElementById("DisplayScreen").value
	var y = document.getElementById("Display").value

	var xLength = (x.split('')).length
	var yLength = (y.split('')).length

	var memLength = memoryArr.length
	
	if(memLength === 0 && xLength > 0){
		document.getElementById("Display").value = "M"

		memoryArr.push(document.getElementById("DisplayScreen").value)
		document.getElementById("DisplayScreen").value = ""

		console.log("arr" + memoryArr)
	}else if(x === memoryArr.join('') && y === "M"){

		document.getElementById("DisplayScreen").value = ""
	    document.getElementById("Display").value += memoryArr.join('')


	} else if(x === "" && yLength > 0 && memLength === 0){
		memoryArr.push(y)
		document.getElementById("DisplayScreen").value = y
		document.getElementById("Display").value = "M"
	}


 
}

function memoryRecall(){

	document.getElementById("DisplayScreen").value = ""
	document.getElementById("DisplayScreen").value += memoryArr.join('')


	/*if(memoryArr.length > 0){

		document.getElementById("Display").value = ""

		document.getElementById("DisplayScreen").value += memoryArr.join('')
	}*/
}

function memoryRemove(){

	memoryArr = []

	var newMem = memoryArr.join('')
	//document.getElementById("Display").value = newMem

	document.getElementById("DisplayScreen").value = newMem //top to display nothing in memory

	document.getElementById("Display").value = ""

}

function exp(){

	var x = document.getElementById("DisplayScreen").value
	var y = document.getElementById("Display").value

	var xLength = (x.split('')).length
	var yLength = (y.split('')).length

	if(yLength > 0 && xLength === 0){

		var x = parseFloat(Math.exp(document.getElementById("Display").value))
		document.getElementById("DisplayScreen").value = x

		var v = document.getElementById("DisplayScreen").value

		document.getElementById("Display").value = v
		document.getElementById("DisplayScreen").value = ""

	} else if(yLength === 0 && xLength > 0){
		var x = parseFloat(Math.exp(document.getElementById("DisplayScreen").value))
		document.getElementById("DisplayScreen").value = x

		var v = document.getElementById("DisplayScreen").value

		document.getElementById("DisplayScreen").value = ""
		document.getElementById("Display").value = v
	} else{
		var x = parseFloat(Math.exp(document.getElementById("DisplayScreen").value))
		document.getElementById("DisplayScreen").value = x

		var v = document.getElementById("DisplayScreen").value

		document.getElementById("Display").value = v
		document.getElementById("DisplayScreen").value = ""
		
	}

}

function signBefore(){

	//Get value of first char of the display to check sign and replace
	var x = document.getElementById("DisplayScreen").value

	var arrX = []

	arrX.push(x)

	if(arrX[0] === "-"){
		arrX.replace(arrX[0], "+")
	}

	var pos = arrX.join('')

	if(Math.sign(document.getElementById("DisplayScreen").value) === -1){
		document.getElementById("DisplayScreen").value = -pos
		document.getElementById("DisplayScreen").value

	}else if(Math.sign(document.getElementById("DisplayScreen").value) === 1){
		document.getElementById("DisplayScreen").value = -(document.getElementById("DisplayScreen").value)
	}

	document.getElementById("DisplayScreen").value

}


