import "./applicant.scss";
import Topbar from "../../../components/ui/topbar/Topbar";
import { applicantData } from "../../../data/dashSource";

function Applicant({ title, icon }) {
    return (
        <section className="applicant">
            <Topbar title={title} IconBox={icon} />
            <div className="applicantContainer">
                {applicantData.map((item, i) =>
                    <div className="user" key={i}>
                        <div className="imgBox">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="text">
                            <h3 className="name">{item.name}</h3>
                            <p className="desc">Applied for <span>{item.occupation}</span></p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
};

export default Applicant;
