import './SectionTree.css'
import img1 from '../../../../assets/sectionTree/sectionTree-img1.png'
import img2 from '../../../../assets/sectionTree/sectionTree-img2.png'
import img3 from '../../../../assets/sectionTree/sectionTree-img3.png'
import { useEffect, useState } from 'react'

export default function SectionTree() {
    const data = [
        {
            img: img1,
            info: {
                section: 'Your Health',
                date: '27 février 2024'
            },
            title: "Journée des maladies rares 2024 : L'équité en action"
        },
        {
            img: img2,
            info: {
                section: 'Your Health',
                date: '07 février 2024'
            },
            title: "#NoJargon: Plongez dans le monde de la science"
        },
        {
            img: img3,
            info: {
                section: 'Your Health',
                date: '05 février 2024'
            },
            title: "Cancer et travail : Agir ensemble"
        },
    ]
    const [cardIndex, setcardIndex] = useState(1)

    const handleNext = () => {
        cardIndex == 3 ? '' : setcardIndex(cardIndex + 1)
    }

    const handlePrevious = () => {
        cardIndex == 1 ? '' : setcardIndex(cardIndex - 1)
    }

    console.log(cardIndex)

    const handleResize = () => {
        if (window.innerWidth >= 700) {
            setcardIndex(1);
        }
    };

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="SectionTree">
            <div className="title">
                <h2>Entreprise Today</h2>
                <h4>
                    Lisez nos derniers articles
                    <i className="fa-solid fa-arrow-right"></i>
                </h4>
            </div>


            <div className="cards">
                {data.map(({ img, info, title }, index) => (
                    <div key={index} className={cardIndex === 1 ? 'card firstOne' : cardIndex === 2 ? 'card secendOne' : 'card thirdOne'}>
                        <div className="img">
                            <img src={img} alt="" />
                        </div>
                        <div className="details">
                            {info.section}<br />
                            {info.date}

                        </div>
                        <h2>{title}</h2>
                        <button>Lire l'article  <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                ))}
            </div>

            <div className="btns">
                <span>{cardIndex}/3</span>
                <div>
                    <button onClick={handlePrevious} disabled={cardIndex == 1}><i className="fa-solid fa-arrow-left"></i></button>
                    <button onClick={handleNext} disabled={cardIndex == 3}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>


        </div>
    )
}
