/* Menos que 18,5 - Abaixo do  peso
Entre 18,5 e 24,9 - normal
Entre 25 e 29,9 - sobrepeso
30 e 34,9 - Obesidade grau 1
35 e 39,9 - Obesidade grau 2
Mais que 40 - Obesidade grau 3
*/

const button = document.querySelector("#submit")
console.log(button)
let peso = document.querySelector("#peso")
let altura = document.querySelector("#altura")

function capture(e) {
	e.preventDefault();
	let pesoValue = Number(peso.value)
	let alturaValue = Number(altura.value)
	console.log (pesoValue,alturaValue)
	imc = imcConta(pesoValue,alturaValue);
	level = nivel(imc)
    resultado(imc, level)

}
button.addEventListener("click", capture)


function imcConta(pesoValue, alturaValue) {
	let imc = (pesoValue / alturaValue ** 2).toFixed(2)
	console.log(imc)
	return imc

	}

function nivel(imcc) {
	console.log(imc)
	if (imc < 18.5) {
		level = "abaixo do peso"
	} else if (imc <= 24.9) {
		level = "peso normal"
	} else if (imc <= 29.9) {
		level = "sobrepeso"
	} else if (imc <= 34.9) {
		level = "obesidade grau 1"
	} else if (imc <= 39.9) {
		level = "obesidade grau 2"
	}else {
		level = "obesidade grau 3"
	}

	return level

}

function resultado (imc, level) {
	const resultado = document.querySelector(".resultado")
	resultado.innerHTML = `<p id="result">O resultado é ${imc} (${level})</p>`
	levelResult = document.querySelector("#result")
	if(level === "peso normal" ) {
		levelResult.classList.add("result")
	}else{
		levelResult.classList.toggle("notResult")
	}
}




