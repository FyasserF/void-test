import { Link } from "react-router-dom";
import './NavBar.css'
import { useState } from "react";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="navBar">

            <div className="sideBtn">
                <i onClick={() => setIsOpen(true)} className="fa-solid fa-bars"></i>
            </div>

            <div className="nav-left">
                <div className="logo">
                    <Link to='/'>Logo</Link>
                </div>
                <div className="links">
                    <Link>Notre Entreprise</Link>
                    <Link>Notre Science</Link>
                    <Link>Votre Santé</Link>
                    <Link>Partenariat</Link>
                </div>
            </div>

            <div className="nav-right">
                <div className="links">
                    <Link>Média</Link>
                    <Link>Investisseurs</Link>
                    <Link>Carrières</Link>
                    <Link>Partenariat Paris 2024</Link>
                </div>
                <div className="icons">
                    <div>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <div className="lang">
                        <i className="fa-solid fa-globe"></i>
                        <span>Global</span>
                    </div>
                </div>
            </div>


            <div className={isOpen ? 'side open' : 'side'}>

                <div className="sideTopLayer">
                    <button className="sideBtn" onClick={() => setIsOpen(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    <div className="sideLinks">
                        <Link onClick={() => setIsOpen(false)}>Notre Entreprise</Link>
                        <Link onClick={() => setIsOpen(false)}>Notre Science</Link>
                        <Link onClick={() => setIsOpen(false)}>Votre Santé</Link>
                        <Link onClick={() => setIsOpen(false)}>Partenariat</Link>
                        <Link onClick={() => setIsOpen(false)}>Investisseurs</Link>
                        <Link onClick={() => setIsOpen(false)}>Carrières</Link>
                        <Link onClick={() => setIsOpen(false)}>Partenariat Paris 2024</Link>
                    </div>
                </div>
                <button className="sideButtonLayer" onClick={() => setIsOpen(false)}></button>




            </div>

        </nav>
    )
}
