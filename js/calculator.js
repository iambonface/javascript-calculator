function addVal(val){

	document.getElementById("DisplayScreen").value += val
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

	var x = parseFloat((Math.sqrt(document.getElementById("DisplayScreen").value)).toFixed(7))


	document.getElementById("DisplayScreen").value = x

	document.getElementById("Display").value = ""


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

	document.getElementById("DisplayScreen").value = newMem /*top to display nothing in memory*/

	document.getElementById("Display").value = ""

}

function exp(){

	//document.getElementById("Display").value = document.getElementById("DisplayScreen").value

	var x = parseFloat(Math.exp(document.getElementById("DisplayScreen").value))
	document.getElementById("Display").value = x.toFixed(7)

	var v = document.getElementById("Display").value

	document.getElementById("DisplayScreen").value = v
	document.getElementById("Display").value = ""


}

function signBefore(){

	if(Math.sign(document.getElementById("DisplayScreen").value) === -1){
		document.getElementById("DisplayScreen").value = document.getElementById("DisplayScreen").value

	}else if(Math.sign(document.getElementById("DisplayScreen").value) === 1){
		document.getElementById("DisplayScreen").value = -(document.getElementById("DisplayScreen").value)
	}

	document.getElementById("DisplayScreen").value

}


