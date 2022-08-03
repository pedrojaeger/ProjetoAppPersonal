import React, { useState } from "react";
import NavBarIndex from "../shared/navbar-index";
import { useRouter } from "next/router";




export default function Login() {
    const [login, setLogin] = useState("");
    const router = useRouter();


    function fazLogin() {
        console.log('cliquei');
        console.log(login);

        if (login == 123) {
            console.log('loguei')
            router.push('../aluno')
        } else {
            alert('login errado tio')
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
                            placeholder="digite seu login"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)} />
                        <label className="tittle-login">Senha</label>
                        <input className="input-login" />
                        <button className="button-login" onClick={fazLogin}>Login</button>
                        <button className="button-login-acess">Primeiro Acesso</button>
                    </div>
                    {login}

                </div>

            </div>
        </>
    )
}