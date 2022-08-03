import React, { useState } from "react";
import NavBarIndex from "../shared/navbar-index";
import { useRouter } from "next/router";




export default function Login() {
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const router = useRouter();


    function fazLogin() {
        console.log('cliquei');
        console.log(login);

        if (login == 123) {
            console.log('loguei')
        } else {
            alert('Login Errado')
            return;
        } if (senha == 123) {
            router.push('../aluno')

        } else {
            alert("senha errada")
        }


    }

    return (
        <>
            <NavBarIndex />
            <div className="login">
                <div className="container">
                    <div className="info-login">

                        <label className="tittle-login">Login</label>
                        <input
                            className="input-login"
                            type="text"
                            name="login"
                            placeholder="login: 123"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        <label className="tittle-login">Senha</label>
                        <input
                            className="input-login"
                            type="text"
                            name="senha"
                            placeholder="Senha: 123"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} />
                        <button className="button-login" onClick={fazLogin}>Login</button>
                        <button className="button-login-acess">Primeiro Acesso</button>
                    </div>
                    {login}
                    <br></br>
                    {senha}

                </div>

            </div>
        </>
    )
}