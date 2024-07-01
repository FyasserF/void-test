import img1 from '../../../../assets/sectionOne/sectionOne-img1.png'
import img2 from '../../../../assets/sectionOne/sectionOne-img2.png'
import img3 from '../../../../assets/sectionOne/sectionOne-img3.png'
import './SectionOne.css'


export default function SectionOne() {
    const data = [
        {
            img: img1,
            title: "Le drapeau de la lutte contre les méningites",
            description: " Créé en collaboration avec trois para-athlètes, Ellie Challis, Curin, Davide Morana et plusieurs membres de la Meningitis Research Foundation / Confederation of Meningitis Organisations, le drapeau de la lutte contre les méningites vise à sensibiliser le public à une maladie qui reste encore, à ce jour, un problème majeur de santé publique à l’échelle mondiale."
        },
        {
            img: img2,
            title: "Les femmes au sein de Entreprise - Cristina",
            description: "Rencontrez Cristina Zamora, notre cheffe de projet pour les opérations de R&D en Amérique du Nord et l'une des nombreuses scientifiques inspirantes qui contribuent à renforcer la prochaine génération de femmes leaders dans le<br /> domaine de la santé et au-delà."
        },
        {
            img: img3,
            title: "Virus VS Bacteria",
            description: " Si vous n'avez pas encore entendu parler du #DrapeauMéningites, regardez la vidéo de Vaskange et découvrez la signification de chaque couleur."
        },
    ]
    return (
        <div className="sectionOne">
            {data.map(({ img, title, description }, index) => (
                <div key={index} className={`sectionOne-p${index + 1}`}>
                    <div className="text">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <button>En savoir plus <i className="fa-solid fa-arrow-up-right-from-square"></i></button>

                    </div>
                    <div className="img">
                        <div className="icon">
                            <i className="fa-solid fa-play"></i>
                        </div>
                        <img src={img} alt="" />
                    </div>
                </div>
            ))}
            
        </div>

    )
}
