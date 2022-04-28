document.getElementById("enviar-mensagem").addEventListener("click", validaFormulario);

var nome = document.querySelector("#nomesobrenome");
var mensagem = document.querySelector("#mensagem");

function validaFormulario() {
	if(nome.value != "" && mensagem.value != "") {

	alert("Prontinho, sua mensagem foi enviada!");

	}else{

		alert("Por favor, verifique os campos de preenchimento.");
	}
}