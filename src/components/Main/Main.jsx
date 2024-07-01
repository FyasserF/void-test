import './Main.css'
import SectionOne from "./Section/SectionOne/SectionOne";
import SectionTwo from "./Section/SectionTwo/SectionTwo";
import SectionTree from "./Section/SectionTree/SectionTree";

export default function Main() {
    return (
        <div className="main">
            <SectionOne />
            <SectionTwo />
            <SectionTree />
        </div>
    )
}
