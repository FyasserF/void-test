import { Link } from "react-router-dom";
import './NavBar.css'
// import logo from '../../assets/Yasser_Imane.jpg'
export default function NavBar() {
    return (
        <div className="navBar">
            <div className="nav-left">
                <div className="logo">
                    <Link to='/'>Logo</Link>
                    {/* <img src={logo} alt="" width={80} /> */}
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
                    <div>
                        <i className="fa-solid fa-globe"></i>
                        <span>Global</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
