import SectionOne from "./Section/SectionOne/SectionOne";
import './Main.css'
import SectionTwo from "./Section/SectionTwo/SectionTwo";

export default function Main() {
    return (
        <div className="main">
            <SectionOne />
            <SectionTwo />
        </div>
    )
}
