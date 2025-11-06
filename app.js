// =============================================================
// ARQUIVO app.js PARA FIREBASE
// =============================================================

// 1. Cole aqui o objeto de configuração que você pegou do Firebase
// (Etapa 1, passo 3)
const firebaseConfig = {
  apiKey: "AIzaSyDO9v68Sban99x2mzOwpp3Z8y7ZB_aRSVU",
  authDomain: "project1-32045.firebaseapp.com",
  projectId: "project1-32045",
  storageBucket: "project1-32045.firebasestorage.app",
  messagingSenderId: "235590696101",
  appId: "1:235590696101:web:868b0031e58657ac16e14c"
};


// 2. Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// 3. Cria uma referência para o serviço de autenticação
const auth = firebase.auth();


// --- Lógica de Cadastro ---
const formCadastro = document.getElementById('form-cadastro');

if (formCadastro) {
    formCadastro.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Impede o recarregamento da página

        const email = evento.target.email.value;
        const senha = evento.target.password.value;

        // Função de cadastro do Firebase
        auth.createUserWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                // Cadastro bem-sucedido
                alert("Usuário cadastrado com sucesso! Faça o login.");
                window.location.href = "index.html"; // Redireciona para o login
            })
            .catch((error) => {
                // Trata os erros
                alert("Erro ao cadastrar: " + error.message);
                console.error("Erro de cadastro:", error);
            });
    });
}


// --- Lógica de Login ---
const formLogin = document.getElementById('form-login');

if (formLogin) {
    formLogin.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const email = evento.target.email.value;
        const senha = evento.target.password.value;

        // Função de login do Firebase
        auth.signInWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                // Login bem-sucedido
                const user = userCredential.user;
                alert("Login realizado com sucesso! Bem-vindo, " + user.email);
                // Redireciona para um painel (ex: dashboard.html)
                // window.location.href = "dashboard.html";
                console.log("Usuário logado:", user);
            })
            .catch((error) => {
                // Trata os erros (senha errada, usuário não encontrado)
                alert("Erro ao logar: 'Por favor, verifique seu e-mail e senha.'");
                console.error("Erro de login:", error.message);
            });
    });
}