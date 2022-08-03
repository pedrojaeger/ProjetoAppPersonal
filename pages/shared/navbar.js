import Link from "next/link";


export default function NavBar({ children }) {
    return (
        <section className="navbar">
            <div className="container-logo">

                <Link href="/">
                    <a>
                        <img src="assets/images/logo.png" alt="ada" className="logo" />
                    </a>
                </Link>
            </div>

            <div className="container-links">

                <Link href="/">
                    <a className="link">HOME</a>
                </Link>

                <Link href="../aluno" className="link">
                    <a className="link">ALUNO</a>
                </Link>

                <Link href="../treinos" >
                    <a className="link">TREINOS</a>
                </Link>

            </div>

        </section >
    )
}