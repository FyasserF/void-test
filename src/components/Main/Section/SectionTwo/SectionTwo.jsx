import React from 'react'
import './SectionTwo.css'
import img1 from './../../../../assets/sectionTwo/sectionTwo-img1.png'
import img2 from './../../../../assets/sectionTwo/sectionTwo-img2.png'
import img3 from './../../../../assets/sectionTwo/sectionTwo-img3.png'

export default function SectionTwo() {
    const data = [
        {
            img: img1,
            title: "Virus VS Bacteria",
            description: "Ils font partie de votre vie, mais les connaissez-vous vraiment ? Nos scientifiques vous expliquent les principales différences entre un virus et une bactérie."
        },
        {
            img: img2,
            title: "Le parcours B Corp de Notre Santé Grand Public",
            description: "En obtenant la certification B Corp pour Entreprise Santé Grand Public en Amérique du Nord, en Allemagne, en Italie et en Amérique latine, nous faisons partie d'une communauté mondiale qui transforme le monde des affaires en une force pour le bien."
        },
        {
            img: img3,
            title: "Virus VS Bacteria",
            description: "Maladie tropicale négligée, la maladie du sommeil est généralement mortelle en l'absence de traitement. Les patients infectés par la variante la plus aiguë de la maladie, le T.b rhodesiense, n'ont malheureusement bénéficié que de peu d'innovations en matière de traitement. Mais l'espoir pointe à l'horizon. Pour ces patients, nous voyons le potentiel du premier traitement oral pour cette variante de la maladie, soutenant ainsi l'objectif d'élimination de la maladie du sommeil chez l’humain d'ici 2030."
        },
    ]
    return (
        <div className="SectionTwo">
            {data.map(({ img, title, description }, index) => (
                <div key={index} className="colomn">
                    <div className="img">
                        <div className="icon">
                            <i className="fa-solid fa-play"></i>
                        </div>
                        <img src={img} alt="" />
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button>En savoir plus <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                </div>
            ))}

        </div>
    )
}
