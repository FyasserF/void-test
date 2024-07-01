import './SectionFour.css'

export default function SectionFour() {
    const data = [
        {
            date: '24 février 2024',
            paragraph: 'Communiqué : Résultats de phase II montrent que le rilzabrutinib permet de réduire rapidement la sévérité des démangeaisons causées par l’urticaire chronique spontanée et d’améliorer significativement l’activité de la maladie chez l’adulte'
        },
        {
            date: '24 février 2024',
            paragraph: 'Media Update: Dupixent® continues scientific leadership with late-breaking results showing reduced airway inflammation and mucus plugging in adults with uncontrolled moderate-to-severe asthma'
        },
        {
            date: '23 février 2024',
            paragraph: 'Communiqué de presse : Dépôt du Document d’Enregistrement Universel 2023, contenant le Rapport Financier Annuel, et du « Form 20-F » américain'
        },
        {
            date: '23 février 2024',
            paragraph: 'Communiqué de presse : La FDA accorde un examen prioritaire à la demande de licence de produits biologique relative à Dupixent® pour le traitement de la BPCO avec inflammation de type 2'
        },
    ]


    return (
        <div className="SectionFour">
            <h1>Nos dernières informations</h1>
            <div className="coloumns">
                {data.map(({ date, paragraph }, index) => (
                    <div key={index} className="coloumn">
                        <h5>{date}</h5>
                        <p>{paragraph}</p>
                        <button>Lire le communiqué <i className="fa-solid fa-arrow-right"></i></button>
                        <i className="icon fa-solid fa-download"></i>
                    </div>
                ))}
            </div>

            <h3>Voir tous les communiqués de presse <i className="fa-solid fa-arrow-right"></i></h3>


        </div>
    )
}
