import img1 from '../../../../assets/sectionOne/sectionOne-img1.png'
import img2 from '../../../../assets/sectionOne/sectionOne-img2.png'
import img3 from '../../../../assets/sectionOne/sectionOne-img3.png'
import './SectionOne.css'


export default function SectionOne() {
    return (
        <div className="sectionOne">

            <div className="sectionOne-p1">
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

            <div className="sectionOne-p2">
                <div className="img">
                    <div className="icon">
                        <i className="fa-solid fa-play"></i>
                    </div>
                    <img src={img2} alt="" />
                </div>

                <div className="text">
                    <h2>
                        Les femmes au sein de
                        Entreprise - Cristina
                    </h2>
                    <p>
                        Rencontrez Cristina Zamora, notre cheffe de projet pour les
                        opérations de R&D en Amérique du Nord et l'une des
                        nombreuses scientifiques inspirantes qui contribuent à
                        renforcer la prochaine génération de femmes leaders dans le<br />
                        domaine de la santé et au-delà.
                    </p>
                    <button>En savoir plus <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                </div>
            </div>

            <div className="sectionOne-p3">
                <div className="text">
                    <h2>
                        200 jours avant les Jeux
                        Paralympiques
                    </h2>
                    <p>
                        Si vous n'avez pas encore entendu parler du
                        #DrapeauMéningites, regardez la vidéo de Vaskange et
                        découvrez la signification de chaque couleur.
                    </p>
                    <button>En savoir plus <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                </div>

                <div className="img">
                    <div className="icon">
                        <i className="fa-solid fa-play"></i>
                    </div>
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>

    )
}
