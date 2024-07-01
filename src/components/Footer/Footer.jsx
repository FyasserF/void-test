import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    const links = [
        'Contact', 'Mentions légales', 'Vie Privée et Données Personnelles', 'Politique des cookies', 'Entreprise Today', 'Nos publications', 'Plan du site', 'Annuaire', 'Accessibilité : conformité partielle', 'Code de Conduite'
    ]
    return (
        <div className="Footer">
            <div className="top">
                <div className="logo">
                    <h2>Logo</h2>
                </div>
                <div className="right">
                    <div className="links">
                        <span>suivez nous</span>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-tiktok"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-whatsapp"></i>

                    </div>
                    <div className="hautPage">
                        <a href='#'>Haut de la page <i className="fa-solid fa-arrow-up"></i></a>
                    </div>
                </div>
            </div>
            <div className="buttom">
                <div className="links">
                    {links.map((item, index) => (
                        <Link key={index}>{item}</Link>
                    ))}
                </div>
                <p>© Entreprise 2004-2024 - Tous droits réservés</p>
            </div>
        </div>
    )
}
