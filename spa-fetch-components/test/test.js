
// Criar uma requisição HTTP com fetch e .then
// 1° then -> converte o JSON para objeto JavasCript e extrai dados
// 2° then -> exibe os dados extraidos
fetch('https://viacep.com.br/ws/01001000/json/')
.then((resposta) => {if(!resposta.ok){throw new Error ("Código de Endereço Postal incorreto.")} return resposta.json()})
.then((dados) => {console.log(dados)})
.catch((error) => {console.warn(error)});




