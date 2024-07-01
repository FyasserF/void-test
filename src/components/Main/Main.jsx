import './Main.css'
import SectionOne from "./Section/SectionOne/SectionOne";
import SectionTwo from "./Section/SectionTwo/SectionTwo";
import SectionTree from "./Section/SectionTree/SectionTree";
import SectionFour from './Section/SectionFour/SectionFour';
import SectionFive from './Section/SectionFive/SectionFive';

export default function Main() {
    return (
        <div className="main">
            <SectionOne />
            <SectionTwo />
            <SectionTree />
            <SectionFour />
            <SectionFive />
        </div>
    )
}
