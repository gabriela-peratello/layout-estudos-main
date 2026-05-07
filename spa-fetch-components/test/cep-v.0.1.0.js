// VERSÃO NÃO CORRIGIDA

// Capturando os botões 
const btnThen = document.getElementById('btnThen')
const btnAsync = document.getElementById('btnAsync')
// Criar uma requisição HTTP com fetch e .then
// 1° then -> converte o JSON para objeto JavaScript e extrai dados
// 2° then -> exibe os dados extraidos
// Adicionando o event listener
btnThen.addEventListener('click', () => {
    // tem q ser dentro da função
    const cep = document.getElementById('cep').value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((resposta) => { if (!resposta.ok) { throw new Error("Código de Endereço Postal incorreto.") } return resposta.json() })
        .then((dados) => { console.log(dados) })
        .catch((error) => { console.warn(error) });
})
/* Criar uma requisição HTTP com fecth e async/await */
// Adicionando o event listener
btnAsync.addEventListener('click', async () => {
    const cep = document.getElementById('cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/ `;
    const consulta = fetch(url);
    async function buscarCep() {let resposta = await consulta;
        console.log(resposta) 
        let dataObj = await resposta.json(); console.log(dataObj);};
    buscarCep();})