// ==========================
// BRASIL API
// ==========================

// CONSULTA CEP

async function buscarCEP() {

    const cep = document.getElementById("cep").value.replace(/\D/g,'');

    const resultado = document.getElementById("resultadoCEP");

    if(cep.length !== 8){

        resultado.innerHTML = "Digite um CEP válido.";

        return;

    }

    try{

        const resposta = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);

        const dados = await resposta.json();

        resultado.innerHTML = `
            <p><strong>Rua:</strong> ${dados.street}</p>
            <p><strong>Bairro:</strong> ${dados.neighborhood}</p>
            <p><strong>Cidade:</strong> ${dados.city}</p>
            <p><strong>Estado:</strong> ${dados.state}</p>
        `;

    }catch(error){

        resultado.innerHTML = "CEP não encontrado.";

    }

}



// ==========================
// CONSULTA CNPJ
// ==========================

async function buscarCNPJ(){

    const cnpj = document.getElementById("cnpj").value.replace(/\D/g,'');

    const resultado = document.getElementById("resultadoCNPJ");

    if(cnpj.length !== 14){

        resultado.innerHTML = "Digite um CNPJ válido.";

        return;

    }

    try{

        const resposta = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);

        const dados = await resposta.json();

        resultado.innerHTML = `
            <p><strong>Empresa:</strong> ${dados.razao_social}</p>
            <p><strong>Fantasia:</strong> ${dados.nome_fantasia}</p>
            <p><strong>Situação:</strong> ${dados.descricao_situacao_cadastral}</p>
            <p><strong>Município:</strong> ${dados.municipio}</p>
            <p><strong>UF:</strong> ${dados.uf}</p>
        `;

    }catch(error){

        resultado.innerHTML = "CNPJ não encontrado.";

    }

}



// ==========================
// LISTA DE BANCOS
// ==========================

async function listarBancos(){

    const resultado = document.getElementById("resultadoBanco");

    resultado.innerHTML = "Carregando...";

    try{

        const resposta = await fetch("https://brasilapi.com.br/api/banks/v1");

        const bancos = await resposta.json();

        let html = "";

        bancos.slice(0,20).forEach(banco=>{

            html += `
                <p>
                <strong>${banco.code}</strong>
                - ${banco.name}
                </p>
            `;

        });

        resultado.innerHTML = html;

    }catch(error){

        resultado.innerHTML = "Erro ao consultar bancos.";

    }

}



// ==========================
// SCROLL SUAVE
// ==========================

document.querySelectorAll('nav a').forEach(link=>{

    link.addEventListener('click',function(e){

        e.preventDefault();

        const id=this.getAttribute('href');

        document.querySelector(id).scrollIntoView({

            behavior:'smooth'

        });

    });

});



// ==========================
// ANIMAÇÃO MENU
// ==========================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>80){

        header.style.background="#0d1117";

    }else{

        header.style.background="#161b22";

    }

});



// ==========================
// ANO AUTOMÁTICO
// ==========================

const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} - Fabio da Silva Alves | Todos os direitos reservados.`;