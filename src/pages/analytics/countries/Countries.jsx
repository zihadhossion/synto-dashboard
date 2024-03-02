import "./countries.scss";
import Topbar from "../../../components/ui/topbar/Topbar";
export default function Countries() {
    return (
        <section className="countries">
            <Topbar title={"visitor by country"} />
            <div className="countriesContainer">
                <Country title={"United States"} image={"https://spruko.com/demo/synto/Synto/dist/assets/img/flags/10.png"} desc={"39520"} />
                <Country title={"United States"} image={"https://spruko.com/demo/synto/Synto/dist/assets/img/flags/10.png"} desc={"39520"} />
                <Country title={"United States"} image={"https://spruko.com/demo/synto/Synto/dist/assets/img/flags/10.png"} desc={"39520"} />
                <Country title={"United States"} image={"https://spruko.com/demo/synto/Synto/dist/assets/img/flags/10.png"} desc={"39520"} />
                <Country title={"United States"} image={"https://spruko.com/demo/synto/Synto/dist/assets/img/flags/10.png"} desc={"39520"} />
                <Country title={"United States"} image={"https://spruko.com/demo/synto/Synto/dist/assets/img/flags/10.png"} desc={"39520"} />
                <Country title={"United States"} image={"https://spruko.com/demo/synto/Synto/dist/assets/img/flags/10.png"} desc={"39520"} />
            </div>
        </section>
    )
};

function Country({ title, desc, image }) {
    return (
        <article className="country">
            <div className="left">
                <img src={image} alt="" />
                <p className="title">{title}</p>
            </div>
            <p className="population">{desc}</p>
        </article>
    )
}