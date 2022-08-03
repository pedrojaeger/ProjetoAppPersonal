import Link from "next/link";




export default function NavBarIndex() {
    return (
        <section className="navbar">

            <Link href='/'>
                <a className="link"> HOME</a>
            </Link>


            <Link href="../login">
                <a className="link">LOGIN</a>
            </Link>


        </section>
    )
}