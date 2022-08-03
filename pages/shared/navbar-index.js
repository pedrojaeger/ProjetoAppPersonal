/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Image from "next/image";




export default function NavBarIndex() {
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

                <Link href='/'>
                    <a className="link"> HOME</a>
                </Link>


                <Link href="../login">
                    <a className="link">LOGIN</a>
                </Link>
            </div>


        </section >
    )
}