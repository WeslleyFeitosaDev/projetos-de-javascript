const firebaseConfig = {
    apiKey: "AIzaSyCtuIjdByM3i_chee4o9vmNmkGJdqw8oRA",
    authDomain: "bate-papo-7ebab.firebaseapp.com",
    projectId: "bate-papo-7ebab",
    appId: "1:545238221085:web:927c716919cd148e0261f4",
};

firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
let bnt_entrar=document.getElementById("bnt_entrar");

bnt_entrar.addEventListener("click",()=>{
    let email=document.getElementById("email").value;
    let senha=document.getElementById("senha").value;
    let nome=document.getElementById("nome").value;
    auth.createUserWithEmailAndPassword(email,senha)
        .then((userCredential)=>{
            return userCredential.user.updateProfile({
                displayName: nome
            }).then(()=>{
                window.location.href="chat.html"
            }) 
        })  
        .catch(error => alert("Error: " + error.message));

    
})

auth.onAuthStateChanged((user)=>{
    if(user){
        console.log("Email: " + user.email);
        console.log("Email: " + user.uid);
        console.log("Email: " + user.displayName);
    }else{
        console.log("Ninguem logado");
    }
})