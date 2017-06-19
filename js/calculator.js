function addVal(val){

	document.getElementById("DisplayScreen").value += val
}

function result(){

	var  x = eval(document.getElementById("DisplayScreen").value)

	console.log(x)

	var myMap = new Map()

	myMap.set('0', x)

	var y = myMap.values()

	document.getElementById("Display").value = (y.next().value).toFixed(2)

	document.getElementById("DisplayScreen").value = ""
}

function sqrt(){

	var x = (Math.sqrt(document.getElementById("DisplayScreen").value)).toFixed(2)

	document.getElementById("Display").value = x

	document.getElementById("DisplayScreen").value = ""

}

function clearScreen(){

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
