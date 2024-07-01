import './Footer.css'

export default function Footer() {
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
        </div>
    )
}
