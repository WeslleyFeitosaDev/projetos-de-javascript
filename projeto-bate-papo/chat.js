const firebaseConfig = {
    apiKey: "AIzaSyCtuIjdByM3i_chee4o9vmNmkGJdqw8oRA",
    authDomain: "bate-papo-7ebab.firebaseapp.com",
    projectId: "bate-papo-7ebab",
    appId: "1:545238221085:web:927c716919cd148e0261f4",
};

firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
let input_mensagem=document.getElementById("input_mensagem");
let bnt_enviar=document.getElementById("bnt_enviar");
let caixa_chat=document.getElementById("caixa_chat");
let minha_mensagem=()=>{
    let campo_minha_mensagem=document.createElement("div")
    campo_minha_mensagem.setAttribute("class","campo_sua_mensagem");
    let mensagem_sua=document.createElement("p");
    if(input_mensagem.value !=""){
        mensagem_sua.innerHTML=input_mensagem.value;
        caixa_chat.appendChild(campo_minha_mensagem);
        campo_minha_mensagem.appendChild(mensagem_sua);
    }
}
    

bnt_enviar.addEventListener("click",()=>{
    if(input_mensagem.value !=""){
        minha_mensagem();
        
    }
    
})

