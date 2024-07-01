import './SectionFive.css'
import img1 from '../../../../assets/sectionFive/sectionFive-img1.png'
import img2 from '../../../../assets/sectionFive/sectionFive-img2.png'
import img3 from '../../../../assets/sectionFive/sectionFive-img3.png'

export default function SectionFive() {
    const data = [
        {
            img: img1,
            title: "Rapport diversité, équité et inclusion",
            description: 'Au cours de la première année complète de notre nouvelle stratégie People & Culture, les enjeux de Diversité, Équité et Inclusion(DE & I) ont occupé le devant de la scène.Ce rapport célèbre les progrès concrets que nous avons réalisés pour refléter la diversité dans nos équipes dirigeantes, libérer tout le potentiel de nos collaborateurs et collaboratrices et avoir un impact sur l’environnement de travail mais aussi au - delà.'
        },
        {
            img: img2,
            title: "Notre héritage",
            description: 'Notre societé d’aujourd’hui s’appuie sur un héritage qui consiste à transformer l’impossible en possible.'
        },
        {
            img: img3,
            title: "Notre rapport intégré 2022",
            description: "Découvrez comment nous rendons possible l'impossible pour améliorer la vie des gens dans le monde."
        },
    ]
    return (
        <div className="SectionFive">

            <h1>Découvrir plus</h1>

            <div className="cards">
                {data.map(({ img, title, description }, index) => (
                    <div key={index} className="card">
                        <div className="img">
                            <img src={img} alt="" />
                        </div>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <button>Lisez le document <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                ))}

            </div>
        </div>
    )
}
