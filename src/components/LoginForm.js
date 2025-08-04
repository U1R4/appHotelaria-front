
export default function LoginForm() {
    const formulario = document.createElement('form');
    
    const email = document.createElement('input');
    email.type = 'email';
    email.className = '';
    email.placeholder = "Digite seu e-mail";
    formulario.appendChild(email);

    const senha = document.createElement('input');
    senha.type = 'password';
    senha.placeholder = 'digite sua senha';
    formulario.appendChild(senha);

    const btnLog = document.createElement('button');
    btnLog.type = 'submit';
    btnLog.textContent = 'Sing in';
    formulario.appendChild(btnLog);

    return formulario;
}