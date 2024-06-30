import img1 from '../../../../assets/sectionOne-img1.png'
import './SectionOne.css'


export default function SectionOne() {
    return (
        <div className="sectionOne">
            <div className="text">
                <h2>
                    Le drapeau de la lutte
                    contre les méningites
                </h2>
                <p>
                    Créé en collaboration avec trois para-athlètes, Ellie Challis,
                    Théo Curin, Davide Morana et plusieurs membres de la
                    Meningitis Research Foundation / Confederation of Meningitis
                    Organisations, le drapeau de la lutte contre les méningites vise<br />
                    à sensibiliser le public à une maladie qui reste encore, à ce
                    jour, un problème majeur de santé publique à l’échelle
                    mondiale.
                </p>
                <button>En savoir plus <i className="fa-solid fa-arrow-up-right-from-square"></i></button>

            </div>
            <div className="img">
                <img src={img1} alt="" />
            </div>
        </div>
    )
}
