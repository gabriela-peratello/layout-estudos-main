isActive = 0;
let result = "Not Active.";
let isActive = false;
console.log(result, isActive)
if (isActive = true) {
  let result = "Active!";
}
console.log(result, isActive)


try {


     
} catch(erro){

    let text = `
    <strong>Nome do erro:</strong> ${erro.name} <br />
    <strong>Mensagem:</strong> ${erro.message} <br />
    <strong>Stack:</strong> <span>${erro.stack}</span>
    `;

    document.body.innerHTML = text

}


