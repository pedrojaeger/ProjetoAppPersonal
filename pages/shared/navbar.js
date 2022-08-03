import Link from "next/link";


export default function NavBar({ children }) {
    return (
        <section className="navbar">

            <Link href="/">
                <a className="link">HOME</a>
            </Link>

            <Link href="../aluno" className="link">
                <a className="link">ALUNO</a>
            </Link>

            <Link href="../treinos" >
                <a className="link">TREINOS</a>
            </Link>


        </section >
    )
}