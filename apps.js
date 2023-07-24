const nomeDevs = document.querySelector('#Nome');
const sobrenomeDevs = document.querySelector('#sobrenomeDevs');
const emailDevs = document.querySelector("#email");
const devSenioridade = document.querySelector("#devSenioridade");
const caixaTexto = document.querySelector("#experiencia");
let radio = document.getElementsByName("devWeb")
let checbox = document.getElementsByName("tecnologia")
const botaoEnviar = document.querySelector("#botaoConcluir");
botaoEnviar.addEventListener('click',() => apresentarDevs())



function apresentarDevs(){
    let desenvovedorNovo = new Desenvolvedor(nomeDevs.value, sobrenomeDevs.value, emailDevs.value, selectAplicacao(), caixaTexto.value);
    getRadioValue();
    getCheckboxValue()
    desenvovedorNovo.apresentar();
    desenvovedorNovo.experiencias();

}




class Desenvolvedor {
    nomeDevs;
    sobrenomeDevs;
    emailDevs;
    devSenioridade;
    caixaTexto;
    constructor(nomeDevs, sobrenomeDevs, emailDevs,devSenioridade, caixaTexto) {
        this.nomeDevs = nomeDevs;
        this.sobrenomeDevs = sobrenomeDevs;
        this.emailDevs = emailDevs;
        this.devSenioridade = devSenioridade;
        this.caixaTexto = caixaTexto
    }

    apresentar(){
        return console.log(`Ola meu nome ${this.nomeDevs} ${this.sobrenomeDevs}, e sou ${this.devSenioridade}`)
    
    }

    experiencias() {
        return console.log(`${this.caixaTexto}`)
    }
}

function getRadioValue() {
    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked){
            console.log(radio[i].value)
        }
    }
}

function getCheckboxValue(){
    for(let i = 0; i < checbox.length; i++){
        if(checbox[i].checked){
            console.log(checbox[i].value)
        }
    }
}

function selectAplicacao(){
    if(devSenioridade.value == 'Selecione'){
        alert('Informe sua classificação')
    }else{
        return devSenioridade.value;
    }
}

window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        apresentarDevs();
    }
})
