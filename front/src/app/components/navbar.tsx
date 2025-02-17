'use client'

import Image from "next/image"
import { useRouter } from "next/navigation";
import logoImg from "../../../public/logo.svg";

export default function Navbar() {
    const router = useRouter()


    return (
        <nav className="navBar">
            <div className="navButtons">
                <Image src={logoImg} alt="Logo" 
                    width={40}
                />
                <button className="buttonNav">Info</button>
                <button className="buttonNav">About</button>
            </div>
            <div className="signUpLogIn">
                <button className="buttonNav" onClick={() => router.push('/signup')}>SignUp</button>
                <button className="buttonNav">LogIn</button>
            </div>
        </nav>
    )
}